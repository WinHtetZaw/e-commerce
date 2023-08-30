import React from "react";
import { Outlet } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const ProductLayout = () => {
  return (
    <div className="px-7 md:px-10">
      {/* <ItemCard/> */}
      <Outlet />
    </div>
  );
};

export default ProductLayout;
