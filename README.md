# Grocery Delivery App

The **Grocery Delivery App** is a full-stack cross-platform mobile solution designed to connect customers with delivery partners in real-time. Developed using React Native and Node.js, it streamlines the process of grocery ordering, live tracking, and optimized delivery through seamless user interfaces and live location updates. With Socket.io-powered communication and Google Maps integration, the app delivers a fast, reliable, and engaging user experience for both customers and delivery personnel. It simplifies everyday shopping and enhances delivery efficiency.

## Key Features

1. **Dual Role-Based Authentication**: Secure login system for both customers and delivery partners using unique credentials..
2. **Real-Time Order Tracking with Socket.io**:
   - Enables continuous, bi-directional communication between customer and delivery partner.
   - Customers can track their grocery orders live, with status updates at every stage.
3. **Live GPS Location & Google Maps Integration**:
   - Delivery partners’ real-time location is fetched using GPS and plotted on Google Maps.
   - Provides turn-by-turn navigation and dynamically optimized routes.
4. **Interactive UI with Smooth Animations**:
   - Built with React Native animations to offer a fluid, responsive, and modern app experience.
   - Elevates usability with subtle transitions and visual feedback.
5. **Smart Order Management System**:
   - Customers can browse grocery items, manage their carts, and place orders with ease.
   - Delivery partners receive and update order statuses in real time for operational efficiency.
6. **Scalable Backend with Secure APIs**:
   - Backend powered by Node.js + Express with Socket.io for live updates.
   - Secure REST APIs handle authentication, order processing, and user data, designed to scale with traffic and growth.
   
## Screens and Workflow

![Image 1](https://drive.google.com/uc?export=view&id=16LZ-NOdvOq77lP4y4K2RgqmpPzjLG3wj)
![Image 2](https://drive.google.com/uc?export=view&id=1IXAzEUvLbrvq5XqfG-11OANHZYtgysXG)
![Image 3](https://drive.google.com/uc?export=view&id=1Phpzi7kXXiYkNHZnuxRGpy1tSF1TJIq_)
![Image 4](https://drive.google.com/uc?export=view&id=1TXsCyrURKpu9Z1JsrGZ_hwlqpPL0Nbyl)


1. **Login Screen**: 
   - Users log in with a mobile number assigned to them.
   - In top right delivery partners can login by clicking on riding moto button.
   
2. **Home Screen**:
   - Automatically set location after giving the location permission.
   - Contains profile icon where we can logout and see personal details.
   - A smooth carousel experience and a wide selection of grocery items ready to be explored and purchased with a tap.
   - A responsive HOC keeps users informed with real-time order statuses — Available or Delivered.

3. **Add To Cart Screen**:
   - Tapping a grocery category takes users to the Add to Cart page, where they can easily add or remove items.
   - Adjust quantities effortlessly and proceed smoothly to the next step in the checkout journey.

4. **Place Order Screen**:
   - Its a order details page where we can increse or decrese the quantity and also contains the bill details.
   - Below we can see our location and a button which contain total price and place order option.
   
5. **Order Complete Screen**:
   - Shows the confirmation of order with a check tick and address of user.

6. **Map Screen**:
   - Track your order in real-time with a dotted-line map view showing both user location and the branch.

7. **Order Summary Screen**:
   - Current order details are given with all fares and tax.

8. **Profile Screen**:
   - Profile details, past and current order with status can be seen.

9. **Delivery Login Screen**:
   - Delivery partner can login by their assigned email and password.

10. **Order Available Screen**:
    - It's a delivery partner home screen where newly placed available order can be seen.

11. **Order Delivered Screen**:
    - It's a delivery partner home screen where past delivered order can be seen.

12. **Accept Order Screen**:
    - Map containing real time location of delivery partner and an option of accept order.

13. **Order Accepted Screen**:
    - Shows the popup when the delvery partner accept order to deliver.

14. **Order Picked Up Screen**:
    - After accepting order picked up screen will be there where deilvery partner can pick up their order from the branch showing in map.

15. **Complete Delivered Screen**:
    - Reaching the destination of user through real time location delivery partner has deliverd option which make the order complete.


## Technology Stack

### Client-side (Cross-Platform - React Native)

- **Language**: JavaScript & TypeScript.
- **Architecture**: Component-based with Zustand for state management and modular design for scalability.
- **Libraries & Utilities**:
  - **React Navigation**: For stack-based and tab-based screen navigation.
  - **Zustand**: Lightweight state management for predictable app behavior.
  - **Axios**: For handling HTTP requests to backend APIs..
  - **JWT Decode**: To decode and validate JWT tokens for authentication.
  - **Component-based Architecture**: Enables reusable components throughout the app.
  - **MMKV**: Fast, persistent key-value storage used for caching and auth state.
  - **Lottie React Native**: To add engaging animations for user feedback.
  - **Reanimated & Gesture Handler**: For creating fluid, interactive UI transitions.
  - **React Native Maps**: For displaying real-time map data with branch and delivery locations.
  - **Maps Directions**: Integrates with Google Maps for route paths.
  - **Geolocation**: To fetch the user’s current GPS coordinates.

### Server-side (Node.js with Fastify & AdminJS)

- **Language**: JavaScript.
- **Architecture**: Modular architecture with separation of concerns (controllers, middleware, models, routes).
- **Runtime**: Node.js.
- **Framework**: Fastify — lightweight and fast web framework.
- **Admin Panel**: AdminJS — for admin dashboard and resource management.
- **Database**: MongoDB — used via mongoose ODM.
- **Authentication**: JWT (jsonwebtoken) and session management with @fastify/session and @fastify/cookie.
- **Real-Time Communication**: fastify-socket.io — WebSocket support.

- **APIs**:
  - `POST /customer/login` - Logs in a customer.
  - `POST /delivery/login` – Logs in a delivery partner.
  - `POST /refresh-token` – Refreshes access token.
  - `GET /user` – Retrieves authenticated user details.
  - `PATCH /user` – Updates authenticated user details.
  - `POST /order` – Creates a new order.
  - `GET /order` – Retrieves all orders.
  - `PATCH /order/:orderId/status` – Updates the status of a specific order.
  - `POST /order/:orderId/confirm` – Confirms a specific order.
  - `GET /order/:orderId` – Retrieves a specific order by ID.
  - `GET /categories` – Retrieves all product categories.
  - `GET /products/:categoryId` – Retrieves products by category ID.

### Usage

1. Open the app and log in using provided credentials.
2. Provide Permission for location, click on products to purchase.
3. Then add to cart page will appear, add items and place order.
4. Delivery Partner will log in using provided credentials.
5. In delivery partner home screen order will be available there under available section. 
6. Accept the available order and deliver it to the user from the given branch.

## Project Structure

### Client (Cross-Platform - React Native)
 
- **Assets**: Contains static files such as images, icons, and fonts used across the application.
- **Components**: Houses reusable UI components like buttons, search bar, tab bar etc.
- **Features**: Includes feature-specific logic, components, and state handling for individual application modules.
- **Navigation**: Manages route definitions and navigation-related logic.
- **Service**: Contains functions and modules responsible for API calls and backend interaction.
- **State**: Manages global state using tools like Zustand.
- **Styles**: Stores global and shared styles, including CSS/SCSS files and theme definitions.
- **Utils**: Provides utility/helper functions used throughout the application.

### Server (Node.js with Fastify & AdminJS)

- **Config Layer**: The config folder sets up database connection, session storage, admin panel configuration, and authentication logic.
- **Controller Layer**: The controller folder handles business logic for authentication, order management, product retrieval, and user tracking.
- **Middleware Layer**: The middleware layer handles request validation, verifying JWT access tokens for protected routes.
- **Model Layer**: The model layer defines Mongoose schemas for core entities like branch, category, counter, order, product, and user, centralizing the application's data structure.
- **Routes Layer**: The routes folder defines Fastify route handlers for different modules organizing the API endpoints.
