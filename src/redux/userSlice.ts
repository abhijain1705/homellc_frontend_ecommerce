import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../common/interface/interface";

const initialState = {
  firstName: "",
  lastName: "",
  remember: false,
  email: '',
} as UserInterface;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<UserInterface>) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.remember = action.payload.remember;
      state.email = action.payload.email;
    },
    logout(state) {
      state.firstName = "";
      state.lastName = "";
      state.remember=false;
      state.email = "";
    }
  },
});

export const { logIn, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;