import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../helper/helper";
import { toast } from "react-hot-toast";

const Protected = ({ children }) => {
  if (!getLocalStorage("auth-user")) {
    return (
      <>
        {
        toast.error("Need an account for this action!")
        }
        <Navigate to={"/products"} replace />
      </>
    );
  }
  return children;
};

export default Protected;
