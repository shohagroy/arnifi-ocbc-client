import { baseApi } from "./features/baseApi/apiSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
};
