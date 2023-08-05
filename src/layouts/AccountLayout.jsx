import { Navigate, Outlet, useLocation } from "react-router-dom";
import Aside from "../account/Aside";
import { useState } from "react";
import { UAI } from "../helper/helper";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const AccountLayout = () => {
  // * hooks
  const [isOpened, setIsOpened] = useState(false);
  const location = useLocation();

  const { isLogin } = useSelector((state) => state.generalSlice);

  // if (!isLogin) {
  //   return (
  //     <>
  //       {toast.error("Need an account for this action!")}
  //       <Navigate to={"/products"} replace />
  //     </>
  //   );
  // }

  return (
    <div className="flex gap-7 w-full min-h-[85vh] bg-gray-100">
      <div
        className={`${
          isOpened ? "w-[100px]" : "w-[200px]"
        } min-h-[85vh] transition-all duration-300`}
      >
        <Aside isOpened={isOpened} setIsOpened={setIsOpened} />
      </div>

      {/* children  */}
      <div className={`${isOpened ? " w-full" : " w-full"} h-full`}>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
