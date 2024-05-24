import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../app/api";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  role_id: "",
  token: localStorage.getItem("authToken") || "",
  fav_products: [],
  isLoading: false,
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    const request = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem("token", request?.data?.token);
    return request?.data;
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (registerData) => {
    const request = await axios.post(`${API_URL}/signup`, registerData);
    console.log(request?.data.message);
    return request?.data.message;
  }
);

export const logoutUser = createAsyncThunk("user/logout", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem("token");
      resolve();
    }, 1000);
  });
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        role_id: action.payload.role_id,
        token: action.payload.token,
      };
    },
    addProductToFav(state, action) {
      if (
        state.fav_products.find((product) => product.id === action.payload.id)
      ) {
        return state;
      } else {
        state.fav_products.push(action.payload);
      }
    },
    resetUser(state) {
      return {
        ...state,
        token: "",
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        toast.success(`You have successfully logged in`, {
          className: "toast-message",
          position: "top-right",
        });
        return {
          ...state,
          email: action.payload.email,
          name: action.payload.name,
          role_id: action.payload.role_id,
          token: action.payload.token,
          isLoading: false,
        };
      })
      .addCase(loginUser.rejected, (state) => {
        toast.error("Login failed. Please check your username and password.", {
          theme: "dark",
          className: "toast-message",
        });
        return {
          ...state,
          isLoading: false,
        };
      })
      .addCase(logoutUser.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(logoutUser.fulfilled, (state) => {
        return {
          ...state,
          name: "",
          email: "",
          role_id: "",
          token: localStorage.getItem("authToken") || "",
          fav_products: [],
          isLoading: false,
        };
      })
      .addCase(registerUser.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(registerUser.fulfilled, (state) => {
        return {
          ...state,
          isLoading: false,
        };
      });
  },
});
export const selectUser = (state) => state.user;
export const selectUserLoading = (state) => state.user.isLoading;
export default userSlice.reducer;
export const { setUser, addProductToFav, resetUser } = userSlice.actions;
