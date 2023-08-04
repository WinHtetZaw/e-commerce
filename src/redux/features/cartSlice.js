import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../helper/helper";

const initialState = {
  cartProducts: [],
  currentItemInfo: [],
  totalPrice: 0,
  shippingCost: 0,
};

let storedCart;
if (getLocalStorage("storedCart")?.products.length > 0) {
  storedCart = getLocalStorage("storedCart");
  initialState.cartProducts = storedCart.products;
  initialState.currentItemInfo = storedCart?.currentProduct;
  initialState.totalPrice = storedCart?.totalPrice;
}

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    removeAll: (state) => {
      state.cartProducts = [];
      state.currentItemInfo = [];
      state.totalPrice = 0;

      localStorage.removeItem("storedCart");
    },

    addToCart: (state, { payload }) => {
      // * check a product is already add or not
      const sameProducts = state.cartProducts.filter(
        (el) => el.id == payload.id
      );
      if (sameProducts.length > 0) {
        return state;
      }

      // * create an array to calculate current Item price and quantity
      state.currentItemInfo = [
        ...state.currentItemInfo,
        {
          currentProductId: payload.id,
          quantity: 1,
          singleItemPrice: payload.price,
        },
      ];

      state.cartProducts = [...state.cartProducts, payload];
      state.totalPrice += payload.price;

      const storedCart = {
        products: state.cartProducts,
        currentProduct: state.currentItemInfo,
        totalPrice: state.totalPrice,
      };
      setLocalStorage("storedCart", storedCart);
    },

    removeFromCart: (state, { payload }) => {
      // * filter cart products
      const lists = state.cartProducts.filter((el) => el.id != payload.id);

      // * find current item in currentItemInfo array to calculate current item price and quantity
      const filter = state.currentItemInfo.find(
        (el) => el.currentProductId == payload.id
      );

      state.cartProducts = lists;
      state.totalPrice = state.totalPrice - filter.singleItemPrice;

      const currentItemInfoLists = state.currentItemInfo.filter(
        (el) => el.currentProductId != payload.id
      );

      state.currentItemInfo = currentItemInfoLists;

      // * prepare array to store in local storage
      const storedCart = {
        products: state.cartProducts,
        currentProduct: state.currentItemInfo,
        totalPrice: state.totalPrice,
      };
      setLocalStorage("storedCart", storedCart);
    },

    // * when click + btn increase quantity and price method
    addQuantityPriceCalc: (state, { payload }) => {
      // * find current item in currentItemInfo array to calculate current item price and quantity
      const filter = state.currentItemInfo.find(
        (el) => el.currentProductId == payload.id
      );

      if (filter.quantity == payload.stock) {
        return;
      }

      filter.quantity += 1;
      filter.singleItemPrice += payload.price;
      state.totalPrice += payload.price;

      // * prepare array to store in local storage
      const storedCart = {
        products: state.cartProducts,
        currentProduct: state.currentItemInfo,
        totalPrice: state.totalPrice,
      };
      setLocalStorage("storedCart", storedCart);
    },

    // * when click - btn reduce quantity and price
    reduceQuantityPriceCalc: (state, { payload }) => {
      // * find current item in currentItemInfo array to calculate current item price and quantity
      const filter = state.currentItemInfo.find(
        (el) => el.currentProductId == payload.id
      );
      if (filter.quantity == 1) {
        return state;
      }
      filter.singleItemPrice -= payload.price;
      filter.quantity -= 1;
      state.totalPrice -= payload.price;

      // * prepare array to store in local storage
      const storedCart = {
        products: state.cartProducts,
        currentProduct: state.currentItemInfo,
        totalPrice: state.totalPrice,
      };
      setLocalStorage("storedCart", storedCart);
    },

    setShippingCost: (state, { payload }) => {
      state.shippingCost = payload;
    },
  },
});

export const {
  removeAll,
  addToCart,
  removeFromCart,
  addQuantityPriceCalc,
  reduceQuantityPriceCalc,
  setShippingCost,
} = cartSlice.actions;
export default cartSlice.reducer;
