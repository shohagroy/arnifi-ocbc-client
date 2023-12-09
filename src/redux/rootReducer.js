import { baseApi } from "./features/baseApi/apiSlice";
import formResolverReducer from "./features/formResolver/formResolverSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  resolver: formResolverReducer,
};
