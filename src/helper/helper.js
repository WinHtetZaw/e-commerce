import { AiOutlineExclamationCircle } from "react-icons/ai";

// * local storage
export let shopcartUai;
if (localStorage.getItem("shopcart-UAI")) {
  shopcartUai = JSON.parse(localStorage.getItem("shopcart-UAI"));
}

export const UAI = JSON.parse(localStorage.getItem("shopcart-UAI"));

// export const UAI = JSON.parse(localStorage.getItem("shopcart-UAI"));

export const setUaiToStorage = (data) =>
  localStorage.setItem("shopcart-UAI", JSON.stringify(data));

export const setLocalStorage = (text, data) =>
  localStorage.setItem(text, JSON.stringify(data));

export const getLocalStorage = (text) => JSON.parse(localStorage.getItem(text));
