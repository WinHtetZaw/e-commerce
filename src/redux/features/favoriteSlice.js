import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../helper/helper";

const initialState = {
  favoriteProducts: [],
};

let storedFavorite;
if (getLocalStorage("stored-favorite")?.length > 0) {
  storedFavorite = getLocalStorage("stored-favorite");
  initialState.favoriteProducts = storedFavorite;
}

export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      const sameProducts = state.favoriteProducts.filter(
        (el) => el.id == payload.id
      );
      if (sameProducts.length > 0) {
        return state;
      }

      state.favoriteProducts = [...state.favoriteProducts, payload];

      setLocalStorage("stored-favorite", state.favoriteProducts);
    },

    removeFromFavorite: (state, { payload }) => {
      const lists = state.favoriteProducts.filter((el) => el.id != payload.id);
      state.favoriteProducts = lists;

      setLocalStorage("stored-favorite", state.favoriteProducts);
    },

    removeAll: (state) => {
      state.favoriteProducts = [];
      localStorage.removeItem("stored-favorite");
    },
  },
});

export const { addToFavorite, removeFromFavorite, removeAll } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
