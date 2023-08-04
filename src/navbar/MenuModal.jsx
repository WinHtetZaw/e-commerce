// * react
import { useState } from "react";

// * icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { GoPerson } from "react-icons/go";

// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * components
import { shopcartUai } from "../helper/helper";
import Search from "./Search";

const MenuModal = () => {
  // * hooks
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();

  // * handles
  const handleProfileClick = () => {
    setIsOpened(false);
    navigate("/account");
  };

  return (
    <>
      <div onClick={() => setIsOpened(true)} className="sm:hidden mr-3">
        <HiOutlineMenuAlt3 className=" text-2xl" />
      </div>
      {isOpened && (
        <section className=" sm:hidden">
          <div
            onClick={() => setIsOpened(false)}
            className="absolute z-10 inset-0 bg-black bg-opacity-70"
          ></div>
          <div className="fixed z-20 px-5 right-0 top-0 h-full bg-white pt-5 w-[80%] xs:w-[50%]">
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

              {/* log in & log out  */}
              {shopcartUai?.token ? (
                <p className=" capitalize select-none cursor-pointer">
                  Log out
                </p>
              ) : (
                <Link to={"/log-in"}>
                  <p className=" capitalize select-none cursor-pointer">
                    Log in
                  </p>
                </Link>
              )}

              {/* search  */}
              <Search />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MenuModal;
