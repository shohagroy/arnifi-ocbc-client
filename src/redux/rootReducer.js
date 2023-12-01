import attractionReducer from "./features/attraction/attractionSlice";
import { baseApi } from "./features/baseApi/apiSlice";
import cartReducer from "./features/cart/cartSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  attraction: attractionReducer,
  cartData: cartReducer,
};
