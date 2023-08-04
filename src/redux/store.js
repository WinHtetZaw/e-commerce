import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/productApi";
import generalSlice from "./features/generalSlice";
import cartSlice from "./features/cartSlice";
import favoriteSlice from "./features/favoriteSlice";
import updateInfoSlice from "./features/updateInfoSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    generalSlice: generalSlice,
    cartSlice: cartSlice,
    favoriteSlice: favoriteSlice,
    updateInfoSlice: updateInfoSlice,
    // paginateSlice: paginateSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
