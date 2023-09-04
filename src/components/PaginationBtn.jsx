import { Pagination } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { setPaginateInfo } from "../redux/features/generalSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

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

  return (
    <div className="my-10 mx-auto w-fit bg-teal-">
      <Pagination
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
      />
    </div>
  );
};

export default PaginationBtn;
