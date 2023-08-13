import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWeatherLoading: false,
  weatherData: [],
};

const weatherSlice = createSlice({
  name: "getWeatherData",
  initialState,
  reducers: {
    getWeatherDataStart: (state) => {
      state.isWeatherLoading = true;
    },
    getWeatherDataSuccess: (state, { payload }) => {
      (state.isWeatherLoading = false), (state.weatherData = payload);
    },
    getWeatherDataFailed: (state) => {
      (state.isWeatherLoading = false), (state.weatherData = []);
    },
  },
});

export const {
  getWeatherDataStart,
  getWeatherDataSuccess,
  getWeatherDataFailed,
} = weatherSlice.actions;

export default weatherSlice.reducer;
