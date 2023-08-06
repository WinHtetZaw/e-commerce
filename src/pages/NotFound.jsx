import "@lottiefiles/lottie-player";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" w-screen h-screen overflow-hidden flex items-center justify-center">
        <div className=" w-[300px] aspect-square">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/c9cebbc5-7546-4e84-b97f-e771e11a1275/FAWveyWdlO.json"
            style={{ width: "100%" }}
          ></lottie-player>
        </div>

        <button
          onClick={() => navigate("/products")}
          className=" click-animation"
        >
          <div className="relative inline-block text-sm font-medium text-[#898989] group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#898989] group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="relative block px-8 py-3 bg-white border border-current">
              <h5>Go Shop</h5>
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

export default NotFound;
