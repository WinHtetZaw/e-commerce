import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../helper/helper";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
  const { isLogin } = useSelector((state) => state.generalSlice);

  if (!isLogin) {
    return (
      <>
        {/* {toast.error("Need an account for this action!")} */}
        <Navigate to={"/products"} replace />
      </>
    );
  }
  return children;
};

export default Protected;
