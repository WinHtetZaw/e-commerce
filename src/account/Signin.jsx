// * react
import { useState } from "react";

// * react router dom
import { Link, useLocation, useNavigate } from "react-router-dom";

// * react hook form
import { useForm } from "react-hook-form";

// * alert notification
import { toast } from "react-hot-toast";

// * redux
import { useDispatch } from "react-redux";
import { setIsLogin } from "../redux/features/generalSlice";

// * helper function
import { UAI, setUaiToStorage, setLocalStorage } from "../helper/helper";

// * icons
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Signin = () => {
  // * hooks
  const [loginErr, setLoginErr] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "johndoe@gmail.com", password: "aaaaaaaa" },
  });

  // * UAI ---> user account information
  const onSubmit = (data) => {
    if (UAI && data.email === UAI.email && data.password === UAI.password) {
      UAI.auth = true;
      setLocalStorage("shopcart-UAI", UAI);
      toast.success("Successfully Log in!");
      dispatch(setIsLogin(true));

      if (location.state) {
        navigate("/products");
      } else {
        navigate(-1);
      }
    } else {
      setLoginErr("Email or password wrong");
      toast.error("Cannot log in", {
        id: "clipboard",
      });
    }
  };

  return (
    <>
      <div className=" bg-[url(https://images.pexels.com/photos/236910/pexels-photo-236910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] relative flex items-center justify-center p-3 xs:p-10 w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden overflow-y-scroll">
        <Link to={"/products"}>
          <button className="absolute top-5 left-10 link-btn">
            Go to shop
          </button>
        </Link>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-10 left-10 link-btn"
        >
          Go Back
        </button>

        {/* log in form  */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[350px] mx-auto w-full h-fit p-7 xs:p-10 flex flex-col gap-5 glass-2 rounded-3xl"
        >
          {/* title  */}
          <h1 className=" text-2xl font-2 font-bold w-full text-center">
            Log in from
          </h1>

          {/* email  */}
          <div className=" flex flex-col gap-2">
            <label className=" opacity-80 capitalize" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="form-input-2"
              placeholder="Email"
            />
            {errors.email && (
              <span className=" text-red-600 text-sm">
                The email field is required
              </span>
            )}
            {loginErr && <span className=" text-red-600">{loginErr}</span>}
          </div>

          {/* password  */}
          <div className=" flex flex-col gap-2">
            <label className=" opacity-80 capitalize" htmlFor="password">
              Password
            </label>
            <div className="flex items-center form-input-2">
              <input
                {...register("password", { required: true, minLength: 6 })}
                type={show ? "text" : "password"}
                className="password-input"
                placeholder="Password . . ."
              />
              <div onClick={() => setShow(!show)}>
                {show ? (
                  <AiOutlineEyeInvisible className=" text-lg" />
                ) : (
                  <AiOutlineEye className=" text-lg" />
                )}
              </div>
            </div>
            {errors.password && errors.password.type === "required" && (
              <span className=" text-red-600 text-sm">
                The password field is required
              </span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className=" text-red-600 text-sm text-start">
                Password must be at least 6 characters
              </span>
            )}
          </div>

          <section>
            <Link to={"/register"}>
              <div className=" text-sm flex gap-2">
                <p>Don&apos;t have an account?</p>
                <span className="underline select-none cursor-pointer">
                  Register
                </span>
              </div>
            </Link>

            {/* <Link to={"/password-recovery"}> */}
            <p className=" text-sm underline select-none cursor-pointer">
              Forgot password
            </p>
            {/* </Link> */}
          </section>

          <button className=" w-[10rem] uppercase btn-1 bg-teal-800 text-slate-50 mx-auto">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
