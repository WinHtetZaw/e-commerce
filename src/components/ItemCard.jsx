// * react
import { useEffect, useState } from "react";

// * react router dom
import { useNavigate } from "react-router-dom";

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
import { motion } from "framer-motion";
import "./itemCard.css";

const ItemCard = (props) => {
  const { id, title, thumbnail, description, category, brand, rating, price } =
    props;

  // * hooks
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { isLogin } = useSelector((state) => state.generalSlice);
  const { favoriteProducts } = useSelector((state) => state.favoriteSlice);
  const { currentItemInfo } = useSelector((state) => state.cartSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isCurrentProduct = currentItemInfo?.find(
    (el) => el.currentProductId == id
  );

  const currentFavoriteProduct = favoriteProducts?.find((el) => el.id == id);

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
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div
            onClick={() => navigate(`/products/${id}`)}
            className="el-wrapper relative"
          >
            {/* favorite icon  */}
            <div className=" absolute z-10 top-10 right-5 bg-white p-1 rounded-full">
              {currentFavoriteProduct && isLogin ? (
                <AiFillHeart
                  onClick={(e) => handleRemoveFavoriteClick(e, props)}
                  className="text-red-500"
                />
              ) : (
                <AiOutlineHeart
                  onClick={(e) => handleAddFavoriteClick(e, props)}
                />
              )}
            </div>
            <div className="box-up">
              <img
                // className="img"
                className="img w-full h-full object-cover object-center"
                // src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
                src={thumbnail}
                alt={title}
              />
              <div className="img-info">
                <div className="info-inner">
                  {/* <span className="p-name text-shadow-1">{title}</span> */}
                  {/* <span className="block text-[#ccc] text-shadow-1">
                    {title}
                  </span> */}
                  <span className="p-company">
                    {/* <span className=" w-fit mx-auto block"> */}
                    {/* <Rating
                      color="rgb(17 94 89)"
                      fractions={3}
                      defaultValue={Math.round(rating)}
                      readOnly
                    /> */}
                    {category}/{brand}
                  </span>
                </div>
                <div className="a-size">
                  {/* Available sizes : <span className="size">S , M , L , XL</span> */}
                  {description}
                </div>
              </div>
            </div>
            <div className="mb-5 flex justify-between">
              {title}
              <Rating
                color="rgb(17 94 89)"
                fractions={3}
                defaultValue={Math.round(rating)}
                readOnly
              />
            </div>
            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner" />
              </div>
              <div className="cart">
                <span className="price">${price}</span>
                <span className="add-to-cart">
                  <span className="">
                    {" "}
                    {isCurrentProduct && isLogin ? (
                      <button
                        onClick={(e) => handleRemoveFromCartClick(e, props)}
                        className=" hvr-buzz-out  w-fit"
                      >
                        <BsCartDash className="text-xl text-[#ccc]" />
                        {/* <span className="txt capitalize">add to cart</span> */}
                      </button>
                    ) : (
                      <button
                        onClick={(e) => handleAddToCartClick(e, props)}
                        className=" hvr-buzz-out  w-fit "
                      >
                        <BsCartPlus className="text-xl text-[#ccc]" />
                        {/* <span className="txt capitalize">add to cart</span> */}
                      </button>
                    )}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
