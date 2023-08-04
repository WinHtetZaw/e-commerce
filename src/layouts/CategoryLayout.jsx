import { Link, Outlet, useLocation } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../redux/services/productApi";

const CategoryLayout = () => {
  const { data, isLoading, isSuccess } = useGetAllCategoriesQuery();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/products/category" && (
        <section className=" flex flex-wrap items-center gap-3 mt-10 select-none cursor-pointer">
          {data?.map((el, index) => (
            <Link key={index} to={`/products/category/${el}`}>
              <div className=" bg-[#f9fafc] py-1 px-3">#{el}</div>
            </Link>
          ))}
        </section>
      )}
      <Outlet />
    </>
  );
};

export default CategoryLayout;
