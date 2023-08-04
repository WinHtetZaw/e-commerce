// * react
import { useState } from "react";

// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * react hook form
import { useForm } from "react-hook-form";

// * alert notification
import { toast } from "react-hot-toast";

// * icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// * helper
import { UAI, setUaiToStorage } from "../helper/helper";

const ForgotPwForm = () => {
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
  // ? UAI ---> user account information
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" max-w-[350px] mx-auto w-full p-7 xs:p-10 flex flex-col gap-5 glass-2 rounded-3xl"
    >
      {/* title  */}
      <h1 className=" text-2xl font-2 font-bold w-full text-center">
        Password Recovery
      </h1>

      {/* email  */}
      <div className=" flex flex-col gap-2">
        <label className="  capitalize" htmlFor="email">
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

      {/* old password  */}
      <div className=" flex flex-col gap-2">
        <label className="  capitalize" htmlFor="old_password">
          Old Password
        </label>
        <div className="flex items-center form-input-2">
          <input
            {...register("old_password", { required: true, minLength: 6 })}
            type={show._oldPassword ? "text" : "password"}
            className="password-input"
            placeholder="Password . . . "
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
      <div className=" flex flex-col gap-2">
        <label className="  capitalize" htmlFor="new_password">
          New Password
        </label>
        <div className="flex items-center form-input-2">
          <input
            {...register("new_password", { required: true, minLength: 6 })}
            type={show._newPassword ? "text" : "password"}
            className="password-input"
            placeholder="Password . . . "
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

      <div className="flex gap-2 text-sm">
        <Link to={"/register"}>
          <span className="underline select-none cursor-pointer">Register</span>
        </Link>
        <Link to={"/log-in"}>
          <span className="underline select-none cursor-pointer">Log in</span>
        </Link>
      </div>

      <button className="uppercase btn-1 bg-teal-800 w-fit text-slate-50 mx-auto">
        Save changes
      </button>
    </form>
  );
};

export default ForgotPwForm;
