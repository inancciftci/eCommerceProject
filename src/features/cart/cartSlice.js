import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Retrieve cart data from localStorage
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
        });
      } else {
        state.cart.push({ product: action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to cart.`, {
          className: "toast-message",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementQuantity(state, action) {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart]; // Create a copy of the cart array
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex], // Copy the existing product object
          quantity: updatedCart[existingProductIndex].quantity + 1, // Update the quantity
        };
        return { ...state, cart: updatedCart }; // Return the updated state
      }
      return state; // Return the original state if product not found
    },

    decrementQuantity(state, action) {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart]; // Create a copy of the cart array
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex], // Copy the existing product object
          quantity: updatedCart[existingProductIndex].quantity - 1, // Update the quantity
        };
        return { ...state, cart: updatedCart }; // Return the updated state
      }
      return state; // Return the original state if product not found
    },
  },
});

export const selectCartItems = (state) => state.cart.cart;
export const { addProduct, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
