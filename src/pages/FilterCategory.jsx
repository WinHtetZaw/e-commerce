import { useLocation, useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "../redux/services/productApi";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import HomeAd from "../components/HomeAd";

const FilterCategory = () => {
  const { name } = useParams();
  const { data, isSuccess, isLoading } = useGetProductByCategoryQuery(name);

  // isSuccess && console.log(data);
  const products = data?.products;

  const looping = products?.map((product, index) => (
    <div key={index}>
      <ProductCard {...product} />
    </div>
  ));

  return (
    <>
      <HomeAd/>
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-10 md:gap-y-16">
        {!isLoading && isSuccess ? looping : <ProductCardSkeleton />}
      </div>
    </>
  );
};

export default FilterCategory;
