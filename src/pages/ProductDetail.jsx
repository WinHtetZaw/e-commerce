// * react
import { useEffect, useState } from "react";

// * react router dom
import { useNavigate, useParams } from "react-router-dom";

// * react redux
import { useGetSingleProductQuery } from "../redux/services/productApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantityPriceCalc,
  addToCart,
  reduceQuantityPriceCalc,
  removeFromCart,
} from "../redux/features/cartSlice";

// * mantine ui library
import { Rating } from "@mantine/core";

// * alert notification
import { toast } from "react-hot-toast";

// * icons
import { BiMinus, BiPlus } from "react-icons/bi";
import { PiTruckLight } from "react-icons/pi";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsCartPlus, BsCartDash } from "react-icons/bs";

// * components
import BackBtn from "../components/BackBtn";
import GuestAlert from "../components/GuestAlert";
import { UAI } from "../helper/helper";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetSingleProductQuery(id);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { isLogin } = useSelector((state) => state.generalSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // * get cart lists info from local storage
  const currentProduct = JSON.parse(
    localStorage.getItem("storedCart")
  )?.currentProduct;

  const currentItem = currentProduct?.find(
    (el) => el.currentProductId == data?.id
  );
  const currentItemQuantity = currentItem?.quantity;

  const isCurrentProduct = currentProduct?.find(
    (el) => el.currentProductId == id
  );

  useEffect(() => {
    if (isCurrentProduct) {
      setIsAdded(true);
    }

    if (currentProduct) {
      setQuantity(currentItemQuantity);
    }
  }, [isCurrentProduct, currentProduct, currentItemQuantity]);

  // * handles
  const handleAddToCartClick = (product) => {
    if (!UAI.auth || !isLogin) {
      toast.custom((t) => <GuestAlert t={t} />);
      return;
    }

    setIsAdded(true);
    dispatch(addToCart(product));
    toast.success("Successfully added");
  };

  const handleRemoveFromCartClick = (product) => {
    if (!UAI.auth || !isLogin) {
      toast.custom((t) => <GuestAlert t={t} />);
      return;
    }
    setIsAdded(false);
    dispatch(removeFromCart(product));
    toast.success("Successfully removed");
  };

  const handleBuyNowClick = (product) => {
    if (!UAI.auth || !isLogin) {
      toast.custom((t) => <GuestAlert t={t} />);
      return;
    }
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handlePlusClick = (product) => {
    if (!UAI.auth || !isLogin) {
      toast.custom((t) => <GuestAlert t={t} />);
      return;
    }
    if (!isCurrentProduct) {
      toast.error("Add to cart first!");
      return
    }

    // handleAddToCartClick(product);
    dispatch(addQuantityPriceCalc(product));
    setQuantity((pre) => pre + 1);
  };

  const handleMinusClick = (product) => {
    if (!UAI.auth || !isLogin) {
      toast.custom((t) => <GuestAlert t={t} />);
      return;
    }

    if (!isCurrentProduct) {
      toast.error("Add to cart first!");
      return
    }
    dispatch(reduceQuantityPriceCalc(product));
    setQuantity((pre) => pre - 1);
  };

  return (
    <>
      <BackBtn />
      <div className="py-10 flex flex-col md:flex-row gap-10">
        {/* left  */}
        <section className="w-full xs:w-[70%] md:w-1/2">
          <div className=" mb-7 rounded-lg w-full aspect-square bg-gray-100">
            <img
              className=" w-full h-full object-contain"
              src={data?.thumbnail}
              alt={data?.title}
            />
          </div>

          <div className="w-full grid grid-cols-4 items-center gap-5">
            {data?.images?.map((el) => (
              <div
                className=" w-full aspect-square bg-gray-100 rounded"
                key={el}
              >
                <img className=" w-full h-full object-contain" src={el}></img>
              </div>
            ))}
          </div>
        </section>

        {/* right  */}
        <article className="w-full md:w-1/2 px-5 text-slate-800">
          <section className=" flex flex-col gap-3 border-b border-black border-opacity-30 pb-7">
            <h1 className=" text-2xl font-bold font-2">{data?.title}</h1>
            <p className=" truncate text-sm font-1 opacity-85">
              {data?.description}
            </p>
            <p className=" text-cyan-800 font-1">${data?.price}</p>
            {isSuccess && (
              <Rating
                color="rgb(17 94 89)"
                fractions={3}
                defaultValue={Math.round(data?.rating)}
                readOnly
              />
            )}
          </section>

          <section className=" my-7">
            <div className=" inline-flex mr-5  w-fit bg-gray-100 rounded-full py-2 px-4 text-lg gap-5 items-center">
              <span
                onClick={() => handleMinusClick(data)}
                className=" select-none cursor-pointer"
              >
                <BiMinus />
              </span>
              <span>{currentItemQuantity ?? 1}</span>
              <span
                onClick={() => handlePlusClick(data)}
                className=" select-none cursor-pointer"
              >
                <BiPlus />
              </span>
            </div>
            <h6 className=" inline-block text-sm text-slate-800">
              <span>
                Only{" "}
                <span className=" text-orange-500">
                  {data?.stock} item{data?.stock > 1 && "s"}
                </span>{" "}
                left!
              </span>
              <span className=" block"> Don&apos;t miss it.</span>
            </h6>
          </section>
          <div className=" w-full flex gap-5 mb-7">
            <button
              onClick={() => handleBuyNowClick(data)}
              className="active:scale-95 transition duration-200 text-sm btn-1 w-[10rem] text-slate-50 bg-teal-800 capitalize"
            >
              buy now
            </button>

            {!isCurrentProduct ? (
              <button
                onClick={() => handleAddToCartClick(data)}
                className="active:scale-95 transition duration-200 text-2xl"
              >
                <BsCartPlus />
              </button>
            ) : (
              <button
                onClick={() => handleRemoveFromCartClick(data)}
                className="active:scale-95 transition duration-200 text-2xl text-orange-500"
              >
                <BsCartDash />
              </button>
            )}
          </div>

          <section className=" p-3 border shadow-1">
            <span className=" flex gap-3 text-sm mb-7">
              <div className=" m-1">
                <PiTruckLight className=" text-orange-500 text-lg" />
              </div>
              <div>
                <p className=" font-bold">Free Delivery</p>
                <h4 className="">
                  <span className=" relative after-underline w-fit border-opacity-0">
                    Enter your Postal code for Delivery Availability
                  </span>
                </h4>
              </div>
            </span>

            <span className=" flex gap-3 text-sm">
              <div className=" m-1">
                <AiOutlineCalendar className=" text-orange-500 text-lg" />
              </div>
              <div>
                <p className=" font-bold">Return Delivery</p>
                <p className=" inline-block mr-1">
                  Free 30days Delivery Returns.
                </p>
                <h4 className=" inline-block relative after-underline w-fit border-opacity-0">
                  Details
                </h4>
              </div>
            </span>
          </section>
        </article>
      </div>
    </>
  );
};

export default ProductDetail;
