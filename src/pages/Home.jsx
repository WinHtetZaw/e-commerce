// * icons
import { ImArrowRight } from "react-icons/im";

// * react router fom
import { Link, useNavigate } from "react-router-dom";

// * animation
import { AnimatePresence, motion } from "framer-motion";
import HomeAd from "../components/HomeAd";
import { useState } from "react";
"smartphone", "laptop", "watch", "furniture", "perfume";
const categories = [
  {
    title: "smartphones",
    url: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "laptops",
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
  },
  {
    title: "mens-watches",
    url: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "furniture",
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww",
  },
  {
    title: "skincare",
    url: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW5jYXJlfGVufDB8fDB8fHww",
  },
  {
    title: "fragrances",
    url: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

// bg-[#bd3435]
const Home = () => {
  const [hoverItem, setHoverItem] = useState("");
  const navigate = useNavigate();

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
    // <motion.div
    //   variants={containerVariant}
    //   initial="hidden"
    //   animate="show"
    //   className=" w-full h-full overflow-hidden relative"
    // >
    //   {/* bg image */}
    //   <div className="">
    //     <img
    //       className=" w-full z-0 h-full absolute inset-0 object-cover"
    //       src="https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    //       alt=""
    //     />
    //   </div>

    //   <div className="h-screen flex items-center justify-center text-slate-100">
    //     <motion.div
    //       variants={leftVariant}
    //       className="w-[95%] flex flex-col gap-5 sm:w-[80%] h-fit shadow-3 backdrop-blur-[2px] px-5 sm:px-10 py-7 sm:py-16 rounded-xl"
    //     >
    //       <h1
    //         style={{ textShadow: "2px 2px 6px black" }}
    //         className=" text-3xl max-sm:text-center"
    //       >
    //         Shop & Save: Your Ultimate Online Retail Destination
    //       </h1>
    //       <p className="opacity-95 tracking-wider">
    //         Discover a world of possibilities at our e-commerce haven. From
    //         trending fashion and cutting-edge electronics to home essentials,
    //         explore an extensive array of products tailored to your every need.
    //       </p>

    //       <div className=" max-sm:mx-auto relative group w-fit">
    //         <Link to={"/products"}>
    //           <button className="rounded-sm w-[120px] active:scale-95 transition duration-200 border opacity-80 hover:opacity-100 py-2 px-4 text-sm">
    //             Explore
    //           </button>
    //         </Link>
    //         <motion.div className="mt-1 group-hover:translate-x-[100px] transition duration-300">
    //           <ImArrowRight />
    //         </motion.div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </motion.div>
    <div className="px-3 md:px-10">
      <HomeAd />

      <main className="mt-5 sm:mt-10">
        <h2 className=" capitalize font-semibold text-lg">
          shop our top categories
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5 mt-3 mb-10">
          {categories.map((el) => (
            <div
              onClick={() => navigate(`/products/category/${el.title}`)}
              onMouseOver={() => setHoverItem(el.title)}
              onMouseLeave={() => setHoverItem("")}
              className="rounded-lg aspect-[9/14] overflow-hidden relative"
              key={el.title}
            >
              <img
                src={el.url}
                alt=""
                className=" w-full h-full object-center object-cover"
              />
              <AnimatePresence>
                {hoverItem !== el.title && (
                  <motion.h2
                    initial={{ translateY: 100, transition: { delay: 0.1 } }}
                    animate={{ translateY: 0 }}
                    exit={{ translateY: 100 }}
                    style={{ textShadow: "0.7px 0.7px  rgb(100 116 139)" }}
                    className="absolute w-full max-sm:text-sm text-center bottom-5  text-slate-100 capitalize font-semibold"
                  >
                    {el.title}
                  </motion.h2>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {hoverItem === el.title && (
                  <motion.div
                    initial={{ translateY: "100%" }}
                    animate={{ translateY: 0, transition: { delay: 0.1 } }}
                    exit={{ translateY: "100%" }}
                    className="absolute p-2 top-[30%] w-full h-[80%] rounded-t-lg backdrop-blur-sm bg-slate-950 bg-opacity-70 text-slate-50"
                  >
                    <h2 className=" capitalize text-center my-2">{el.title}</h2>
                    <p className="text-sm italic">
                      Discover a wide range of categories, from electronics and
                      fashion to home decor and more, all designed to cater to
                      your diverse shopping needs.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
