import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../helper/helper";

const initialState = {
  categoryName: "",
  isLogin: false,
  cartAlert: false,
};

let authUser;
if (getLocalStorage("auth-user")) {
  authUser = getLocalStorage("auth-user");
  initialState.isLogin = authUser;
}

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    searchByCategory: (state, { payload }) => {
      if (!payload) {
        return state;
      }
      state.categoryName = payload;
    },
    setIsLogin: (state, { payload }) => {
      if (payload) {
        state.isLogin = payload;
        setLocalStorage("auth-user", state.isLogin);
      } else {
        state.isLogin = !state.isLogin;
        setLocalStorage("auth-user", state.isLogin);
      }
    },
    setCartAlert: (state, { payload }) => {
      if (payload) {
        state.cartAlert = payload;
      } else {
        state.cartAlert = !state.cartAlert;
      }
    },
  },
});

export const { searchByCategory, setIsLogin, setCartAlert } =
  generalSlice.actions;
export default generalSlice.reducer;
