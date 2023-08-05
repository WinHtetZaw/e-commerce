// * react
import { useState } from "react";

// * icons
import { GoSearch } from "react-icons/go";

// * react redux
import { useGetProductsBySkipAndLimitQuery } from "../redux/services/productApi";

// * react router dom
import { useNavigate } from "react-router-dom";

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
      className="py-2 px-4 rounded-full group flex items-center bg-gray-100"
    >
      <input
        value={searchQuery}
        onChange={handleInputChange}
        className=" outline-none bg-transparent block"
        type="search"
        placeholder="Search . . . "
      />
      <GoSearch className=" text-xl opacity-70" />
    </form>
  );
};

export default Search;
