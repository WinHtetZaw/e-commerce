// * icons
import { GiShoppingCart } from "react-icons/gi";
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

// * alert notification
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { isLogin } = useSelector((state) => state.generalSlice);
  const { cartProducts } = useSelector((state) => state.cartSlice);
  const navigate = useNavigate();

  // * handles
  const handleCartClick = () => {
    if (isLogin) {
      navigate("/cart");
    } else {
      toast.error("Need an account for this action!");
    }
  };

  return (
    <>
      <div className="bg-white px-5 flex items-center sm:justify-between w-full h-20">
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
          <div
            onClick={handleCartClick}
            className="icon-heading-1 relative mr-5 sm:mr-0"
          >
            <FiShoppingCart className="text-xl" />
            {isLogin && cartProducts.length > 0 && (
              <span className="absolute top-0 left-4 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </div>

          {/* account  */}
          <div className="sm:block hidden">
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
