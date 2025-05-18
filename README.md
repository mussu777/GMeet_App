# G-Meet App

The **Meet App** is a real-time, cross-platform video calling solution built with React Native and powered by Zustand for sleek state management. It enables seamless group communication through unique Meet IDs, offering an intuitive and responsive user interface. With features like camera switching, mute/unmute controls, and optimized performance, Meet ensures smooth, lag-free video calls anytime, anywhere. Whether for remote meetings or casual catchups, Meet delivers a fast, interactive, and modern video conferencing experience on mobile.

## Key Features

1. **Dual Role-Based Authentication with JWT**: 
   - Ensures secure user identity management on both client and server.
   - Enabling authenticated access to protected video rooms and actions.
2. **Real-Time Video Calling with WebRTC + Socket.io**:
   - Empowers seamless, low-latency peer-to-peer communication via react-native-webrtc. 
   - Socket.io is used for signaling and user connection updates.
3. **Scalable State Management via Zustand**:
   - Lightweight and performant state management with Zustand.
   - It ensures real-time UI responsiveness without boilerplate.
4. **Camera & Media Permissions:**:
   - Dynamic access to camera and microphone using react-native-permissions, with user controls for toggling video/audio streams.
5. **High-Performance Multimedia Streaming:**:
   - Built using react-native-webrtc for direct media streaming.
   - Allows multi-user real-time calls with optimized bandwidth usage.
6. **Real-Time Status and Room Handling**:
   - Join via unique Meet ID and manage room presence dynamically with socket.io-backed communication.
7. **Robust Server-Side Integration with Express + Mongoose**:
   - Backend built with Node.js and Express, using MongoDB (via Mongoose) to store user sessions, tokens, and room data, ensuring reliability and scalability.


   
## Screens and Workflow

![First collection](https://drive.google.com/uc?export=view&id=191oDU8vU1Xfw_Wk10q87eccSHqYC4iVZ)
![Second collection](https://drive.google.com/uc?export=view&id=1g0mZYEGrHbfHg-3BGQL5w6zxEG4RAPx1)


1. **Profile Screen**: 
   - Takes name and image url from new user.
   
2. **Permission Screen**:
   - Requires permission for audio and video.

3. **Home Screen**:
   - Contains profile button to change personal information.
   - Join button to create new meetings.

4. **Create Meet Screen**:
   - Contains button for new meetings and input field to accept meeting id created by other users. 
   
5. **Joining Screen**:
   - Displays the meet id with audio/video icon and a join button to finally join meeting.

6. **Meet Screen**:
   - Displays the meet id which can be share to others and an end button to turnoff meeting.

7. **Camera Screen**:
   - Contains a flip button at top to switch camera.



## Technology Stack

### Client-side (Cross-Platform - React Native)

- **Language**: JavaScript.
- **Architecture**: Component-based with Zustand for state management and modular design for scalability.
- **Libraries & Utilities**:
  - **Zustand**: Minimal yet powerful state management for syncing real-time call status, authentication, and UI state with ease.
  - **Axios**: Used for making secure API calls and fetching remote data.
  - **React Native WebRTC**: Core engine for real-time peer-to-peer video and audio communication — crucial for building a Google Meet clone.
  - **Socket.io Client**: Enables low-latency, bi-directional signaling for session control and live user interactions.
  - **MMKV Storage**: Ultra-fast local storage used for caching auth tokens and maintaining session persistence.
  - **React Navigation (Native Stack)**: Efficient screen navigation designed for performance-critical, real-time applications.
  - **Reanimated + Gesture Handler**: Provides smooth, native-like transitions and interactive animations — enhancing UX during meetings.
  - **UUID**: Generates cryptographically secure meeting room IDs and participant identifiers to ensure uniqueness and privacy.
  - **React Native Permissions**: Dynamically handles runtime permissions for camera and mic access — essential for secure video calls.

### Server-side (Node.js with Express.js)

- **Language**: JavaScript.
- **Architecture**: Modular architecture with separation of concerns (controllers, middleware, models, routes).
- **Runtime**: Node.js.
- **Framework**: Express.js — lightweight and flexible web application framework.
- **Real-Time Communication**: socket.io — enables WebSocket-based real-time communication for features like live meetings, chat, and status updates.
- **Database**: MongoDB — used with Mongoose ODM for schema-based, structured data access and validation.
- **Error Handling**: express-async-errors — simplifies error handling in async route handlers.

- **APIs**:
  - `POST /create-session` - Creates a new WebRTC session with a unique session ID.
  - `GET /is-alive` — Checks if a session with the given sessionId is active/existing.

### Usage

1. Open the app and build your profile.
2. Provide Permission for audio/camera.
3. Click on join button to start new meeting or join others meeting
4. Mute/Unmute, toggle on/off camera, flip camera and end meeting button in live meet screen.

## Project Structure

### Client (Cross-Platform - React Native)
 
- **Assets**: Stores static resources like images, icons, and fonts used globally.
- **Components**: Contains reusable UI components such as buttons, inputs, and modals.
- **Hooks**: Custom React hooks for managing complex logic and side effects across the app.
- **Navigation**: Defines app navigation stacks and tab navigators for smooth screen transitions.
- **Screens**: Holds feature-specific screens representing distinct views in the app.
- **Styles**: Centralized styling files for consistent theming and UI design.
- **Utils**: Utility functions and helpers that support common operations throughout the app.



### Server (Node.js with Fastify & AdminJS)

- **Config Layer**: The config folder sets up database connection, session storage, admin panel configuration, and authentication logic.
- **Controller Layer**: The controller folder handles business logic for authentication, order management, product retrieval, and user tracking.
- **Middleware Layer**: The middleware layer handles request validation, verifying JWT access tokens for protected routes.
- **Model Layer**: The model layer defines Mongoose schemas for core entities like branch, category, counter, order, product, and user, centralizing the application's data structure.
- **Routes Layer**: The routes folder defines Fastify route handlers for different modules organizing the API endpoints.
