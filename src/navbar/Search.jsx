// * react
import { useState } from "react";

// * icons
import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

// * react redux
import { useGetProductsBySkipAndLimitQuery } from "../redux/services/productApi";

// * react router dom
import { useNavigate } from "react-router-dom";

// * animation
import { AnimatePresence, motion } from "framer-motion";

const Search = (props) => {
  const { setIsOpened = () => {} } = props;
  // * hooks
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isSuccess } = useGetProductsBySkipAndLimitQuery({
    skip: 0,
    limit: 150,
  });
  const navigate = useNavigate();

  // * handles
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.length == 0) {
      return;
    }

    setIsOpened(false);
    navigate({
      pathname: "/products/search",
      search: `?q=${searchQuery}`,
    });
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-2 px-4 w-[200px] lg:w-[250px] rounded-full group flex items-center bg-gray-100"
    >
      <input
        value={searchQuery}
        onChange={handleInputChange}
        className=" w-full outline-none bg-transparent block placeholder:select-none"
        type="text"
        placeholder="Search . . . "
      />
      <AnimatePresence>
        {searchQuery.length > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.1 }}
            className=" opacity-70 mx-2 cursor-pointer click-animation-1 hover:scale-110"
          >
            <RxCross2 onClick={() => setSearchQuery("")} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="border-r-[1.5px] border-black h-[20px] mr-2 opacity-20"></div>
      <div
        onClick={handleSubmit}
        className=" opacity-70 cursor-pointer click-animation-1"
      >
        <GoSearch className=" text-[20px]" />
      </div>
    </form>
  );
};

export default Search;
