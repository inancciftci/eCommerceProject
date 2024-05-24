/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser, selectUser } from "./userSlice";
import Loader from "../../ui/Loader";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    dispatch(loginUser(loginData))
      .unwrap()
      .then(() => {
        location.state ? navigate(location.state.pathname) : navigate("/");
      });
  };
  return (
    <div className="flex flex-col gap-[1rem] items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[30rem] text-[1.4rem] flex flex-col gap-[3rem]"
      >
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="email">Email:</label>
          <input
            {...register("email", {
              required: "Please enter your email.",
            })}
            className="p-[1rem] bg-slate-100 rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            formNoValidate={true}
          />
          {errors.email && (
            <p className=" text-red-400 font-400 text-right text-[12px]">
              {errors.email_deneme.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="email">Password:</label>
          <input
            {...register("password", {
              required: "Please enter your password.",
            })}
            className="p-[1rem] bg-slate-100 rounded-md"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className=" text-red-400 font-400 text-right text-[12px]">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="w-[100%]">
          <button className="bg-[#23a6f0] text-[1.6rem] uppercase py-[1.5rem] rounded-md text-white w-[100%]">
            {useSelector(selectUser).isLoading ? <Loader /> : "Login"}
          </button>
        </div>
      </form>
      <p>
        Don't have an account yet?{" "}
        <Link className="text-[#23a6f0] font-[500]" to="/signup">
          Sign up
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
