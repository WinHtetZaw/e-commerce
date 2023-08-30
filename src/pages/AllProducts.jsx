// * components
import ItemCard from "../components/ItemCard";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

// * react redux
import { useGetAllProductsQuery } from "../redux/services/productApi";

// * animation
import { motion } from "framer-motion";

const AllProducts = () => {
  // * hooks
  const { data, isLoading, isSuccess } = useGetAllProductsQuery();
  const products = data?.products;

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
        <div
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/399159/pexels-photo-399159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
          className=" flex flex-col justify-center md:py-10 py-5 px-8 md:px-16 w-full h-[150px] md:h-[300px] bg-cover bg-bottom bg-no-repeat rounded mt-10"
        >
          <h2 className=" tracking-wider  text-teal-800 text-[1.125rem] md:text-[1.875rem] md:lh-3 lh-1 font-2 font-bold capitalize w-full md:w-1/2 lg:w-1/3">
            Grab upto 50% off on selected headphone
          </h2>
          <button className="md:mt-10 mt-5 py-1 px-3 rounded-full md:btn-1 w-[10rem] capitalize text-white bg-teal-800 click-animation">
            buy now
          </button>
        </div>
      ) : (
        <div className="h-[150px] md:h-[300px]  mt-10 w-full skeleton rounded-2xl"></div>
      )}

      {/* products display  */}
      <div className="my-10 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-10 md:gap-y-16">
        {!isLoading && isSuccess ? looping : <ProductCardSkeleton />}
      </div>
      {/* <div className=" py-10 flex flex-wrap gap-x-7 gap-y-5 justify-center items-center">
      {!isLoading && isSuccess ? looping2 : <ProductCardSkeleton />}
      </div> */}
    </>
  );
};

export default AllProducts;
