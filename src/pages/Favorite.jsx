// * react
import { useEffect, useState } from "react";

// * mantine ui library
import { Rating } from "@mantine/core";

// * icons
import { GoTrash } from "react-icons/go";

// * react redux
import { useDispatch } from "react-redux";
import { removeAll, removeFromFavorite } from "../redux/features/favoriteSlice";

// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * components
import AddNewBtn from "../components/addNewBtn";
import RemoveAllBtn from "../components/RemoveAllBtn";

const Favorite = () => {
  // * hooks
  const [isRemoved, setIsRemoved] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // * local storage
  let storedFavorite;
  if (localStorage.getItem("stored-favorite")) {
    storedFavorite = JSON.parse(localStorage.getItem("stored-favorite"));
  }
  // storedFavorite && console.log(storedFavorite);

  useEffect(() => {
    if (storedFavorite) {
      setIsRemoved(false);
    }
  }, [isRemoved]);

  // * handles

  const handleRemoveFavoriteClick = (e, product) => {
    e.stopPropagation();
    setIsRemoved(true);
    dispatch(removeFromFavorite(product));
  };

  const handleRemoveAll = () => {
    dispatch(removeAll());
    setIsRemoved(true);
  };

  const listsLooping = storedFavorite?.map((el, index) => (
    <div
      className={`grid grid-cols-12 items-center w-full shadow hover:shadow-md rounded transition duration-200`}
      key={index}
      onClick={() => navigate(`/products/${el.id}`)}
    >
      <div className=" col-span-6 flex items-center p-3 gap-3">
        {/* image & title  */}
        <div className=" w-14 h-14">
          <img
            className=" w-full h-full object-contain origin-center"
            src={el.thumbnail}
            alt={el.title}
          />
        </div>
        <h2 className="">{el.title}</h2>
      </div>

      {/* rating  */}
      <div className=" col-span-3">
        <Rating
          size="14px"
          color="rgb(17 94 89)"
          fractions={3}
          defaultValue={Math.round(el.rating)}
          readOnly
        />
      </div>

      {/* price  */}
      <div className=" col-span-2">
        <p className="">${el.price}</p>
      </div>

      {/* delete  */}
      <button
        onClick={(e) => handleRemoveFavoriteClick(e, el)}
        className="col-span-1"
      >
        <GoTrash className=" mx-auto" />
      </button>
    </div>
  ));

  return (
    <div className=" w-full min-h-[85vh] bg-white px-5 py-7">
      {/* head */}
      <section className=" flex justify-between mb-5">
        <h3 className=" font-2">Favorite List</h3>
        {storedFavorite?.length > 0 && (
          <div
            onClick={handleRemoveAll}
          >
            <RemoveAllBtn/>
          </div>
        )}
      </section>

      {storedFavorite?.length > 0 ? (
        <div className="">
          {/* main  */}
          <section className=" w-full flex flex-col gap-y-5 mb-5 mt-10">
            {listsLooping}
          </section>

          {/* foot  */}
          <section className=" flex justify-between">
            <div className="flex">{`Total - ${storedFavorite?.length}`}</div>
            <Link to={"/products"}>
              <AddNewBtn />
            </Link>
          </section>
        </div>
      ) : (
        <div className=" ml-5">
          <h2>No Favorite Items</h2>
          <Link to={"/products"}>
            <button className=" text-sm underline mt-5">
              Go & Add Items to Favorite
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorite;
