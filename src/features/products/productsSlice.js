import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../app/api";

const initialState = {
  products: [],
  currentCategory: [],
  bestSellers: [],
  total: 0,
  pageCount: 0,
  activePage: 1,
  product: {
    id: 0,
    name: "",
    description: "",
    price: 0,
    stock: 0,
    store_id: 0,
    category_id: 0,
    rating: 0,
    sell_count: 0,
    images: [],
  },
  isLoading: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params) => {
    if (params) {
      const response = await axios.get(`${API_URL}/products${params}&limit=24`);
      // console.log(params);
      // console.log("FETCHING AN URL WITH SORT", params);
      return response?.data;
    } else {
      const response = await axios.get(`${API_URL}/products?limit=24`);
      // console.log("FETCHING AN URL WITH NO SORT");
      return response?.data;
    }
  }
);

export const fetchMoreProducts = createAsyncThunk(
  "products/fetchMoreProducts",
  async ({ offset, params }) => {
    if (params) {
      const response = await axios.get(
        `${API_URL}/products${params}&limit=24&offset=${offset}`
      );
      // console.log(params);
      // // console.log(
      //   "fetching more products: ",
      //   `${API_URL}/products?limit=24&offset=${offset}${params}`
      // );
      return response?.data;
    } else {
      const response = await axios.get(
        `${API_URL}/products?limit=24&offset=${offset}`
      );

      return response?.data;
    }
  }
);

export const fetchProductsFromCategory = createAsyncThunk(
  "products/fetchProductsFromCategory",
  async (categoryId) => {
    const response = await axios.get(
      `${API_URL}/products?category=${categoryId}&limit=24`
    );
    return response?.data;
  }
);

export const fetchMoreProductsFromCategory = createAsyncThunk(
  "products/fetchMoreProductsFromCategory",
  async (categoryId, offset) => {
    const response = await axios.get(
      `${API_URL}/products?category=${categoryId}&limit=24&offset=${offset}`
    );
    return response?.data;
  }
);

export const fetchProductsBySellCount = createAsyncThunk(
  "products/fetchProductsBySellCount",
  async () => {
    const response = await axios.get(
      `${API_URL}/products?sort=sell_count:desc`
    );
    return response?.data.products.slice(0, 8);
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (productId) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response?.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return {
          ...state,
          products: [...action.payload.products],
          total: action.payload.total,
          activePage: 1,
          pageCount: Math.ceil(action.payload.total / 24),
        };
      })
      .addCase(fetchProduct.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        return { ...state, product: action.payload, isLoading: false };
      })
      .addCase(fetchProductsBySellCount.fulfilled, (state, action) => {
        return { ...state, bestSellers: action.payload };
      })
      .addCase(fetchProductsFromCategory.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchProductsFromCategory.fulfilled, (state, action) => {
        return {
          ...state,
          currentCategory: [...action.payload.products],
          isLoading: false,
        };
      })
      .addCase(fetchMoreProducts.fulfilled, (state, action) => {
        return {
          ...state,
          products: [...state.products, ...action.payload.products],
          activePage: state.activePage + 1,
        };
      });
  },
});

export const selectAllProducts = (state) => state.products.products;
export const selectBestSellers = (state) => state.products.bestSellers;
export const selectCategoryProducts = (state) => state.products.currentCategory;
export const selectLoadingState = (state) => state.products.isLoading;
export const selectActivePage = (state) => state.products.activePage;
export const selectProductTotal = (state) => state.products.total;
export const selecetCurrentProduct = (state) => state.products.product;

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
