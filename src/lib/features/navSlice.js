"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSidebar: true,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.openSidebar = !state.openSidebar;
    },
  },
});

export const { toggleSidebar } = navSlice.actions;
export const selectNav = (state) => state.nav;
export const navReducer = navSlice.reducer;
