import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
  search: "",
};

const attractionSlice = createSlice({
  name: "attractions",
  initialState,
  reducers: {
    storeAttractionData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    searchQuery: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { storeAttractionData, searchQuery } = attractionSlice.actions;
export default attractionSlice.reducer;
