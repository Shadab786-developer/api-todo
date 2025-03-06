// Import necessary React and routing dependencies
import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import TaskApp from "./component/MainContainer/MainContainer.jsx";
import { Provider } from "react-redux";
import { store } from "./App/Store/Store.js";
import Login from "./component/Login/Login.jsx";
import Layout from "./Layout.jsx";

// Create a router configuration using JSX-style route definitions
// This defines the app's URL structure and which components to render at each path
const router = createBrowserRouter(
  createRoutesFromElements(
    // Layout acts as a wrapper component that contains common elements like the sidebar
    <Route path="/" element={<Layout />}>
      {/* When the path is "/", show the Login component */}
      <Route path="/" element={<Login />} />
      {/* When the path is "/TaskApp", show the TaskApp component */}
      <Route path="/TaskApp" element={<TaskApp />} />
    </Route>
  )
);

// Initialize the React application:
// 1. StrictMode enables additional checks and warnings
// 2. Provider makes Redux store available to all components
// 3. RouterProvider enables routing functionality
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
