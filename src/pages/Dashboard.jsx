// * icons
import { BsBell, BsQuestionCircle } from "react-icons/bs";
import { BiLogoProductHunt } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { PiSquareHalfBold } from "react-icons/pi";

// * components
import LChart from "../account/LChart";
import PChart from "../account/PChart";
import InvoiceTable from "../account/InvoiceTable";

// * react router dom
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" bg-white w-full h-full px-5 py-7">
      {/* top */}
      <section className=" flex items-center justify-between mb-10">
        {/* left  */}
        <h1 className="heading-1 text-slate-800">Dashboard</h1>

        {/* right  */}
        <div className=" flex items-center gap-3">
          <BsBell className=" cursor-pointer active:scale-90" />
          <BsQuestionCircle className=" cursor-pointer active:scale-90" />
          <Link to={"/products"}>
            <button className="text-sm bdr p-2 rounded-md select-none click-animation shadow-md">
              View Shop
            </button>
          </Link>
        </div>
      </section>

      {/* cards  */}
      <section className="grid grid-cols-12 gap-x-5 gap-y-7 mb-16">
        {/* first card  */}
        <div className=" card-container">
          <div className="flex bdr-b items-center gap-2 p-3">
            <span className="rounded w-7 h-7 flex justify-center items-center bg-white-2">
              <FaTruck className=" bg-white-2" />
            </span>
            <h1>Delivery</h1>
          </div>
          <div className="flex">
            <span className="w-1/2 p-3 bdr-r">
              <p className="w-full text-center">210</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Processing
              </p>
            </span>
            <span className="w-1/2 p-3">
              <p className="w-full text-center">14</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Processed
              </p>
            </span>
          </div>
        </div>

        {/* second card  */}
        <div className=" card-container">
          <div className="flex bdr-b items-center gap-2 p-3">
            <span className="rounded w-7 h-7 flex justify-center items-center bg-white-2">
              <MdPayment className=" bg-white-2" />
            </span>
            <h1>Payment</h1>
          </div>
          <div className="flex">
            <span className="w-1/2 p-3 bdr-r">
              <p className="w-full text-center">6</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Not yet paid
              </p>
            </span>
            <span className="w-1/2 p-3">
              <p className="w-full text-center">4</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Promo
              </p>
            </span>
          </div>
        </div>

        {/* third card  */}
        <div className=" card-container">
          <div className="flex bdr-b items-center gap-2 p-3">
            <span className="rounded w-7 h-7 flex justify-center items-center bg-white-2">
              <BiLogoProductHunt className=" bg-white-2" />
            </span>
            <h1>Product</h1>
          </div>
          <div className="flex">
            <span className="w-1/2 p-3 bdr-r">
              <p className="w-full text-center">0</p>
              <p className="w-full text-center text-sm  whitespace-nowrap">
                Product block
              </p>
            </span>
            <span className="w-1/2 p-3">
              <p className="w-full text-center">120</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Sold out
              </p>
            </span>
          </div>
        </div>

        {/* fourth card  */}
        <div className=" card-container">
          <div className="flex bdr-b items-center gap-2 p-3">
            <span className="rounded w-7 h-7 flex justify-center items-center bg-white-2">
              <PiSquareHalfBold className=" bg-white-2" />
            </span>
            <h1>Product</h1>
          </div>
          <div className="flex">
            <span className="w-1/2 p-3 bdr-r">
              <p className="w-full text-center">2</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Cancelation
              </p>
            </span>
            <span className="w-1/2 p-3">
              <p className="w-full text-center">4</p>
              <p className="w-full text-center text-sm  whitespace-nowrap">
                Return
              </p>
            </span>
          </div>
        </div>
      </section>

      {/* line chart  */}
      <section className="flex flex-col md:flex-row md:items-center gap-y-10 overflow-x-scroll mb-16">
        <LChart />
        <PChart />
      </section>

      <section className=" mb-10">
        <InvoiceTable />
      </section>
    </div>
  );
};

export default Dashboard;
