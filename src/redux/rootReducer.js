import { baseApi } from "./features/baseApi/apiSlice";
import formResolverReducer from "./features/formResolver/formResolverSlice";
import formsDataReducer from "./features/formsData/formsDataSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  resolver: formResolverReducer,
  forms: formsDataReducer,
};
