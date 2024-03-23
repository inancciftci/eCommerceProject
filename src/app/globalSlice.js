import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "./api";
import axios from "axios";

const initialState = {
  roles: [],
  categories: [],
  isLoading: false,
};

export const fetchRoles = createAsyncThunk("roles/fetchRoles", async () => {
  const response = await axios.get(`${API_URL}/roles`);
  return response.data;
});

export const fecthCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  }
);

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRoles.fulfilled, (state, action) => {
        return { ...state, roles: action.payload };
      })
      .addCase(fecthCategories.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(fecthCategories.fulfilled, (state, action) => {
        return { ...state, categories: action.payload, isLoading: false };
      });
  },
});

export default globalSlice.reducer;

export const globalLoading = (state) => state.global.isLoading;
export const selectAllCategories = (state) => state.global.categories;
export const selectAllRoles = (state) => state.global.roles;
