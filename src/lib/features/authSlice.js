"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null,
  email: "",
  password: "",
  loggingin: false,
  creatingAccount: false,

  // reistration
  registerationEmail: "",
  registerationPassword: "",
  field: "",
  confirmPassword: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
      window.location.href="/dashboard/home"
    },
    setLoggingIn: (state, action) => {
      state.loggingin = action.payload;
    },
    setCreatingAccount: (state, action) => {
      state.creatingAccount = action.payload;
    },
    logoutUser: (state) => {
      localStorage.clear();
      state.loggedInUser = null;
      window.location.href = "/"
    },
    getAuthDetails: (state, action) => ({
      ...state,
      [action?.payload?.name]: action?.payload?.value,
    }),
  },
});

export const {
  setLoggedInUser,
  getAuthDetails,
  logoutUser,
  setLoggingIn,
  setCreatingAccount,
} = authSlice.actions;
export const selectAuth = (state) => state.auth;
export const authReducer = authSlice.reducer;
