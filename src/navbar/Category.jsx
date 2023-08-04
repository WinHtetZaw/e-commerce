// * react
import { useState } from "react";

// * react router
import { Link, useNavigate } from "react-router-dom";

// * icons
import { IoIosArrowDown } from "react-icons/io";

// * react redux
import { useGetAllCategoriesQuery } from "../redux/services/productApi";
import { useDispatch } from "react-redux";
import { searchByCategory } from "../redux/features/generalSlice";

// animation
import { AnimatePresence, motion } from "framer-motion";

const Category = () => {
  // * hooks
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isSuccess } = useGetAllCategoriesQuery();

  return (
    <>
      <div
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="icon-heading-1 dropdown-base-1"
      >
        <span className="flex gap-1 items-center select-none cursor-pointer">
          <h3 className="heading-2">Categories</h3>
          <IoIosArrowDown
            className={`${isOpen && "-rotate-180"} transition duration-150`}
          />
        </span>

        {/* drop area  */}
        <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="dropdown-area-1 top-10 font-1 left-0 xs:right-0 h-[50vh] overflow-y-scroll"
          >
            <li className=" text-sm opacity-50 text-center font-bold">
              Category List
            </li>
            <Link to={"/products"}>
              <li className="dropdown-item mt-3">Show All</li>
            </Link>
            {data?.map((el, index) => (
              <Link key={index} to={`/products/category/${el}`}>
                <li className="dropdown-item">{el}</li>
              </Link>
            ))}
          </motion.ul>
        )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Category;
