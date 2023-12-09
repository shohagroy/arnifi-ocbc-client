import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  validator: null,
};

const formResolverSlice = createSlice({
  name: "formResolver",
  initialState,
  reducers: {
    setFormValidator: (state, action) => {
      state.validator = action.payload;
    },
  },
});

export const { setFormValidator } = formResolverSlice.actions;
export default formResolverSlice.reducer;
