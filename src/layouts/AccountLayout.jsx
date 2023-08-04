import { Navigate, Outlet, useLocation } from "react-router-dom";
import Aside from "../account/Aside";
import { useState } from "react";
import { UAI } from "../helper/helper";

const AccountLayout = () => {
  // * hooks
  const [isOpened, setIsOpened] = useState(false);
  const location = useLocation()

  if (!UAI || !UAI.auth) {
    return (
      <>
        <div className="">apple</div>
      </>
    );
  }

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
