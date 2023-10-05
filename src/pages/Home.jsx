// * icons
import { ImArrowRight } from "react-icons/im";

// * react router fom
import { Link } from "react-router-dom";

// * animation
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";

// bg-[#bd3435]
const Home = () => {
  // * variants
  const containerVariant = {
    hidden: { opacity: 0.5 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        // staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  };

  const h1Variant = {
    hidden: { rotate: 335 },
    show: { rotate: -25, transition: { duration: 0.7 } },
  };

  const imgVariant = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { duration: 0.7 } },
  };

  const leftVariant = {
    hidden: { x: "100vw" },
    show: { x: 0, transition: { duration: 0.7, ease: "easeIn" } },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      className=" w-full h-full overflow-hidden relative"
    >
      {/* bg image */}
      <div className="">
        <img
          className=" w-full z-0 h-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>


      <div className="h-screen flex items-center justify-center text-slate-100">
        <motion.div
          variants={leftVariant}
          className="w-[95%] flex flex-col gap-5 sm:w-[80%] h-fit shadow-3 backdrop-blur-[2px] px-5 sm:px-10 py-7 sm:py-16 rounded-xl"
        >
          <h1
            style={{ textShadow: "2px 2px 6px black" }}
            className=" text-3xl max-sm:text-center"
          >
            Shop & Save: Your Ultimate Online Retail Destination
          </h1>
          <p className="opacity-95 tracking-wider">
            Discover a world of possibilities at our e-commerce haven. From
            trending fashion and cutting-edge electronics to home essentials,
            explore an extensive array of products tailored to your every need.
          </p>

          <div className=" max-sm:mx-auto relative group w-fit">
            <Link to={"/products"}>
              <button className="rounded-sm w-[120px] active:scale-95 transition duration-200 border opacity-80 hover:opacity-100 py-2 px-4 text-sm">
                Explore
              </button>
            </Link>
            <motion.div className="mt-1 group-hover:translate-x-[100px] transition duration-300">
              <ImArrowRight />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
