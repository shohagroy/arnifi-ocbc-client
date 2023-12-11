import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  validator: null,
  shareError: false,
};

const formResolverSlice = createSlice({
  name: "formResolver",
  initialState,
  reducers: {
    setFormValidator: (state, action) => {
      state.validator = action.payload;
    },
    setShareError: (state, action) => {
      state.shareError = action.payload;
    },
  },
});

export const { setFormValidator, setShareError } = formResolverSlice.actions;
export default formResolverSlice.reducer;
