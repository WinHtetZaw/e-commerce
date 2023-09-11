import { Button } from "@nextui-org/react";
import React from "react";
import { BsPencilFill } from "react-icons/bs";

const Editbtn1 = ({ handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className=" absolute rounded-full opacity-90 bg-transparent bottom-3 sm:bottom-auto right-2 sm:top-5 sm:right-5 flex items-center gap-2 border-opacity-40"
    >
      <span>Edit</span>
      <BsPencilFill />
    </Button>
  );
};

export default Editbtn1;
