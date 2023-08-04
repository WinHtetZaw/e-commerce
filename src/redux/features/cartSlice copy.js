import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  currentItemInfo: [],
  isAdded: false,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    isAddedToCard: (state, { payload }) => {
      // * condition for add to cart or remove from cart method
      const hasProducts = state.cartProducts.find((el) => el.id == payload.id);
      if (hasProducts) {
        state.isAdded = true;
      } else {
        state.isAdded = false;
      }
    },
    addToCart: (state, { payload }) => {
      // * add to cart click method

      // * check a product is already add or not
      const sameProducts = state.cartProducts.filter(
        (el) => el.id == payload.id
      );
      if (sameProducts.length > 0) {
        return state;
      }

      // * create an object to calculate current price and quantity
      state.currentItemInfo = [
        ...state.currentItemInfo,
        { quantityId: payload.id, quantity: 1, singleItemPrice: payload.price },
      ];
      state.cartProducts = [...state.cartProducts, payload];
      state.totalPrice += payload.price;

      // prepare array to store in local storage
      const cartArray = [
        ...state.cartProducts,
        ...state.currentItemInfo,
        state.isAdded,
        state.totalPrice,
      ];
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
    },
    removeFromCart: (state, { payload }) => {
      // remove from cart click method

      // * filter cart products
      const lists = state.cartProducts.filter((el) => el.id != payload.id);
      const quantityLists = state.currentItemInfo.filter(
        (el) => el.quantityId != payload.id
      );

      // * find current in currentItemInfo array to calculate current price and quantity
      const filter = state.currentItemInfo.find(
        (el) => el.quantityId == payload.id
      );
      filter.singleItemPrice = payload.price;

      
      state.cartProducts = lists;
      state.currentItemInfo = quantityLists;
      state.totalPrice =
        state.totalPrice - filter.quantity * filter.singleItemPrice;

      // prepare array to store in local storage
      const cartArray = [
        ...state.cartProducts,
        ...state.currentItemInfo,
        state.isAdded,
        state.totalPrice,
      ];
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
    },
    addQuantityPriceCalc: (state, { payload }) => {
      // when click + btn increase quantity and price method
      const filter = state.currentItemInfo.find(
        (el) => el.quantityId == payload.id
      );
      filter.quantity += 1;
      filter.singleItemPrice += payload.price;
      state.totalPrice += payload.price;

      // prepare array to store in local storage
      const cartArray = [
        ...state.cartProducts,
        ...state.currentItemInfo,
        state.isAdded,
        state.totalPrice,
      ];
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
    },
    reduceQuantityPriceCalc: (state, { payload }) => {
      // when click - btn reduce quantity and price
      const filter = state.currentItemInfo.find(
        (el) => el.quantityId == payload.id
      );
      if (filter.quantity == 1) {
        return state;
      }
      filter.singleItemPrice -= payload.price;
      filter.quantity -= 1;
      state.totalPrice -= payload.price;

      // prepare array to store in local storage
      const cartArray = [
        ...state.cartProducts,
        ...state.currentItemInfo,
        state.isAdded,
        state.totalPrice,
      ];
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addQuantityPriceCalc,
  reduceQuantityPriceCalc,
} = cartSlice.actions;
export default cartSlice.reducer;
