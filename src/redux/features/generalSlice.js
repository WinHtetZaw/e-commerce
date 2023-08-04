import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../helper/helper";

const initialState = {
  categoryName: "",
  scrollable: true,
  isLogin: false,
};

let authUser;
if (getLocalStorage("auth-user")) {
  authUser = getLocalStorage("auth-user");
  initialState.favoriteProducts = authUser;
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
    setScrollable: (state, { payload }) => {
      if (payload) {
        state.scrollable = payload;
      } else {
        state.scrollable = !state.scrollable;
      }
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
  },
});

export const { searchByCategory, setScrollable, setIsLogin } =
  generalSlice.actions;
export default generalSlice.reducer;
