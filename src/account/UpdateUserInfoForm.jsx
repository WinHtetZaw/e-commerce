// * react form
import { useForm } from "react-hook-form";

// * react redux
import { useDispatch } from "react-redux";
import { setPersonalInfo } from "../redux/features/updateInfoSlice";

// * animation
import { motion } from "framer-motion";
import {
  formModalChildVariant,
  formModalParentVariant,
} from "../helper/animationHelper";

const UpdateUserInfoForm = ({ handleCloseUserForm }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // * handles
  const onSubmit = (data) => {
    dispatch(setPersonalInfo(data));
    handleCloseUserForm();
  };

  return (
    <motion.div
      variants={formModalParentVariant}
      initial="hidden"
      animate="show"
      exit="exit"
      className=" fixed z-10 flex justify-center items-center w-screen h-screen top-0 left-0"
    >
      <div
        onClick={handleCloseUserForm}
        className="absolute -z-10 inset-0 bg-black bg-opacity-70"
      ></div>
      {/* <AnimatePresence> */}
      <motion.form
        variants={formModalChildVariant}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[450px] mx-auto w-full px-10 py-7 flex flex-col gap-5 bg-white opacity-100 rounded-xl"
      >
        {/* title  */}
        <h1 className=" text-xl font-2 font-bold w-full text-center mb-3">
          Personal Information
        </h1>

        {/* name  */}
        <div className=" flex gap-5 xs:gap-0 flex-col xs:flex-row xs:justify-between w-full">
          <span className=" flex flex-col gap-1 xs:w-[48%]">
            <label className=" opacity-90 capitalize" htmlFor="first_name">
              First Name
            </label>
            <input
              {...register("first_name", { required: true })}
              type="text"
              className="form-input-3"
              placeholder="First Name"
              name="first_name"
            />
            {errors.first_name && (
              <span className=" text-red-600 text-sm">
                First Name is required
              </span>
            )}
          </span>

          <span className=" flex flex-col gap-1 xs:w-[48%]">
            <label className=" opacity-90 capitalize" htmlFor="last_name">
              Last Name
            </label>
            <input
              {...register("last_name", { required: true })}
              type="text"
              className="form-input-3"
              placeholder="Last Name"
              name="last_name"
            />
            {errors.last_name && (
              <span className=" text-red-600 text-sm">
                Last Name is required
              </span>
            )}
          </span>
        </div>

        {/* email  */}
        <div className=" flex flex-col gap-1">
          <label className=" opacity-90 capitalize" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="form-input-3"
          />
          {errors.email && (
            <span className=" text-red-600 text-sm">
              The email field is required
            </span>
          )}
        </div>

        {/* phone  */}
        <div className="flex flex-col gap-1">
          <label className=" opacity-90 capitalize" htmlFor="phone">
            Phone Number
          </label>
          <input
            {...register("phone", { required: true })}
            type="text"
            className="form-input-3"
            name="phone"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <span className=" text-red-600 text-sm">
              Phone number is required
            </span>
          )}
        </div>

        {/* email  */}
        <div className=" flex flex-col gap-1">
          <label className=" opacity-90 capitalize" htmlFor="bio">
            Bio
          </label>
          <input
            {...register("bio", { required: true })}
            type="text"
            placeholder="bio"
            className="form-input-3"
          />
          {errors.bio && (
            <span className=" text-red-600 text-sm">
              The bio field is required
            </span>
          )}
        </div>

        <button className="mt-3 w-fit text-sm uppercase btn-1 bg-teal-800 text-slate-50 mx-auto click-animation">
          Save Changes
        </button>
      </motion.form>
      {/* </AnimatePresence> */}
    </motion.div>
  );
};

export default UpdateUserInfoForm;
