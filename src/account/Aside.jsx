import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineHeart,
} from "react-icons/ai";

import { GoTrash } from "react-icons/go";
import { RiMenu2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { sidebarItemVariant } from "../helper/animationHelper";

const Aside = ({ isOpened, setIsOpened }) => {
  // * hooks
  const location = useLocation();
  const currentRouteRef = useRef();

  switch (location.pathname) {
    case "/account": {
      currentRouteRef.current = "account";
      break;
    }
    case "/account/favorite": {
      currentRouteRef.current = "favorite";

      break;
    }
    case "/account/setting": {
      currentRouteRef.current = "setting";
      break;
    }
  }

  // console.log(location.pathname);
  return (
    <div className=" w-full h-full bg-white pt-3">
      <div className="" onClick={() => setIsOpened(!isOpened)}>
        <RiMenu2Line className=" text-2xl ml-auto mr-5" />
      </div>

      <section className="flex flex-col gap-5 px-5 mt-10">
        <Link to={"/account"}>
          <div
            className={`sidebar-item ${
              currentRouteRef.current == "account" && "active"
            }`}
          >
            <AiOutlineHome className="text-lg min-w-[18px]" />
            <AnimatePresence>
              {!isOpened && (
                <motion.span
                  variants={sidebarItemVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className=" origin-left"
                >
                  DashBoard
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </Link>

        <Link to={"/account/favorite"}>
          <div
            className={`sidebar-item ${
              currentRouteRef.current == "favorite" && "active"
            }`}
          >
            <AiOutlineHeart className="text-lg min-w-[18px]" />
            <AnimatePresence></AnimatePresence>
            {!isOpened && (
              <motion.span
                variants={sidebarItemVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                className=" origin-left"
              >
                Favorite
              </motion.span>
            )}
          </div>
        </Link>

        <Link to={"/account/setting"}>
          <div
            className={`sidebar-item ${
              currentRouteRef.current == "setting" && "active"
            }`}
          >
            <AiOutlineSetting className="text-lg min-w-[18px]" />
            <AnimatePresence></AnimatePresence>
            {!isOpened && (
              <motion.span
                variants={sidebarItemVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                className=" origin-left"
              >
                Setting
              </motion.span>
            )}
          </div>
        </Link>

        {/* <div className="sidebar-item text-red-500">
          <GoTrash className="text-lg min-w-[18px]" />
          <span className=" ">Delete Account</span>
        </div> */}
      </section>
    </div>
  );
};

export default Aside;
