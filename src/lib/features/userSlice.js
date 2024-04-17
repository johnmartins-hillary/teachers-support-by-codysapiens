"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfileImage: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfileImg: (state, action) => {
      state.userProfileImage = action.payload;
    },
  },
});

export const { setUserProfileImg } = userSlice.actions;
export const selectUser = (state) => state.user;
export const userReducer = userSlice.reducer;
