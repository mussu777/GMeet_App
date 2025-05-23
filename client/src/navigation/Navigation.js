import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { navigationRef } from '../utils/NavigationUtils';

import HomeScreen from '../screens/HomeScreen';
import PrepareMeetScreen from '../screens/PrepareMeetScreen';
import LiveMeetScreen from '../screens/LiveMeetScreen';
import JoinMeetScreen from '../screens/JoinMeetScreen';
import SplashScreen from '../screens/SplashScreen';
import { WSProvider } from '../service/api/WSProvider';
import { Colors } from '../utils/Constants';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
      <WSProvider>
        <NavigationContainer ref={navigationRef}>
          {/* <StatusBar translucent={true} backgroundColor={Colors.primary} /> */}
          <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="JoinMeetScreen" component={JoinMeetScreen} />
            <Stack.Screen
              name="PrepareMeetScreen"
              component={PrepareMeetScreen}
            />
            <Stack.Screen name="LiveMeetScreen" component={LiveMeetScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </WSProvider>
    );
}

export default Navigation