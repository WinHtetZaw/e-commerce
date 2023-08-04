import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className=" text-2xl mt-10 active:scale-90 transition duration-200"
    >
      <MdArrowBackIos />
    </button>
  );
};

export default BackBtn;
