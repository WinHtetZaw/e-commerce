import { useDispatch, useSelector } from "react-redux";
import { setPaginateInfo } from "../redux/features/generalSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Pagination } from "@nextui-org/react";

const PaginationBtn = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    paginateInfo: { skip, limit, activePage },
  } = useSelector((state) => state.generalSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchParams({ page: activePage });
  }, [setSearchParams, activePage]);

  // * handles
  const handlerChangePagination = (current, skip) => {
    skip = (current - 1) * 10;
    dispatch(setPaginateInfo({ skip, limit, activePage: current }));
    setSearchParams({ page: current });
  };

  const customStyles = {
    // pagination: {
    //   backgroundColor: '#your-custom-background-color',
    // },
    // page: {
    //   color: '#your-custom-text-color',
    // },
    activePage: {
      backgroundColor: "#fff",
      color: "#333",
    },
  };

  return (
    <div className="my-10 mx-auto w-fit bg-teal-">
      {/* <Pagination
        onChange={handlerChangePagination}
        value={activePage}
        total={10}
        styles={(theme) => ({
          control: {
            "&[data-active]": {
              backgroundImage: theme.fn.gradient({
                from: "rgb(17 94 89)",
                to: "rgb(13 148 136)",
              }),
              border: 0,
            },
          },
        })}
      /> */}

      <Pagination
      classNames={{
        // wrapper: "gap-0 overflow-visible h-8 rounded border border-divider",
        // item: "w-8 h-8 text-small rounded-none bg-transparent",
        cursor:
          "bg-gradient-to-b shadow-lg from-[#115E59] to-[#115E59] dark:from-default-300 dark:to-default-100 text-white font-bold",
      }}
        onChange={handlerChangePagination}
        page={activePage}
        color="success"
        showControls
        total={10}
        initialPage={1}
      />
    </div>
  );
};

export default PaginationBtn;
