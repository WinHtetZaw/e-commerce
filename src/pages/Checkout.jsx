import PaymentForm from "../components/PaymentForm";
import BillingForm from "../components/BillingForm";
import ShippingForm from "../components/ShippingForm";
import { useDispatch, useSelector } from "react-redux";
import OrderSuccessCard from "../components/OrderSuccessCard";
import { useState } from "react";
import { setScrollable } from "../redux/features/generalSlice";
import BackBtn from "../components/BackBtn";

const Checkout = () => {
  // * hooks
  const [isOrdered, setIsOrdered] = useState(false);
  const { shippingCost } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  // console.log("shipping cost --->",shippingCost)

  let storedCart;
  if (JSON.parse(localStorage.getItem("storedCart"))?.products.length > 0) {
    storedCart = JSON.parse(localStorage.getItem("storedCart"));
  }

  // * handles

  const taxCalculation = (percent = 5) => {
    return (storedCart?.totalPrice * (percent / 100)).toFixed(2);
  };

  const grandTotalCalculation = () => {
    return (
      parseFloat(storedCart?.totalPrice) + parseFloat(taxCalculation())
    ).toFixed(2);
  };

  const handleContinueOrderClick = () => {
    setIsOrdered(!isOrdered);
  };

  return (
    <>
      <BackBtn />
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 py-10 md:pb-16">
        <div className="w-full flex flex-col gap-10 md:gap-16 lg:w-2/3">
          <PaymentForm />
          <BillingForm />
          <ShippingForm />
        </div>

        <article className=" ml-auto text-sm shadow-4 h-fit rounded-lg p-5 md:p-10">
          <div className=" flex flex-col gap-2 w-full">
            <label className=" w-2/3 font-mono text-base" htmlFor="state">
              Discount Code
            </label>
            <div className=" flex items-center gap-2 mb-5">
              <input
                type="text"
                name="discount_code"
                className="form-input w-full"
                placeholder="Add discount code"
              />
              <button className=" active:scale-95 form-input w-1/3">
                Apply
              </button>
            </div>
          </div>

          <section className="w-full h-fit">
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
              <p className=" select-none font-semibold">${0}</p>
            </div>

            {/* tax  */}
            <div className="flex mb-2 justify-between items-center">
              <h2 className=" font-bold opacity-70">Tax 5%</h2>
              <p className=" select-none font-semibold">${taxCalculation()}</p>
            </div>

            {/* shipping cost  */}
            <div className=" mb-5 flex justify-between items-center">
              <h2 className=" font-bold opacity-70">Shipping cost</h2>
              <p className=" select-none font-semibold">${shippingCost}</p>
            </div>

            {/* grand total  */}
            <div className=" border-t-[1.5px] border-black border-opacity-[0.15] py-3 flex justify-between items-center">
              <h2 className=" font-bold opacity-70">Grand total</h2>
              <p className=" select-none font-semibold">
                ${grandTotalCalculation()}
              </p>
            </div>

            <button
              onClick={handleContinueOrderClick}
              className=" active:scale-95 transition duration-200 btn-1 w-full bg-teal-800 text-slate-100"
            >
              Continue to payment
            </button>
          </section>
        </article>
      </div>
      {isOrdered && (
        <OrderSuccessCard handleContinueOrderClick={handleContinueOrderClick} />
      )}
    </>
  );
};

export default Checkout;
// <form>
//   {/* <h1>CheckOut</h1>
//   <h2>Payment Information</h2> */}
//   <p>Cardholder Name</p>
//   <input type="text" className="inputbox" />
//   <p className="">Card Number</p>
//   <input
//     type="number"
//     className="inputbox"
//   />
//   <p className="">Card Type</p>
//   <select
//     className="inputbox"
//     name="card_type"
//     id="card_type"
//     required=""
//   >
//     <option value="">Select Card Type</option>
//     <option value="Visa">Visa</option>
//     <option value="RuPay">RuPay</option>
//     <option value="MasterCard">MasterCard</option>
//   </select>
//   <div className="expcvv">
//     <p className="expcvv_text p">Expire</p>
//     <input
//       type="date"
//       className="inputbox"
//       name="exp_date"
//     />
//     <p className="expcvv_text2 p">CVV</p>
//     <input
//       type="password"
//       className="inputbox"
//       name="cvv"
//     />
//   </div>
//   <p />
//   <button type="submit" className=" btn-1 bg-teal-800 text-slate-100 my-10">
//     CheckOut
//   </button>
// </form>

// <form
//   onSubmit={handleSubmit(onSubmit)}
//   className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
// >
//   {/* email  */}
//   <div className="pb-2 pt-4 text-start">
//     <input
//       {...register("email", { required: true })}
//       type="email"
//       placeholder="Email"
//       className="block w-full p-4 text-lg rounded-sm bg-black"
//     />
//     {errors.email && (
//       <span className=" text-red-600">The email field is required.</span>
//     )}
//     {loginErr && <span className=" text-red-600">{loginErr}</span>}
//   </div>

//   {/* passwordd  */}
//   <div className="pb-2 pt-4 text-start">
//     <input
//       {...register("password", { required: true, minLength: 6 })}
//       className="block w-full p-4 text-lg rounded-sm bg-black"
//       type="password"
//       placeholder="Password"
//     />
//     {errors.password && errors.password.type === "required" && (
//       <span className=" text-red-600">
//         The password field is required.
//       </span>
//     )}
//     {errors.password && errors.password.type === "minLength" && (
//       <span className=" text-red-600 text-start">
//         Password must be at least 6 characters.
//       </span>
//     )}
//   </div>

//   {/* go to register  */}
//   <div className="text-left my-5 text-slate-100">
//     <p className="text-gray-400 hover:text-gray-100">
//       {`Don't`} have an account?
//     </p>
//     <Link to={"/sign-up"}>
//       <span className=" text-sm text-gray-400 hover:underline hover:text-gray-100">
//         Go to register
//       </span>
//     </Link>
//   </div>

//   {/* sign in  */}
//   <div className="px-4 pb-2 pt-4">
//     <button
//       type="submit"
//       className="uppercase block w-full p-3 text-lg rounded-full bg-dark-5 focus:outline-none"
//     >
//       sign in
//     </button>
//   </div>
//   <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
//     <a href="#">
//       <svg
//         fill="#fff"
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//       >
//         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//       </svg>
//     </a>
//     <a href="#">
//       <svg
//         fill="#fff"
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//       >
//         <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//       </svg>
//     </a>
//     <a href="#">
//       <svg
//         fill="#fff"
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//       </svg>
//     </a>
//   </div>
// </form>
