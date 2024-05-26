import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const storedCart = localStorage.getItem("cart");
const initialState = {
  cart: storedCart ? JSON.parse(storedCart) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity++;
        toast.info(`${action.payload.name} quantity updated.`, {
          className: "toast-message",
          position: "top-left",
          autoClose: 750,
        });
      } else {
        state.cart.push({ product: action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to cart.`, {
          className: "toast-message",
          position: "top-left",
          autoClose: 750,
          transition: Bounce,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteProduct(state, action) {
      const filteredCart = state.cart.filter(
        (item) => item.product.id !== action.payload.product.id
      );
      console.log("payload:", action.payload);
      console.log(state.cart);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      console.log(filteredCart, action.payload);
      return {
        ...state,
        cart: filteredCart,
      };
    },
    incrementQuantity(state, action) {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity++;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decrementQuantity(state, action) {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingProductIndex !== -1) {
        if (state.cart[existingProductIndex].quantity > 1) {
          state.cart[existingProductIndex].quantity--;
          localStorage.setItem("cart", JSON.stringify(state.cart));
        } else {
          const filteredCart = state.cart.filter(
            (item) => item.product.id !== action.payload.id
          );
          state.cart = filteredCart;
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
  },
});

export const selectCartItems = (state) => state.cart.cart;
export const {
  addProduct,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
