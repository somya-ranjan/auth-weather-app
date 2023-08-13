import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCurrencyExchangeLoading: false,
  currencyExchangeData: [],
};

const currencyExchangeSlice = createSlice({
  name: "getCurrencyDataExchange",
  initialState,
  reducers: {
    getCurrencyDataExchangeStart: (state) => {
      state.isCurrencyExchangeLoading = true;
    },
    getCurrencyDataExchangeSuccess: (state, { payload }) => {
      (state.isCurrencyExchangeLoading = false),
        (state.currencyExchangeData = payload);
    },
    getCurrencyDataExchangeFailed: (state) => {
      (state.isCurrencyExchangeLoading = false),
        (state.currencyExchangeData = []);
    },
  },
});

export const {
  getCurrencyDataExchangeStart,
  getCurrencyDataExchangeSuccess,
  getCurrencyDataExchangeFailed,
} = currencyExchangeSlice.actions;

export default currencyExchangeSlice.reducer;
