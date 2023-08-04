import { useSearchParams } from "react-router-dom";
import { useSearchProductsQuery } from "../redux/services/productApi";
import ProductCard from "../components/ProductCard";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const { data } = useSearchProductsQuery(searchQuery.get("q"));
  console.log(data);

  const looping = data?.products?.map((product, index) => (
    <div key={index}>
      <ProductCard {...product} />
    </div>
  ));

  return (
    <>
      <div className="my-10 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-10 md:gap-y-16">
        {looping}
      </div>
    </>
  );
};

export default SearchPage;
