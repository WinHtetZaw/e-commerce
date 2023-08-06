// * react
import { useEffect, useState } from "react";

// * react router dom
import { useNavigate } from "react-router-dom";

// * mantine ui library
import { Rating, Skeleton } from "@mantine/core";

// * icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCartPlus, BsCartDash } from "react-icons/bs";

// * rtk
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";
import {
  addToFavorite,
  removeFromFavorite,
} from "../redux/features/favoriteSlice";

// * alert notification
import { toast } from "react-hot-toast";
import { getLocalStorage } from "../helper/helper";

const ProductCard = (props) => {
  const { id, title, thumbnail, description, category, rating, price } = props;

  // * hooks
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { isLogin } = useSelector((state) => state.generalSlice);
  const { favoriteProducts } = useSelector((state) => state.favoriteSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authUser = getLocalStorage("auth-user");

  // * get cart lists info from local storage
  const currentProduct = JSON.parse(
    localStorage.getItem("storedCart")
  )?.currentProduct;

  let storedFavorite;
  if (localStorage.getItem("stored-favorite")) {
    storedFavorite = JSON.parse(localStorage.getItem("stored-favorite"));
  }

  const isCurrentProduct = currentProduct?.find(
    (el) => el.currentProductId == id
  );

  const currentFavoriteProduct = storedFavorite?.find((el) => el.id == id);

  // const UAI = JSON.parse(localStorage.getItem("shopcart-UAI"));

  useEffect(() => {
    if (currentFavoriteProduct) {
      setIsFavorite(true);
    }
    if (isCurrentProduct) {
      setIsAdded(true);
    }
  }, [currentFavoriteProduct, isCurrentProduct]);

  // * handles
  const handleAddToCartClick = (e, product) => {
    e.stopPropagation();

    if (!isLogin) {
      toast.error("Need an account for this action!");
      return;
    }
    setIsAdded(true);
    dispatch(addToCart(product));
    toast.success("Successfully added");
  };

  const handleRemoveFromCartClick = (e, product) => {
    e.stopPropagation();

    if (!isLogin) {
      toast.error("Need an account for this action!");
      return;
    }

    setIsAdded(false);
    dispatch(removeFromCart(product));
    toast.success("Successfully removed");
  };

  const handleAddFavoriteClick = (e, product) => {
    e.stopPropagation();

    if (!isLogin) {
      toast.error("Need an account for this action!");
      return;
    }

    setIsFavorite(true);
    dispatch(addToFavorite(product));
    toast.success("Successfully added");
  };

  const handleRemoveFavoriteClick = (e, product) => {
    e.stopPropagation();

    if (!isLogin) {
      toast.error("Need an account for this action!");
      return;
    }

    setIsFavorite(false);
    dispatch(removeFromFavorite(product));
    toast.success("Successfully removed");
  };

  return (
    <div
      key={id}
      // onClick={() => navigate(`/products/${id}`)}
      className=" relative bg-white"
    >
      {/* favorite icon  */}
      <div className=" absolute z-10 top-2 right-2 bg-white p-1 rounded-full">
        {currentFavoriteProduct && authUser ? (
          <AiFillHeart
            onClick={(e) => handleRemoveFavoriteClick(e, props)}
            className="text-red-500"
          />
        ) : (
          <AiOutlineHeart onClick={(e) => handleAddFavoriteClick(e, props)} />
        )}
      </div>

      <button
        onClick={() => navigate(`/products/${id}`)}
        className="relative select-none hover:shadow-4 transition duration-200 rounded-lg w-full aspect-square bg-gray-100 overflow-hidden"
      >
        <img
          className=" object-contain w-full h-full"
          src={thumbnail}
          alt={title}
        />
      </button>

      <section className=" flex gap-2 mt-2 flex-col">
        <span className=" font-semibold flex flex-col sm:flex-row justify-between sm:items-center">
          {/* title  */}
          <h3 className=" font-2 w-full truncate">{title}</h3>

          {/* price  */}
          <p className="">${price}</p>
        </span>

        {/* description */}
        <p className=" text-sm opacity-70 w-full truncate">{description}</p>

        {/* start rating  */}
        {/* <div className=" flex flex-col gap-3"> */}
        <div className=" flex items-center justify-between">
          <Rating
            color="rgb(17 94 89)"
            fractions={3}
            defaultValue={Math.round(rating)}
            readOnly
          />
          {isCurrentProduct && isLogin ? (
            <button
              onClick={(e) => handleRemoveFromCartClick(e, props)}
              className="click-animation w-fit text-xl text-orange-500"
            >
              <BsCartDash />
            </button>
          ) : (
            <button
              onClick={(e) => handleAddToCartClick(e, props)}
              className="click-animation w-fit text-xl"
            >
              <BsCartPlus />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
