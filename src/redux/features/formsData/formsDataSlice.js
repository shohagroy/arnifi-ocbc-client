import { getFromLocalStorage } from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formsData: !!getFromLocalStorage("form-data")
    ? JSON.parse(getFromLocalStorage("form-data"))
    : {},
};

const formsDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formsData = action.payload;
    },
  },
});

export const { setFormData } = formsDataSlice.actions;
export default formsDataSlice.reducer;
