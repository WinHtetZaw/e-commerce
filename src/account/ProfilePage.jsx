// * react
import { useState } from "react";

// * icons
import { BsPencilFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";

// * react redux
import { useDispatch, useSelector } from "react-redux";

// * animation
import { AnimatePresence } from "framer-motion";

// * components
import UpdateUserInfoForm from "./UpdateUserInfoForm";
import UpdateAddressForm from "./UpdateAddressForm";
import { setIsLogin } from "../redux/features/generalSlice";
import { setUaiToStorage, shopcartUai } from "../helper/helper";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import PasswordChangeForm from "./PasswordChangeForm";

const ProfilePage = () => {
  // * hooks
  const dispatch = useDispatch();
  const { personalInfo, addressInfo } = useSelector(
    (state) => state.updateInfoSlice
  );
  const [isOpened, setIsOpened] = useState({
    userForm: false,
    addressForm: false,
    passwordChangeForm: false,
  });

  // * handles
  const handleCloseUserForm = () => {
    setIsOpened({ ...isOpened, userForm: !isOpened.userForm });
  };

  const handleCloseAddressForm = () => {
    setIsOpened({ ...isOpened, addressForm: !isOpened.addressForm });
  };

  const handlePasswordChangeForm = () => {
    setIsOpened({
      ...isOpened,
      passwordChangeForm: !isOpened.passwordChangeForm,
    });
  };

  const handleLogoutClick = () => {
    dispatch(setIsLogin(false));
    shopcartUai.auth = false;
    setUaiToStorage(shopcartUai);
    // localStorage.setItem("shopcart-UAI", JSON.stringify(shopcartUai));
    toast.success("Successfully log out!");
  };

  return (
    <>
      <article className=" flex pt-5 pb-10 h-full bg-white">
        <div className=" flex flex-col gap-10 px-10 sm:px-16 w-full">
          <h3 className=" font-bold text-xl">My Profile</h3>

          {/* user profile card  */}
          <section className=" min-w-[300px] relative flex flex-col items-center md:flex-row gap-5 shadow-2 p-5 rounded-2xl overflow-hidden">
            <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bdr-1">
              <img
                className="w-[60px]"
                src="/userProfile/pngwing.com.png"
                alt=""
              />
            </div>
            <div className=" text-sm">
              <h3 className=" max-md:text-center text-base font-semibold capitalize font-serif">
                {personalInfo ? personalInfo.first_name : "John"} &nbsp;
                {personalInfo ? personalInfo.last_name : "Doe"}
              </h3>
              <p className="max-md:text-center opacity-50 font-semibold">
                Team Mangager
              </p>
              <p className="max-md:text-center opacity-50 font-semibold">
                {addressInfo ? addressInfo.city : "Leeds"},
                {addressInfo ? addressInfo.country : " United Kingdom"}
              </p>
            </div>
            <div className=" absolute opacity-90 sm:bottom-auto right-3 sm:top-5 sm:right-5 flex items-center gap-2 btn-2 border-opacity-40">
              <span className="">Edit</span>
              <BsPencilFill />
            </div>
          </section>

          {/* personal information  */}
          <section className="pb-10 min-w-[300px] relative shadow-2 w-full p-5 rounded-2xl overflow-hidden">
            <div className=" md:w-10/12">
              <h3 className=" mb-5 font-bold">Personal information</h3>

              <div className=" grid grid-cols-1 md:grid-cols-2">
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40 ">First Name</h4>
                  <h4 className="capitalize">
                    {personalInfo ? personalInfo.first_name : "John"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Last Name</h4>
                  <h4 className="capitalize">
                    {personalInfo ? personalInfo.last_name : "Doe"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Email address</h4>
                  <h4>
                    {personalInfo ? personalInfo.email : "johndoe@gamil.com"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Phone Number</h4>
                  <h4>
                    {personalInfo ? personalInfo.phone : "+09 345 346 46"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Bio</h4>
                  <h4>{personalInfo ? personalInfo.bio : "Team Manager"}</h4>
                </span>
              </div>
            </div>
            <div
              onClick={handleCloseUserForm}
              className=" absolute text-opacity-90 bottom-3 sm:bottom-auto right-2 sm:top-5 sm:right-5 flex items-center gap-2 btn-2 border-opacity-40"
            >
              <span className="">Edit</span>
              <BsPencilFill />
            </div>
          </section>

          {/* address  */}
          <section className="pb-10 relative shadow-2 w-full p-5 rounded-2xl overflow-hidden">
            <div className=" md:w-10/12">
              <h3 className=" mb-5">Address</h3>

              <div className=" grid grid-cols-1 md:grid-cols-2">
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Country</h4>
                  <h4>
                    {addressInfo ? addressInfo.country : "United Kingdom"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">City / State</h4>
                  <h4>
                    {addressInfo ? addressInfo.city : "Leeds"},
                    {addressInfo ? addressInfo.state : " East London"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Postal Code</h4>
                  <h4>{addressInfo ? addressInfo.postal_code : "ERT 2354"}</h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Tax ID</h4>
                  <h4>
                    {addressInfo ? addressInfo.postal_code : "AS45645756"}
                  </h4>
                </span>
              </div>
            </div>
            <div
              onClick={handleCloseAddressForm}
              className=" absolute opacity-90 bottom-3 sm:bottom-auto right-2 sm:top-5 sm:right-5 flex items-center gap-2 btn-2 border-opacity-40"
            >
              <span className="">Edit</span>
              <BsPencilFill />
            </div>
          </section>

          <section className=" flex flex-col gap-y-3 xs:flex-row items-center xs:justify-between">
            <div
              onClick={handleLogoutClick}
              className="flex items-center gap-2 cursor-pointer click-animation"
            >
              <p className="italic select-none">Log out</p>
              <IoIosLogOut />
            </div>

            {/* <Link to={"/password-recovery"}> */}
              <div onClick={handlePasswordChangeForm} className=" flex items-center gap-2 cursor-pointer click-animation">
                <p className="italic whitespace-normal select-none">
                  Password change
                </p>
                <RiLockPasswordLine />
              </div>
            {/* </Link> */}
          </section>
        </div>
      </article>

      <AnimatePresence>
        {isOpened.userForm && (
          <UpdateUserInfoForm handleCloseUserForm={handleCloseUserForm} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpened.addressForm && (
          <UpdateAddressForm handleCloseAddressForm={handleCloseAddressForm} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpened.passwordChangeForm && (
          <PasswordChangeForm handlePasswordChangeForm={handlePasswordChangeForm} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfilePage;
