// * react
import { useEffect, useState } from "react";

// * animation
import { motion } from "framer-motion";

// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * mantine ui library
import { Rating } from "@mantine/core";

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
import GuestAlert from "./GuestAlert";

const ProductCard = (props) => {
  const { id, title, thumbnail, description, category, rating, price } = props;

  // * hooks
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { isLogin } = useSelector((state) => state.generalSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const UAI = JSON.parse(localStorage.getItem("shopcart-UAI"));

  useEffect(() => {
    if (currentFavoriteProduct) {
      setIsFavorite(true);
    }
  }, []);

  // const current = storedFavorite?.find((el) => el.id === id);

  // * handles
  const handleAddToCartClick = (e, product) => {
    e.stopPropagation();

    if (!UAI.auth || !isLogin) {
      toast.custom((t) => <GuestAlert t={t} />);
      return;
    }
    setIsAdded(true);
    dispatch(addToCart(product));
    toast.success("Successfully added");
  };

  const handleRemoveFromCartClick = (e, product) => {
    e.stopPropagation();

    if (!UAI.auth || !isLogin) {
      toast.custom((t) => <GuestAlert t={t} />);
      return;
    }

    setIsAdded(false);
    dispatch(removeFromCart(product));
    toast.success("Successfully removed");
  };


  const handleAddFavoriteClick = (e, product) => {
    e.stopPropagation();

    if (!UAI.auth || !isLogin) {
      toast.custom((t) => <GuestAlert t={t} />);
      return;
    }

    setIsFavorite(true);
    dispatch(addToFavorite(product));
    toast.success("Successfully added");
  };

  const handleRemoveFavoriteClick = (e, product) => {
    e.stopPropagation();

    if (!UAI.auth || !isLogin) {
      toast.custom((t) => <GuestAlert t={t} />);
      return;
    }

    setIsFavorite(false);
    dispatch(removeFromFavorite(product));
    toast.success("Successfully removed");
  };

  return (
    <div
      onClick={() => navigate(`/products/${id}`)}
      className=" relative bg-white"
    >
      {/* favorite icon  */}
      <div className=" absolute z-10 top-2 right-2 bg-white p-1 rounded-full">
        {currentFavoriteProduct ? (
          <AiFillHeart
            onClick={(e) => handleRemoveFavoriteClick(e, props)}
            className="text-red-500"
          />
        ) : (
          <AiOutlineHeart onClick={(e) => handleAddFavoriteClick(e, props)} />
        )}
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
        className="relative select-none hover:shadow-4 transition duration-200 rounded-lg w-full aspect-square bg-gray-100"
      >
        <img
          className=" object-contain w-full h-full"
          src={thumbnail}
          alt={title}
        />
      </motion.div>

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
        <div className=" flex flex-col gap-3">
          <Rating
            color="rgb(17 94 89)"
            fractions={3}
            defaultValue={Math.round(rating)}
            readOnly
          />
          {!isCurrentProduct ? (
            <button
              onClick={(e) => handleAddToCartClick(e, props)}
              className="active:scale-95 transition duration-200 text-xl"
            >
              <BsCartPlus />
            </button>
          ) : (
            <button
              onClick={(e) => handleRemoveFromCartClick(e, props)}
              className="active:scale-95 transition duration-200 text-xl text-orange-500"
            >
              <BsCartDash />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
