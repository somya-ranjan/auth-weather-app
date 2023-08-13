import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light",
};
const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.currentTheme = payload;
      localStorage.setItem("theme", payload);
    },
  },
});

export const { setTheme } = commonSlice.actions;

export default commonSlice.reducer;
