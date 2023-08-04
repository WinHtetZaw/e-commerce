import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../helper/helper";
import { toast } from "react-hot-toast";
import GuestAlert from "./GuestAlert";

const Protected = ({ children }) => {
  if (!getLocalStorage("auth-user")) {
    return (
      <>
        {toast.custom((t) => (
          <GuestAlert t={t} />
        ))}
        <Navigate to={"/products"} replace />
      </>
    );
  }
  return children;
};

export default Protected;
