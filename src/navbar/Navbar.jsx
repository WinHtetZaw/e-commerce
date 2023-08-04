// * icons
import { GiShoppingCart } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GoSearch, GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";

// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * react redux
import { useSelector } from "react-redux";

// * components
import Category from "./Category";
import Search from "./Search";
import Profile from "./Profile";
import Breadcrumb from "./Breadcrumb";
import MenuModal from "./MenuModal";

const Navbar = () => {
  const { cartProducts } = useSelector((state) => state.cartSlice);
  const navigate = useNavigate();

  // let storedCart;
  // if (JSON.parse(localStorage.getItem("storedCart"))?.products.length > 0) {
  //   storedCart = JSON.parse(localStorage.getItem("storedCart"));
  // }

  const currentProduct = JSON.parse(
    localStorage.getItem("storedCart")
  )?.products;
  // console.log("storedCart ----", storedCart);

  // storedCart = JSON.parse(localStorage.getItem("storedCart"))

  return (
    <>
      <div className="bg-white px-5 flex items-center sm:justify-between w-full h-20  border-b border-gray-300">
        {/* logo  */}
        <Link to={"/products"}>
          <h1 className=" hidden sm:flex items-center gap-1">
            <GiShoppingCart className=" text-xl md:text-3xl" />
            <span className=" heading-1">Shopcart</span>
          </h1>
        </Link>
        <div className="flex items-center gap-5 ml-auto">
          {/* categories  */}
          <div className=" ml-auto sm:m-0 mr-5">
            <Category />
          </div>

          {/* search  */}
          <div className="hidden sm:block">
            <Search />
          </div>

          {/* cart  */}
          <Link to={"/cart"} className="mr-5 sm:mr-0">
            <div className="icon-heading-1 relative">
              <FiShoppingCart className="text-xl" />
              {currentProduct?.length > 0 && (
                <span className="absolute top-0 left-4 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
              {/* <h3 className=" heading-2">Cart</h3> */}
            </div>
          </Link>

          {/* account  */}
          <div className="sm:block hidden">
            {/* <div
            onClick={() => navigate("/account")}
            className="sm:block hidden select-none cursor-pointer p-3 border-black border-opacity-70 rounded-full border-[1.5px]"
          >
            <GoPerson className=" text-xl " />
          </div> */}
            <Profile />
          </div>

          {/* burger menu  */}
          <MenuModal />
        </div>
      </div>

      <Breadcrumb />
    </>
  );
};

export default Navbar;
