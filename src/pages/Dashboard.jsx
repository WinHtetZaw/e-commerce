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
      <section className=" flex items-center justify-between mb-5">
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
      <section className="grid grid-cols-12 gap-3 mb-16">
        {/* first card  */}
        <div className=" col-span-12 xs:col-span-6 lg:col-span-3 bg-white-1 rounded-md">
          <div className="flex border-b items-center gap-2 p-2">
            <span className="rounded w-7 h-7 flex justify-center items-center bg-white-2">
              <FaTruck className=" bg-white-2" />
            </span>
            <h1>Delivery</h1>
          </div>
          <div className="flex">
            <span className="w-1/2 p-2 border-r">
              <p className="w-full text-center">210</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Processing
              </p>
            </span>
            <span className="w-1/2 p-2">
              <p className="w-full text-center">14</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Processed
              </p>
            </span>
          </div>
        </div>

        {/* second card  */}
        <div className=" col-span-12 xs:col-span-6 lg:col-span-3 bg-white-1 rounded-md">
          <div className="flex border-b items-center gap-2 p-2">
            <span className="rounded w-7 h-7 flex justify-center items-center bg-white-2">
              <MdPayment className=" bg-white-2" />
            </span>
            <h1>Payment</h1>
          </div>
          <div className="flex">
            <span className="w-1/2 p-2 border-r">
              <p className="w-full text-center">6</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Not yet paid
              </p>
            </span>
            <span className="w-1/2 p-2">
              <p className="w-full text-center">4</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Promo
              </p>
            </span>
          </div>
        </div>

        {/* third card  */}
        <div className=" col-span-12 xs:col-span-6 lg:col-span-3 bg-white-1 rounded-md">
          <div className="flex border-b items-center gap-2 p-2">
            <span className="rounded w-7 h-7 flex justify-center items-center bg-white-2">
              <BiLogoProductHunt className=" bg-white-2" />
            </span>
            <h1>Product</h1>
          </div>
          <div className="flex">
            <span className="w-1/2 p-2 border-r">
              <p className="w-full text-center">0</p>
              <p className="w-full text-center text-sm  whitespace-nowrap">
                Product block
              </p>
            </span>
            <span className="w-1/2 p-2">
              <p className="w-full text-center">120</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Sold out
              </p>
            </span>
          </div>
        </div>

        {/* fourth card  */}
        <div className=" col-span-12 xs:col-span-6 lg:col-span-3 bg-white-1 rounded-md">
          <div className="flex border-b items-center gap-2 p-2">
            <span className="rounded w-7 h-7 flex justify-center items-center bg-white-2">
              <PiSquareHalfBold className=" bg-white-2" />
            </span>
            <h1>Product</h1>
          </div>
          <div className="flex">
            <span className="w-1/2 p-2 border-r">
              <p className="w-full text-center">2</p>
              <p className="w-full text-center text-sm whitespace-nowrap">
                Cancelation
              </p>
            </span>
            <span className="w-1/2 p-2">
              <p className="w-full text-center">4</p>
              <p className="w-full text-center text-sm  whitespace-nowrap">
                Return
              </p>
            </span>
          </div>
        </div>
      </section>

      {/* line chart  */}
      <section className="flex overflow-x-scroll">
        <LChart />
        <PChart />
      </section>

      <InvoiceTable />
    </div>
  );
};

export default Dashboard;
