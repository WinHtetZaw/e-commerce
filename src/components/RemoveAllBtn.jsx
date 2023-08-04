import { GoTrash } from "react-icons/go";

const RemoveAllBtn = () => {
  return (
    <button className="text-sm click-animation flex gap-1 items-center italic text-red-500">
      <span>Remove All</span>
      <GoTrash />
    </button>
  );
};

export default RemoveAllBtn;
