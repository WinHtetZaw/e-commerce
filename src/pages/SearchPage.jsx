import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchProductsQuery } from "../redux/services/productApi";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import Empty from "../components/Empty";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useSearchParams();
  const { data, isLoading, isSuccess } = useSearchProductsQuery(
    searchQuery.get("q")
  );

  const looping = data?.products?.map((product, index) => (
    <div key={index}>
      <ProductCard {...product} />
    </div>
  ));

  return (
    <>
      {data?.products.length == 0 && (
        <div className=" h-full w-full my-20 flex flex-col sm:flex-row justify-center items-center">
          <div className=" w-[200] h-[200px]">
            <Empty />
          </div>
          <div className=" max-sm:text-center">
            <p className=" font-semibold italic">No match product found.</p>
            <p className=" font-semibold italic">
              Please search another keyword.
            </p>
            <button onClick={()=>navigate('/products')} className="btn mt-3 bg-teal-800 rounded-full text-white capitalize text-sm click-animation">
              Show all product
            </button>
          </div>
        </div>
      )}
      <div className="my-10 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-10 md:gap-y-16">
        {!isLoading && isSuccess ? looping : <ProductCardSkeleton />}
      </div>
    </>
  );
};

export default SearchPage;
