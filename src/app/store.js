import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../app/globalSlice";
import productsReducer from "../features/products/productsSlice";
import userReducer from "../features/authentication/userSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    products: productsReducer,
    user: userReducer,
  },
});
