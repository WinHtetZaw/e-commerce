// * react
import { useState } from "react";

// * icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { GoPerson } from "react-icons/go";

// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * components
import { setUaiToStorage, shopcartUai } from "../helper/helper";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../redux/features/generalSlice";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

const MenuModal = () => {
  // * hooks
  const [isOpened, setIsOpened] = useState(false);
  const { isLogin } = useSelector((state) => state.generalSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // * handles
  const handleProfileClick = () => {
    setIsOpened(false);
    navigate("/account");
  };

  const handleLogoutClick = () => {
    dispatch(setIsLogin(false));
    shopcartUai.auth = false;
    setUaiToStorage(shopcartUai);
    toast.success("Successfully log out!");
  };

  return (
    <>
      <div onClick={() => setIsOpened(true)} className="sm:hidden mr-3">
        <HiOutlineMenuAlt3 className=" text-2xl" />
      </div>

      <AnimatePresence>
        {" "}
        {isOpened && (
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpened(false)}
              className="absolute z-40 inset-0 bg-black bg-opacity-70"
            ></motion.div>
            <motion.div
              initial={{ translateX: "100vw" }}
              animate={{ translateX: 0 }}
              exit={{
                translateX: "100vw",
                transition: { duration: 0.5, ease: "easeIn" },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed z-50 px-5 right-0 top-0 h-full bg-white pt-5 w-[80%] xs:w-[60%]"
            >
              <div
                onClick={() => setIsOpened(false)}
                className=" absolute top-1 -left-7"
              >
                <RxCross1 className=" text-2xl text-white select-none cursor-pointer" />
              </div>
              <div className=" flex flex-col gap-3 items-center">
                {/* avatar  */}
                <div
                  onClick={handleProfileClick}
                  className="select-none cursor-pointer w-fit p-3 border-black border-opacity-70 rounded-full border-[1.5px]"
                >
                  <GoPerson className=" text-xl " />
                </div>

                {isLogin ? (
                  <p
                    onClick={handleLogoutClick}
                    className="capitalize select-none cursor-pointer"
                  >
                    Log out
                  </p>
                ) : (
                  <Link to={"/log-in"}>
                    <p className="capitalize select-none cursor-pointer">
                      Log in
                    </p>
                  </Link>
                )}

                {/* search  */}
                <Search setIsOpened={setIsOpened} isOpened={isOpened} />
              </div>
            </motion.div>
          </section>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuModal;
