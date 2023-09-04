import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
  setSessionStorage,
} from "../../helper/helper";

const initialState = {
  categoryName: "",
  isLogin: false,
  cartAlert: false,
  paginateInfo: { skip: 0, limit: 10, activePage: 1 },
};

let authUser;
if (getLocalStorage("auth-user")) {
  authUser = getLocalStorage("auth-user");
  initialState.isLogin = authUser;
}

if (getSessionStorage("pagination-info")) {
  initialState.paginateInfo = getSessionStorage("pagination-info");
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
    setPaginateInfo: (state, { payload }) => {
      state.paginateInfo.skip = payload.skip;
      state.paginateInfo.limit = payload.limit;
      state.paginateInfo.activePage = payload.activePage;
      // setLocalStorage("pagination-info", state.paginateInfo);
      setSessionStorage("pagination-info", state.paginateInfo);
    },
  },
});

export const { searchByCategory, setIsLogin, setCartAlert, setPaginateInfo } =
  generalSlice.actions;
export default generalSlice.reducer;
