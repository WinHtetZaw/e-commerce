// * icons
import { ImArrowRight } from "react-icons/im";

// * react router fom
import { Link } from "react-router-dom";

// * animation
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
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
          className=" w-full h-full absolute inset-0 object-cover blur-sm"
          src="https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>

      <div className="h-screen text-slate-50">
        <section className=" w-[90%] sm:w-[80%] pt-[10%] sm:pt-[20%] lg:pt-[10%] mx-auto flex flex-col sm:flex-row justify-center items-center gap-y-10 gap-x-5">
          <div className=" w-full sm:w-8/12 relative aspect-video sm:mt-0">
            <h1 className="hidden text-shadow-2 sm:flex -rotate-[25deg] w-fit italic font-2 flex-col z-30 absolute -top-0 -left-0 sm:-top-20 sm:-left-20 text-[2rem] xs:text-[2rem] md:text-[5rem]">
              <TypeAnimation
                style={{ whiteSpace: "pre-line" }}
                sequence={["Choose \n Your Clothing \n Style!"]}
                speed={50}
                // repeat={Infinity}
                cursor={false}
              />
              {/* <span>Choose</span>
              <span className=" whitespace-nowrap">Your Clothing</span>
              <span>Style!</span> */}
            </h1>
            <motion.img
              variants={imgVariant}
              className=" absolute z-20 w-full h-full mt-20 sm:mt-0"
              src="https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              // src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>

          {/* left  */}
          <motion.div
            variants={leftVariant}
            className="mt-[80px] w-full sm:w-4/12 flex flex-col gap-5"
          >
            <h1 className=" z-30 text-3xl max-sm:text-center">Fashion 23</h1>
            <p className=" opacity-80 tracking-wider text-sm line-clamp-3 w-full">
              Discover a world of possibilities at our e-commerce haven. From
              trending fashion and cutting-edge electronics to home essentials,
              explore an extensive array of products tailored to your every
              need.
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
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
