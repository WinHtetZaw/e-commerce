import { Outlet } from "react-router-dom";
import Aside from "../account/Aside";
import { useState } from "react";

const AccountLayout = () => {
  // * hooks
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex gap-7 w-full min-h-[85vh] bg-gray-100">
      <div
        className={`${
          isOpened ? "w-[100px]" : "w-[200px]"
        } min-h-[85vh] transition-all duration-300 bg-white`}
      >
        <Aside isOpened={isOpened} setIsOpened={setIsOpened} />
      </div>

      {/* children  */}
      <div
        className={`${
          isOpened ? " w-full" : " w-full"
        } h-full overflow-x-scroll  px-5 py-7 lg:px-10 bg-white`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
