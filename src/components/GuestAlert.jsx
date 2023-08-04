import { toast } from "react-hot-toast";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const GuestAlert = ({ t }) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } rounded-lg shadow-2  pointer-events-auto flex items-center bg-white`}
    >
      <p className="flex gap-3 px-4">
        <span className="text-2xl text-orange-500">
          <AiOutlineExclamationCircle />
        </span>
        Need an account for this action{" "}
      </p>

      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.remove(t.id)}
          className="w-full p-4 border border-transparent rounded-none rounded-r-lg flex items-center justify-center text-sm font-medium text-teal-800 hover:text-teal-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GuestAlert;
