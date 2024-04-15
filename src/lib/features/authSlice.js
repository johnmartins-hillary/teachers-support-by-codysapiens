"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null,
  email: "",
  password: "",

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
    },
    logoutUser: (state) => {
      localStorage.clear();
      state.loggedInUser = null;
    },
    getAuthDetails: (state, action) => ({
      ...state,
      [action?.payload?.name]: action?.payload?.value,
    }),
  },
});

export const { setLoggedInUser, getAuthDetails, logoutUser } =
  authSlice.actions;
export const selectAuth = (state) => state.auth;
export const authReducer = authSlice.reducer;
