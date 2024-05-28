import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../app/globalSlice";
import productsReducer from "../features/products/productsSlice";
import userReducer from "../features/authentication/userSlice";
import cartReducer from "../features/cart/cartSlice";
import addressReducer from "../features/authentication/addressSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
    address: addressReducer,
  },
});
