import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useWS} from '../service/api/WSProvider';
import {useLiveMeetStore} from '../service/meetStore';
import {useUserStore} from '../service/userStore';
import {addHyphens, requestPermissions} from '../utils/Helpers';
import {RTCView, mediaDevices} from 'react-native-webrtc';
import {goBack, replace} from '../utils/NavigationUtils';
import {prepareStyles} from '../styles/prepareStyles';
import {
  ChevronLeft,
  EllipsisVertical,
  Info,
  Mic,
  MicOff,
  MonitorUp,
  Share,
  Shield,
  Video,
  VideoOff,
} from 'lucide-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../utils/Constants';

const PrepareMeetScreen = () => {
  const {emit, on, off} = useWS();
  const {addParticipant, sessionId, addSessionId, toggle, micOn, videoOn} =
    useLiveMeetStore();
  const {user} = useUserStore();
  const [localStream, setLocalStream] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const handleParticipantUpdate = updatedParticipants => {
      setParticipants(updatedParticipants?.participants);
    };
    on('session-info', handleParticipantUpdate);
    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream?.release();
      }
      setLocalStream(null);
      off('session-info', handleParticipantUpdate);
    };
  }, [sessionId, emit, on, off]);

  const showMediaDevices = (audio, video) => {
    mediaDevices
      ?.getUserMedia({
        audio,
        video,
      })
      .then(stream => {
        setLocalStream(stream);
        const audioTrack = stream.getAudioTracks()[0];
        const videoTrack = stream.getVideoTracks()[0];
        if (audioTrack) {
          audioTrack.enabled = audio;
        }
      })
      .catch(err => {
        console.log('Error getting media devices', err);
      });
  };

  const toggleMicState = newState => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = newState;
      }
    }
  };

  const toggleVideoState = newState => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = newState;
      }
    }
  };

  const toggleLocal = type => {
    if (type == 'mic') {
      const newMicState = !micOn;
      toggleMicState(newMicState);
      toggle('mic');
    }
    if (type == 'video') {
      const newVideoState = !videoOn;
      toggleVideoState(newVideoState);
      toggle('video');
    }
  };

  const fetchMediaPermissions = async () => {
    const result = await requestPermissions();
    if (result.isCameraGranted) {
      toggleLocal('video');
    }
    if (result.isMicrophoneGranted) {
      toggleLocal('mic');
    }

    showMediaDevices(result.isCameraGranted, result.isMicrophoneGranted);
  };

  useEffect(() => {
    fetchMediaPermissions();
  }, []);

  const handleStartCall = async () => {
    try {
      emit('oin-session', {
        name: user?.name,
        photo: user?.photo,
        userId: user?.id,
        sessionId: sessionId,
        micOn,
        videoOn,
      });
      participants.forEach(i => addParticipant(i));
      addSessionId(sessionId);
      replace('LiveMeetScreen');
    } catch (error) {
      console.log('Error starting call:', error);
    }
  };

  const renderParticipantText = () => {
    if (participants?.length === 0) {
      return 'No one is in the call yet';
    }
    const names = participants
      ?.slice(0, 2)
      ?.map(p => p.name)
      ?.join(', ');
    const count =
      participants.length > 2 ? `and ${participants.length - 2} others` : '';
    return `${names}${count} in the call`;
  };

  return (
    <View style={prepareStyles.container}>
      <SafeAreaView />
      <View style={prepareStyles.headerContainer}>
        <ChevronLeft
          size={RFValue(22)}
          onPress={() => {
            goBack();
            addSessionId(null);
          }}
          color={Colors.text}
        />

        <EllipsisVertical size={RFValue(18)} color={Colors.text} />
      </View>
      <ScrollView  contentContainerStyle={{flex: 1}}>
        <View style={prepareStyles.videoContainer}>
          <Text style={prepareStyles.meetingCode}>{addHyphens(sessionId)}</Text>
          <View style={prepareStyles.camera}>
            {localStream && videoOn ? (
              <RTCView
                streamURL={localStream?.toURL()}
                style={prepareStyles?.localVideo}
                mirror={true}
                objectFit="cover"
              />
            ) : (
              <Image source={{uri: user?.photo}} style={prepareStyles?.image} />
            )}

            <View style={prepareStyles.toggleContainer}>
              <TouchableOpacity
                onPress={() => toggleLocal('mic')}
                style={prepareStyles.iconButton}>
                {micOn ? (
                  <Mic size={RFValue(12)} color={'#fff'} />
                ) : (
                  <MicOff size={RFValue(12)} color={'#fff'} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => toggleLocal('video')}
                style={prepareStyles.iconButton}>
                {videoOn ? (
                  <Video size={RFValue(12)} color={'#fff'} />
                ) : (
                  <VideoOff size={RFValue(12)} color={'#fff'} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={prepareStyles.buttonContainer}>
            <MonitorUp size={RFValue(14)} color={Colors.primary} />
            <Text style={prepareStyles.buttonText}>Share Screen</Text>
          </TouchableOpacity>
          <Text style={prepareStyles.peopleText}>
            {renderParticipantText()}
          </Text>
        </View>

        <View style={prepareStyles.infoContainer}>
          <View style={prepareStyles.flexRowBetween}>
            <Info size={RFValue(14)} color={Colors.text} />
            <Text style={prepareStyles.joiningText}>Joining information</Text>
            <Share size={RFValue(14)} color={Colors.text} />
          </View>

          <View style={{marginLeft: 38}}>
            <Text style={prepareStyles.linkHeader}>Meeting Link</Text>
            <Text style={prepareStyles.linkText}>
              meet.google.com/{addHyphens(sessionId)}
            </Text>
          </View>

          <View style={prepareStyles.flexRow}>
            <Shield size={RFValue(14)} color={Colors.text} />
            <Text style={prepareStyles.encryptionText}>Encryption</Text>
          </View>
        </View>
      </ScrollView>

      <View style={prepareStyles.joinContainer}>
        <TouchableOpacity
          style={prepareStyles.joinButton}
          onPress={handleStartCall}>
          <Text style={prepareStyles.joinButtonText}>Join</Text>
        </TouchableOpacity>
        <Text style={prepareStyles.notText}>Joining as</Text>
        <Text style={prepareStyles.peopleText}>{user?.name}</Text>
      </View>
    </View>
  );
};

export default PrepareMeetScreen;
