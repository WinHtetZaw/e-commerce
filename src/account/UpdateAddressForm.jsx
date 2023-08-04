// * react form
import { useForm } from "react-hook-form";

// * react redux
import { useDispatch } from "react-redux";

// * animation
import { motion } from "framer-motion";
import {
  formModalChildVariant,
  formModalParentVariant,
} from "../helper/animationHelper";
import { setAddressInfo } from "../redux/features/updateInfoSlice";

const UpdateAddressForm = ({ handleCloseAddressForm }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setAddressInfo(data));
    handleCloseAddressForm();
  };

  return (
    <motion.div
      variants={formModalParentVariant}
      initial="hidden"
      animate="show"
      exit="exit"
      className=" absolute z-10 flex justify-center items-center w-screen h-screen top-0 left-0"
    >
      <div
        onClick={handleCloseAddressForm}
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
          Address
        </h1>

        {/* city & state  */}
        <div className=" flex gap-5 xs:gap-0 flex-col xs:flex-row xs:justify-between w-full">
          <span className=" flex flex-col gap-1 xs:w-[48%]">
            <label className=" opacity-90 capitalize" htmlFor="city">
              City
            </label>
            <input
              {...register("city", { required: true })}
              type="text"
              placeholder="city"
              className="form-input-3"
              name="city"
            />
            {errors.city && (
              <span className=" text-red-600 text-sm">
                The city field is required
              </span>
            )}
          </span>

          <span className=" flex flex-col gap-1 xs:w-[48%]">
            <label className=" opacity-90 capitalize" htmlFor="state">
              State
            </label>
            <input
              {...register("state", { required: true })}
              type="text"
              placeholder="state"
              className="form-input-3"
              name="state"
            />
            {errors.state && (
              <span className=" text-red-600 text-sm">
                The state field is required
              </span>
            )}
          </span>
        </div>

        {/* Country  */}
        <div className=" flex flex-col gap-1">
          <label className=" opacity-90 capitalize" htmlFor="country">
            Country
          </label>
          <input
            {...register("country", { required: true })}
            type="text"
            placeholder="country"
            className="form-input-3"
          />
          {errors.country && (
            <span className=" text-red-600 text-sm">
              The country field is required
            </span>
          )}
        </div>

        {/* Postal Code  */}
        <div className=" flex flex-col gap-1">
          <label className=" opacity-90 capitalize" htmlFor="postal_code">
            Postal Code
          </label>
          <input
            {...register("postal_code", { required: true })}
            type="text"
            placeholder="postal code"
            className="form-input-3"
          />
          {errors.postal_code && (
            <span className=" text-red-600 text-sm">
              The postal code field is required
            </span>
          )}
        </div>

        {/* Tax ID  */}
        <div className=" flex flex-col gap-1">
          <label className=" opacity-90 capitalize" htmlFor="taxid">
            Tax ID
          </label>
          <input
            {...register("taxid", { required: true })}
            type="text"
            placeholder="tax id"
            className="form-input-3"
          />
          {errors.taxid && (
            <span className=" text-red-600 text-sm">
              The tax id field is required
            </span>
          )}
        </div>

        <button className="mt-3 w-fit uppercase text-sm btn-1 bg-teal-800 text-slate-50 mx-auto click-animation">
          Save Changes
        </button>
      </motion.form>
      {/* </AnimatePresence> */}
    </motion.div>
  );
};

export default UpdateAddressForm;
