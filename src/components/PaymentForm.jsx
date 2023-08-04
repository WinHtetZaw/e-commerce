import { useState } from "react";

const PaymentForm = () => {
  // * hooks
  const [radioNumber, setRadioNumber] = useState(1);

  // * handles
  const handleRadioClick = (num) => {
    setRadioNumber(num);
  };

  return (
    <>
      <form className=" shadow-4 rounded-lg p-5 md:p-10 w-full h-fit flex flex-col gap-5">
        <h1 className=" font-mono">Select Payment Methods</h1>

        <section className="bdr-1 text-sm rounded-md">
          {/* top  */}
          <div
            onClick={() => handleRadioClick(1)}
            className="flex cursor-pointer justify-between items-center border-b-[1.5px] border-black border-opacity-[0.15] p-3"
          >
            <span className="flex items-center gap-2">
              <input
                checked={radioNumber == 1}
                onChange={() => {}}
                type="radio"
                name="card_type"
              />
              <h2>Credit Card</h2>
            </span>

            <span className=" flex gap-3 items-center">
              <img className=" w-7" src="/png/visa.png" alt="visa_png" />
              <img
                className=" w-7 h-5 object-contain"
                src="/png/mastercard.png"
                alt="mastercard_png"
              />
            </span>
          </div>

          <div className=" flex flex-col gap-3 px-3 py-5">
            {/* card number  */}
            <input
              placeholder="Card Number"
              type="number"
              className="form-input"
            />

            {/* Cardholder name  */}
            <input
              placeholder="Cardholder name"
              type="text"
              className="form-input"
            />

            {/* card number && cvv */}
            <span className=" w-full flex gap-3">
              <input
                placeholder="Card Number"
                type="date"
                className="form-input w-full"
              />
              <input
                placeholder="CVV"
                type="text"
                className="form-input w-full"
              />
            </span>
          </div>
        </section>

        {/* paypal  */}
        <section
          onClick={() => handleRadioClick(2)}
          className="flex cursor-pointer justify-between items-center bdr-1 text-sm rounded-md"
        >
          <div className="flex items-center gap-2 p-3">
            <input
              checked={radioNumber == 2}
              onChange={() => {}}
              type="radio"
              name="card_type"
            />
            <h2>Paypal</h2>
          </div>

          <img className=" w-12 mr-3" src="/png/paypal.png" alt="" />
        </section>

        {/* amazon  */}
        <section
          onClick={() => handleRadioClick(3)}
          className="flex cursor-pointer items-center justify-between bdr-1 text-sm rounded-md"
        >
          <div className="flex items-center gap-2 p-3">
            <input
              checked={radioNumber == 3}
              onChange={() => {}}
              type="radio"
              name="card_type"
            />
            <h2>Amazon</h2>
          </div>
          <div className="mr-3 pt-2">
            <img className="w-10 " src="/png/amazon.png" alt="" />
          </div>
        </section>
      </form>
    </>
  );
};

export default PaymentForm;
