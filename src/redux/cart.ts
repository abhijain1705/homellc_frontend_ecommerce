import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartInterface } from "../common/interface/interface";

const initialState: CartInterface = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleToHeart(
      state,
      action: PayloadAction<{ id: number; url: string; email: string }>
    ) {
      const { id, url, email } = action.payload;
      const userCart = state[email];

      // If the user object is not defined in the state, create a new one
      if (!userCart) {
        state[email] = { heart: [{ id, url }], bookmark: [] };
        return;
      }

      // Check if the item is already in the heart array
      const index = userCart.heart.findIndex((item) => item.url === url);

      // If the item is not in the heart array, add it
      if (index === -1) {
        userCart.heart.push({ id, url });
      } else {
        // If the item is in the heart array, remove it
        userCart.heart.splice(index, 1);
      }
    },
    toggleToBookmark(
      state,
      action: PayloadAction<{ id: number; url: string; email: string }>
    ) {
      const { id, url, email } = action.payload;
      const userCart = state[email];
    
      // If the user object is not defined in the state, create a new one
      if (!userCart) {
        state[email] = { heart: [], bookmark: [{ id, url }] };
        return;
      }
    
      // Check if the item is already in the heart array
      const index = userCart.bookmark.findIndex((item) => item.url === url);
    
      // If the item is not in the heart array, add it
      if (index === -1) {
        userCart.bookmark.push({ id, url });
      } else {
        // If the item is in the heart array, remove it
        userCart.bookmark.splice(index, 1);
      }
    },
    removeWhenLoggedOut(state, action: PayloadAction<{email: string}>) {
      if(state[action.payload.email]) {
        delete state[action.payload.email];
        return state;
      }
    }
  },
});

export const { toggleToHeart, toggleToBookmark, removeWhenLoggedOut } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
