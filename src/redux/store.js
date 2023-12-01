import { baseApi } from "./features/baseApi/apiSlice";
import { reducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),

  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
});
