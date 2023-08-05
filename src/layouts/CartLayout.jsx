import React from "react";
import { Outlet } from "react-router-dom";

const CartLayout = () => {
  return (
    <div className="px-7 md:px-10">
      <Outlet />
    </div>
  );
};

export default CartLayout;
