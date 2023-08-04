import { useState } from "react";
import { shippingData } from "../data/cartData";
import { useDispatch } from "react-redux";
import { setShippingCost } from "../redux/features/cartSlice";

const ShippingForm = () => {
  // * hooks
  const [radioNumber, setRadioNumber] = useState(1);
  const dispatch = useDispatch();


  // * handles
  const handleRadioClick = (num, price) => {
    setRadioNumber(num);
    dispatch(setShippingCost(price));
  };

  return (
    <>
      <form className=" accent-teal-800 border shadow-4 rounded-lg p-5 md:p-10 w-full h-fit flex flex-col gap-5">
        <h1 className=" font-mono">Shipping Methods</h1>

        {shippingData.map((el, index) => {
          const price = el.cost;
          return (
            <section
              key={index}
              onClick={() => handleRadioClick(el.id, price)}
              className="text-sm cursor-pointer bdr-1 rounded-md"
            >
              <div className="flex justify-between items-center p-3">
                <h2 className="flex items-center gap-2">
                  <input
                    checked={radioNumber == el.id}
                    onChange={() => {}}
                    type="radio"
                    name="shipping"
                  />
                  <span>{el.title}</span>
                </h2>
                <p>${el.cost.toFixed(2)}</p>
              </div>
              <p className="pb-3 px-3 ml-5 opacity-70">
                {el.time1}-{el.time2} {el.day}
              </p>
            </section>
          );
        })}

        {/* Free shipping */}
        {/* <section
          onClick={() => handleRadioClick(1)}
          className="text-sm cursor-pointer bdr-1 rounded-md"
        >
          <div className="flex justify-between items-center p-3">
            <h2 className="flex items-center gap-2">
              <input
                checked={radioNumber == 1}
                onChange={() => {}}
                type="radio"
                name="shipping"
              />
              <span>Free shipping</span>
            </h2>
            <p>$0</p>
          </div>
          <p className="pb-3 px-3 ml-5 opacity-70">7-30 business days</p>
        </section> */}

        {/* Regular shipping */}
        {/* <section
          onClick={() => handleRadioClick(2)}
          className="text-sm cursor-pointer bdr-1 rounded-md"
        >
          <div className="flex justify-between items-center p-3">
            <h2 className="flex items-center gap-2">
              <input
                checked={radioNumber == 2}
                onChange={() => {}}
                type="radio"
                name="shipping"
              />
              <span>Regular shipping</span>
            </h2>
            <p>$22.50</p>
          </div>
          <p className="pb-3 px-3 ml-5 opacity-70">1-3 business days</p>
        </section> */}

        {/* Express shipping */}
        {/* <section
          onClick={() => handleRadioClick(3)}
          className="text-sm cursor-pointer bdr-1 rounded-md"
        >
          <div className="flex justify-between items-center p-3">
            <h2 className="flex items-center gap-2">
              <input
                checked={radioNumber == 3}
                onChange={() => {}}
                type="radio"
                name="shipping"
              />
              <span>Express shipping</span>
            </h2>
            <p>$7.50</p>
          </div>
          <p className="pb-3 px-3 ml-5 opacity-70">3-14 business days</p>
        </section> */}
      </form>
    </>
  );
};

export default ShippingForm;
