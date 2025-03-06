// This Redux slice manages authentication state

import { createSlice } from "@reduxjs/toolkit";

// Create a slice for authentication with initial state of not authenticated
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false, // Tracks if user is logged in
    user: null, // Stores user information when logged in
  },
  reducers: {
    // Action to handle user login
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Save user data
    },
    // Action to handle user logout
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null; // Clear user data
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
