import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../app/api";
import axios from "axios";

const initialState = {
  address: [],
  card: [],
  something: "",
  status: "idle",
};

export const getAddress = createAsyncThunk("user/getAddress", async () => {
  const res = await axios.get(`${API_URL}/user/address`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return res?.data;
});

export const saveAddress = createAsyncThunk(
  "user/saveAddress",
  async (address) => {
    const res = await axios.post(`${API_URL}/user/address`, address, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return res?.data;
  }
);

export const getCards = createAsyncThunk("user/getCard", async () => {
  const res = await axios.get(`${API_URL}/user/card`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return res?.data;
});

export const saveCard = createAsyncThunk("user/saveCard", async (card) => {
  const res = await axios.post(`${API_URL}/user/card`, card, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return res?.data;
});

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        return {
          ...state,
          status: "completed",
          address: action.payload,
        };
      })
      .addCase(saveAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveAddress.fulfilled, (state, action) => {
        return {
          ...state,
          status: "completed",
          address: [...state.address, action.payload[0]],
        };
      })
      .addCase(getCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCards.fulfilled, (state, action) => {
        return {
          ...state,
          status: "completed",
          card: action.payload,
        };
      })
      .addCase(saveCard.fulfilled, (state, action) => {
        return {
          ...state,
          status: "completed",
          card: [...state.card, action.payload[0]],
        };
      });
  },
});

export default addressSlice.reducer;

export const selectAddress = (state) => state.address.address;
export const selectCards = (state) => state.address.card;
export const selectSomething = (state) => state.address.something;
export const selectAddressTitle = (state) => state.address.title;
