import { getFromLocalStorage } from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formsData: JSON.parse(getFromLocalStorage("form-data")),
};

const formsDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // setFormValidator: (state, action) => {
    //   state.validator = action.payload;
    // },
  },
});

export const {} = formsDataSlice.actions;
export default formsDataSlice.reducer;
