import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    storeCartData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { storeCartData } = cartSlice.actions;
export default cartSlice.reducer;
