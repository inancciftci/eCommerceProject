import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectAllRoles } from "../../app/globalSlice";
import { registerUser, selectUserLoading } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { fetchRoles } from "../../app/globalSlice";

function SignUpForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoles);
  }, [dispatch]);
  const roles = useSelector(selectAllRoles);
  const isLoading = useSelector(selectUserLoading);
  const navigate = useNavigate();
  const [role, setRole] = useState(3);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm();
  const onSubmit = async (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const storeData = {
      storeName: data.storeName,
      phoneNumber: data.phone,
      taxId: data.tax_no,
      bankAccount: data.bank_account,
    };
    try {
      const response = await dispatch(
        registerUser(role === 2 ? { ...userData, store: storeData } : userData)
      );
      if (response.meta.requestStatus === "fulfilled") {
        toast.success(response.payload.message, { theme: "dark" });
        navigate("/login");
      } else {
        toast.error(response.payload.error, { theme: "dark" });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An unexpected error occurred. Please try again later.", {
        theme: "dark",
      });
    }
  };
  const changeHandler = (e) => {
    setRole(e.target.value);
  };
  return (
    <div className="flex justify-center items-center py-[5rem]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[30rem] text-[1.4rem] flex flex-col gap-[3rem]"
      >
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="">Name</label>
          <input
            className="p-[1rem] bg-slate-100 rounded-md"
            {...register("name", {
              required: "Name is required!",
              minLength: {
                value: 2,
                message: "Must be at least two characters long.",
              },
            })}
            type="text"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className=" text-red-400 font-400 text-right text-[12px]">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="">Email</label>
          <input
            {...register("email", {
              required: "Email is required!",
            })}
            className="p-[1rem] bg-slate-100 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          {errors.name && (
            <p className=" text-red-400 font-400 text-right text-[12px]">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="">Password</label>
          <input
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 8,
                message: "Your password should be between 8-20 characters.",
              },
              maxLength: {
                value: 20,
                message: "Your password should be between 8-20 characters.",
              },
            })}
            className="p-[1rem] bg-slate-100 rounded-md"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="">Confirm password</label>
          <input
            {...register("conf_pass", {
              required: "Password is required!",
              validate: (value) =>
                value === getValues("password") || "Passwords are not matched",
            })}
            className="p-[1rem] bg-slate-100 rounded-md"
            type="password"
            placeholder="Confirm your password"
          />
          {errors.conf_pass && (
            <p className=" text-red-400 font-400 text-right text-[12px]">
              {errors.conf_pass.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[1rem]">
          <label htmlFor="role_id">Select your account type</label>
          <select
            defaultValue={role}
            {...register("role_id", {
              onChange: changeHandler,
            })}
            className="p-[1rem] bg-slate-100 rounded-md"
            {...register("role_id")}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        {role == 2 && (
          <>
            <div className="flex flex-col gap-[1rem]">
              <label htmlFor="">Store Name</label>
              <input
                {...register("storeName", {
                  required: "Store name is required!",
                })}
                className="p-[1rem] bg-slate-100 rounded-md"
                type="text"
                placeholder="Enter your store's name"
              />
              {errors.storeName && (
                <p className=" text-red-400 font-400 text-right text-[12px]">
                  {errors.storeName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[1rem]">
              <label htmlFor="">Phone Number</label>
              <input
                {...register("phone", {
                  required: "Phone number is required!",
                })}
                className="p-[1rem] bg-slate-100 rounded-md"
                type="text"
                placeholder="+90..."
              />
              {errors.phone && (
                <p className=" text-red-400 font-400 text-right text-[12px]">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[1rem]">
              <label htmlFor="">TAX ID</label>
              <input
                {...register("tax_no", {
                  required: "Tax ID is required!",
                })}
                className="p-[1rem] bg-slate-100 rounded-md"
                type="text"
                placeholder="TXXXXVXXXXXX"
              />
              {errors.tax_no && (
                <p className=" text-red-400 font-400 text-right text-[12px]">
                  {errors.tax_no.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[1rem]">
              <label htmlFor="">Bank Account</label>
              <input
                {...register("bank_account", {
                  required: "Bank account is required!",
                })}
                className="p-[1rem] bg-slate-100 rounded-md"
                type="text"
                placeholder="TR...(IBAN)"
              />
              {errors.bank_account && (
                <p className=" text-red-400 font-400 text-right text-[12px]">
                  {errors.bank_account.message}
                </p>
              )}
            </div>
          </>
        )}

        <div className="w-[100%]">
          <button
            disabled={!isValid}
            className={
              !isValid || isLoading
                ? "bg-slate-400 text-[1.6rem] uppercase py-[1.5rem] rounded-md text-white cursor-not-allowed w-[100%]"
                : "bg-[#23a6f0] text-[1.6rem] uppercase py-[1.5rem] rounded-md text-white w-[100%]"
            }
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          {!isValid && (
            <p className="text-left py-[1rem] text-red-400">
              Fill the form before submitting.
            </p>
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUpForm;
