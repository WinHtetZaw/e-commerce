import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: null,
  addressInfo: null,
};

export const updateInfoSlice = createSlice({
  name: "updateInfoSlice",
  initialState,
  reducers: {
    setPersonalInfo: (state, { payload }) => {
      state.personalInfo = payload;
    },
    setAddressInfo: (state, { payload }) => {
      state.addressInfo = payload;
    },
  },
});

export const { setPersonalInfo, setAddressInfo } = updateInfoSlice.actions;
export default updateInfoSlice.reducer;
