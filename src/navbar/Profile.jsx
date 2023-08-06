// * react
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

// * icons
import { GoPerson } from "react-icons/go";

// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * helper
import { setUaiToStorage, shopcartUai } from "../helper/helper";

// * react redux
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../redux/features/generalSlice";

// * animation
import { AnimatePresence, motion } from "framer-motion";

const Profile = () => {
  // * hooks
  const [isOpened, setIsOpened] = useState(false);
  const { isLogin } = useSelector((state) => state.generalSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // * use effects
  useEffect(() => {
    if (shopcartUai?.auth) {
      dispatch(setIsLogin(true));
    }
  }, []);

  // * handles

  const handleAccountClick = () => {
    if (isLogin) {
      navigate("/account");
    } else {
      toast.error("Need an account for this action!");
    }
  };

  const handleLogoutClick = () => {
    dispatch(setIsLogin(false));
    shopcartUai.auth = false;
    setUaiToStorage(shopcartUai);
    toast.success("Successfully log out!");
    navigate("/products");
  };

  return (
    <div
      onMouseOver={() => setIsOpened(true)}
      onMouseLeave={() => setIsOpened(false)}
      className="relative h-14 cursor-pointer flex items-center icon-heading-1"
    >
      <div className="p-3 border-black border-opacity-70 rounded-full border-[1.5px]">
        <GoPerson className=" text-xl " />
      </div>

      <AnimatePresence>
        {isOpened && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="dropdown-area-1 top-12 font-1 right-0"
          >
            <li onClick={handleAccountClick} className=" dropdown-item">
              Account
            </li>
            {isLogin ? (
              <li onClick={handleLogoutClick} className=" dropdown-item">
                Log out
              </li>
            ) : (
              <Link to={"/log-in"}>
                <li className=" dropdown-item">Log in</li>
              </Link>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
