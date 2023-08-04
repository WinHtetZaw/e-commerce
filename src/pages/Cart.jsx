// * react router dom
import { Link } from "react-router-dom";

// icons
import { BiMinus, BiPlus } from "react-icons/bi";
import { GoTrash } from "react-icons/go";

// * react redux
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantityPriceCalc,
  reduceQuantityPriceCalc,
  removeAll,
  removeFromCart,
} from "../redux/features/cartSlice";

// components
import BackBtn from "../components/BackBtn";
import AddNewBtn from "../components/addNewBtn";
import RemoveAllBtn from "../components/RemoveAllBtn";

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  let storedCart;
  if (JSON.parse(localStorage.getItem("storedCart"))?.products.length > 0) {
    storedCart = JSON.parse(localStorage.getItem("storedCart"));
  }

  const products = JSON.parse(localStorage.getItem("storedCart"))?.products;
  const currentProduct = JSON.parse(
    localStorage.getItem("storedCart")
  )?.currentProduct;

  const taxCalculation = (percent = 5) => {
    return (storedCart?.totalPrice * (percent / 100)).toFixed(2);
  };

  const grandTotalCalculation = () => {
    return (
      parseFloat(storedCart?.totalPrice) + parseFloat(taxCalculation())
    ).toFixed(2);
  };

  const rows = products?.map((item, index) => {
    const currentItem = currentProduct?.find(
      (el) => el.currentProductId == item.id
    );
    const currentItemQuantity = currentItem?.quantity;

    return (
      <tr
        key={index}
        className=" hover:bg-gray-100 transition duration-300 bdr-b"
      >
        <td className=" w-1/12 py-3 text-center">
          {index + 1}
          {/* <Checkbox className=" mx-auto" onChange={handleCheckChange} color="cyan" /> */}
        </td>
        <td className=" w-6/12 py-3">
          <div className="flex gap-3 flex-col md:flex-row w-full items-center">
            <div className=" h-[100px] aspect-square">
              <img
                className=" w-full h-full origin-center object-contain"
                src={item.thumbnail}
                alt=""
              />
            </div>
            <h3 className="">{item.title}</h3>
          </div>
        </td>
        <td className=" w-3/12 px-3">
          <div className=" flex justify-center items-center gap-3 flex-col">
            <div className=" flex w-fit bdr-1 rounded-lg py-2 px-4 text-lg gap-5 items-center">
              <span
                onClick={() => dispatch(reduceQuantityPriceCalc(item))}
                className=" select-none cursor-pointer"
              >
                <BiMinus />
              </span>
              <span className=" select-none">{currentItemQuantity}</span>
              <span
                onClick={() => dispatch(addQuantityPriceCalc(item))}
                className=" select-none cursor-pointer"
              >
                <BiPlus />
              </span>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className=" active:scale-95 transition duration-200 select-none flex gap-1 items-center"
            >
              <GoTrash />
              <h5 className=" text-sm">Remove</h5>
            </button>
          </div>
        </td>
        <td className=" w-2/12 text-right">
          ${(currentItem?.singleItemPrice).toFixed(2)}
        </td>
      </tr>
    );
  });

  return (
    <>
      <BackBtn />
      {storedCart?.products.length > 0 ? (
        <div className=" flex flex-col lg:flex-row gap-10 md:gap-16 py-10 md:pb-16">
          {/* cart list table  */}
          <section className="md:p-10 overflow-x-scroll sm:overflow-x-hidden text-sm p-5 w-full lg:w-2/3 shadow-4 rounded-lg">
            {/* title  */}
            <div className=" flex justify-between items-center mb-3">
              <h2 className=" text-xl font-2 relative font-bold capitalize">
                cart table
              </h2>

              <div onClick={() => dispatch(removeAll())}>
                <RemoveAllBtn />
              </div>
            </div>

            {/* table  */}
            <table className=" w-full">
              <thead className=" w-full">
                <tr className=" w-full uppercase bdr-b">
                  <th className=" w-1/12 py-3">No.</th>
                  <th className=" w-6/12 text-start">product</th>
                  <th className=" w-3/12">quantity</th>
                  <th className=" w-2/12 text-end">price</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
              <tfoot>
                <tr>
                  <th className=" text-right pt-5" colSpan={3}>
                    Total Price
                  </th>
                  <th className=" text-right pt-5">
                    ${(storedCart?.totalPrice).toFixed(2)}
                  </th>
                </tr>
              </tfoot>
            </table>

            <div className=" ml-auto w-fit mt-5">
              <Link to={"/products"}>
                <AddNewBtn />
              </Link>
            </div>
          </section>

          {/* left  */}
          <section className="p-5 text-sm md:p-10 ml-auto lg:mx-auto shadow-4 rounded-lg min-w-[250px] w-1/3 h-fit">
            {/* Subtotal  */}
            <div className=" mb-2 flex justify-between items-center">
              <h2 className=" font-bold opacity-70">Subtotal</h2>
              <p className=" select-none font-semibold">
                ${(storedCart?.totalPrice).toFixed(2)}
              </p>
            </div>

            {/* discount  */}
            <div className=" mb-2 flex justify-between items-center">
              <h2 className=" font-bold opacity-70">Discount</h2>
              <p className=" select-none font-semibold">
                ${parseFloat(0).toFixed(2)}
              </p>
            </div>

            {/* tax  */}
            <div className=" mb-5 flex justify-between items-center">
              <h2 className=" font-bold opacity-70">Tax 5%</h2>
              <p className=" select-none font-semibold">${taxCalculation()}</p>
            </div>

            {/* grand total  */}
            <div className=" bdr-t py-3 flex justify-between items-center">
              <h2 className=" font-bold opacity-70">Grand total</h2>
              <p className=" select-none font-semibold">
                ${grandTotalCalculation()}
              </p>
            </div>

            <Link to={"/cart/checkout"}>
              <button className=" active:scale-95 transition duration-200 btn-1 w-full bg-teal-800 text-slate-100">
                Checkout Now
              </button>
            </Link>
          </section>
        </div>
      ) : (
        // if cart is empty show text
        <div className=" w-full h-[90vh]">
          <p className="shadow-4 p-10 w-[70%] rounded-3xl mx-auto mt-16 flex flex-col font-mono">
            <span className=" font-semibold lg:text-lg mb-3">
              Your Cart is Empty
            </span>
            <span className="mb-1 tracking-wider">
              Start shopping now to fill your cart with amazing products!
            </span>
            <span className="mb-3 tracking-wider hidden lg:block">
              Take advantage of our special offers and discounts, and don&apos;t
              forget to check out our featured deals for even more savings.
            </span>
            <span className=" lg:text-lg">Happy shopping!</span>
            <Link to={"/products"} className=" lg:ml-auto">
              <button className=" px-4 py-2 text-sm bg-teal-800 text-slate-100 rounded-full w-fit mt-3 active:scale-95">
                Go to shop
              </button>
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;
