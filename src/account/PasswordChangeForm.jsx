import { motion } from "framer-motion";
import { UAI, setUaiToStorage } from "../helper/helper";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  formModalChildVariant,
  formModalParentVariant,
} from "../helper/animationHelper";

const PasswordChangeForm = ({ handlePasswordChangeForm }) => {
  // * hooks
  const [loginErr, setLoginErr] = useState("");
  const [show, setShow] = useState({
    _oldPassword: false,
    _newPassword: false,
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "johndoe@gmail.com" },
  });

  // * handles
  const onSubmit = (data) => {
    if (UAI && data.email === UAI.email && data.old_password === UAI.password) {
      UAI.password = data.new_password;
      setUaiToStorage(UAI);
      toast.success("Successfully password changed!");
      navigate(-1);
    } else {
      setLoginErr("Email or password wrong");
      toast.error("Password didn't change!");
    }
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
        onClick={handlePasswordChangeForm}
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
          Password Change
        </h1>

        {/* email  */}
        <div className=" flex flex-col gap-1">
          <label className=" opacity-90 capitalize" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="email"
            className="form-input-3"
          />
          {errors.email && (
            <span className=" text-red-600 text-sm">
              The email field is required
            </span>
          )}
          {loginErr && <span className=" text-red-600">{loginErr}</span>}
        </div>

        {/* old password  */}
        <div className=" flex flex-col gap-1">
          <label className=" opacity-90 capitalize" htmlFor="old_password">
            Old Password
          </label>
          <div className="flex items-center form-input-3">
            <input
              {...register("old_password", { required: true, minLength: 6 })}
              type={show._oldPassword ? "text" : "password"}
              placeholder="Password . . . "
              className="password-input"
            />
            <div
              onClick={() =>
                setShow({ ...show, _oldPassword: !show._oldPassword })
              }
            >
              {show._oldPassword ? (
                <AiOutlineEyeInvisible className=" text-lg" />
              ) : (
                <AiOutlineEye className=" text-lg" />
              )}
            </div>
          </div>
          {errors.old_password && errors.old_password.type === "required" && (
            <span className=" text-red-600 text-sm">
              The password field is required
            </span>
          )}
          {errors.old_password && errors.old_password.type === "minLength" && (
            <span className=" text-red-600 text-sm text-start">
              Password must be at least 6 characters
            </span>
          )}
        </div>

        {/* new password  */}
        <div className=" flex flex-col gap-1">
          <label className=" opacity-90 capitalize" htmlFor="new_password">
            New Password
          </label>
          <div className="flex items-center form-input-3">
            <input
              {...register("new_password", { required: true, minLength: 6 })}
              type={show._newPassword ? "text" : "password"}
              placeholder="Password . . . "
              className="password-input"
            />
            <div
              onClick={() =>
                setShow({ ...show, _newPassword: !show._newPassword })
              }
            >
              {show._newPassword ? (
                <AiOutlineEyeInvisible className=" text-lg" />
              ) : (
                <AiOutlineEye className=" text-lg" />
              )}
            </div>
          </div>
          {errors.new_password && errors.new_password.type === "required" && (
            <span className=" text-red-600 text-sm">
              The password field is required
            </span>
          )}
          {errors.new_password && errors.new_password.type === "minLength" && (
            <span className=" text-red-600 text-sm text-start">
              Password must be at least 6 characters
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

export default PasswordChangeForm;
