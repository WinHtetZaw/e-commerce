import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryName: "",
};

export const mixedSlice = createSlice({
  name: "mixedSlice",
  initialState,
  reducers: {
    searchByCategory: (state, { payload }) => {
      state.categoryName = payload;
    },
  },
});
