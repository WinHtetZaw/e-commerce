// * components
import { useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import PaginationBtn from "../components/PaginationBtn";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

// * react redux
import {
  useGetAllProductsQuery,
  useGetProductsByLimitQuery,
} from "../redux/services/productApi";

// * animation
import { motion } from "framer-motion";
import HomeAd from "../components/HomeAd";

const AllProducts = () => {
  // * hooks
  const { data } = useGetAllProductsQuery();
  const {
    paginateInfo: { skip, limit },
  } = useSelector((state) => state.generalSlice);
  const {
    data: paginateData,
    isLoading,
    isSuccess,
  } = useGetProductsByLimitQuery({
    skip,
    limit,
  });
  const products = paginateData?.products;

  // * variants
  const cardContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const looping = products?.map((product, index) => (
    <motion.div
      variants={cardContainerVariant}
      initial="hidden"
      animate="show"
      key={index}
      className=" origin-top-right w-full h-full"
    >
      <ProductCard {...product} />
    </motion.div>
  ));

  const looping2 = products?.map((product, index) => (
    <div className="" key={index}>
      <ItemCard {...product} />
    </div>
  ));

  return (
    <>
      {/* top promotion ads card  */}
      {!isLoading && isSuccess ? (
        <HomeAd/>
      ) : (
        <div className="h-[150px] md:h-[300px]  mt-10 w-full skeleton rounded-2xl"></div>
      )}

      <PaginationBtn />

      {/* products display  */}
      <div className="my-10 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-10 md:gap-y-16">
        {!isLoading || isSuccess ? looping : <ProductCardSkeleton />}
      </div>
      {/* <div className=" py-10 flex flex-wrap gap-x-7 gap-y-5 justify-center items-center">
      {!isLoading && isSuccess ? looping2 : <ProductCardSkeleton />}
      </div> */}

      {/* <PaginationBtn /> */}
    </>
  );
};

export default AllProducts;
