import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
  name: "auth-slice",
  initialState: {
    loggedIn: JSON.parse(localStorage.getItem("loggedIn")),
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
  },
  reducers: {
    signOut(state, action) {
      state.loggedIn = false;
      state.token = null;
    },
    setToken(state, action) {
      state.loggedIn = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
