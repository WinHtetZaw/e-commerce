// * react
import { lazy, useState } from "react";

// * icons
import { RiLockPasswordLine } from "react-icons/ri";
import { GoTrash } from "react-icons/go";

// * react redux
import { useDispatch, useSelector } from "react-redux";

// * animation
import { AnimatePresence } from "framer-motion";

// * alert
import "react-confirm-alert/src/react-confirm-alert.css";

// * components
// import UpdateUserInfoForm from "./UpdateUserInfoForm";
// import UpdateAddressForm from "./UpdateAddressForm";
import { setIsLogin } from "../redux/features/generalSlice";
import { setUaiToStorage, shopcartUai } from "../helper/helper";
import { useNavigate } from "react-router-dom";
// import PasswordChangeForm from "./PasswordChangeForm";
import Swal from "sweetalert2";
import { Button } from "@nextui-org/react";
import Editbtn1 from "../components/Editbtn1";

const PasswordChangeForm = lazy(() => import("./PasswordChangeForm"));
const UpdateUserInfoForm = lazy(() => import("./UpdateUserInfoForm"));
const UpdateAddressForm = lazy(() => import("./UpdateAddressForm"));

const ProfilePage = () => {
  // * hooks
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate("/products");
  };

  const handleAccountDelete = () => {
    localStorage.removeItem("shopcart-UAI");
    localStorage.removeItem("auth-user");
    localStorage.removeItem("stored-favorite");
    localStorage.removeItem("storedCart");
    navigate("/products");
  };

  const handleConfirmation = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete account!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogoutClick();
        handleAccountDelete();
        Swal.fire("Deleted!", "Your account has been deleted.", "success");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
      }
    });
  };

  return (
    <>
      <article className=" flex pt-5 pb-10 h-full min-w-[600px]">
        <div className=" flex flex-col gap-10 w-full">
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
            {/* <div
              onClick={handleCloseUserForm}
              className=" absolute text-opacity-90 bottom-3 sm:bottom-auto right-2 sm:top-5 sm:right-5 flex items-center gap-2 btn-2 border-opacity-40"
            >
              <span className="">Edit</span>
              <BsPencilFill />
            </div> */}
            <Editbtn1 handleClick={handleCloseUserForm} />
          </section>

          {/* address  */}
          <section className="pb-10 min-w-[300px] relative shadow-2 w-full p-5 rounded-2xl overflow-hidden">
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
            {/* <Button
              onClick={handleCloseAddressForm}
              variant="ghost"
              className=" absolute rounded-full opacity-90 bg-transparent bottom-3 sm:bottom-auto right-2 sm:top-5 sm:right-5 flex items-center gap-2 border-opacity-40"
            >
              <span>Edit</span>
              <BsPencilFill />
            </Button> */}
            <Editbtn1 handleClick={handleCloseAddressForm} />
          </section>

          <section className=" flex flex-col gap-y-3 xs:flex-row items-center xs:justify-between">
            <div
              onClick={handleConfirmation}
              className="flex items-center gap-2 cursor-pointer click-animation"
            >
              <p className="italic select-none">Delete Account</p>
              <GoTrash />
            </div>

            {/* <Link to={"/password-recovery"}> */}
            <div
              onClick={handlePasswordChangeForm}
              className=" flex items-center gap-2 cursor-pointer click-animation"
            >
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
          <PasswordChangeForm
            handlePasswordChangeForm={handlePasswordChangeForm}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfilePage;
