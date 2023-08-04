import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
const OrderSuccessCard = ({ handleContinueOrderClick }) => {
  const randId = Date.now();
  return (
    <>
      <article className=" fixed h-screen w-screen overflow-hidden z-10 flex items-center justify-center inset-0">
        <div className="flex z-10 w-fit bg-white  justify-center items-center flex-col py-7 rounded-3xl">
          <div className=" bg-emerald-500 rounded-full p-7 w-fit">
            <GiCheckMark className=" text-white text-[2rem]" />
          </div>

          <section className="mt-[3rem] w-[300px]">
            <h2 className="flex flex-col justify-center items-center font-bold text-2xl">
              <span className="">Your order have been</span>
              <span>accepted</span>
            </h2>

            <p className=" text-sm w-full text-center py-5">
              Transaction ID : {randId}
            </p>
          </section>

          <Link to={'/products'}>
            <button className="active:scale-95 transition duration-200 btn-1 bg-orange-500 text-white text-sm">
              Continue shopping
            </button>
          </Link>
        </div>
        <div
          onClick={handleContinueOrderClick}
          className=" w-full h-full absolute z-0 bg-black bg-opacity-30 "
        ></div>
      </article>
    </>
  );
};

export default OrderSuccessCard;
