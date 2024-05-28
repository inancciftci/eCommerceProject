import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveCard } from "./addressSlice";

const CardForm = ({ showCardForm, setShowCardForm }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(saveCard(data));
    setShowCardForm(false);
  };

  const validateFutureDate = (value, type) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const [year, month] =
      type === "year" ? [value, currentMonth] : [currentYear, value];

    if (year > currentYear || (year == currentYear && month > currentMonth)) {
      return true;
    }

    if (year > currentYear) {
      return true;
    }
    return "Expiration date must be in the future";
  };

  return (
    <div
      className={`${!showCardForm ? "hidden" : null} address-form fixed top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-[0.8] z-[15000]`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto border rounded-lg text-[1.4rem] shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-sl bg-slate-100 border-slate-300 p-[3rem]"
      >
        <i
          onClick={() => setShowCardForm(false)}
          className="fa-solid fa-x cursor-pointer absolute top-[1rem] right-[2rem]"
        ></i>
        <div className="mb-4">
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            {...register("card_no", {
              required: "Card number is required",
              pattern: {
                value: /^\d{16}$/,
                message: "Card number must be 16 digits",
              },
            })}
            className="mt-1 p-2 w-full border rounded"
          />
          {errors.card_no && (
            <p className="text-red-600 text-sm">{errors.card_no.message}</p>
          )}
        </div>

        <div className="mb-4 flex gap-[1rem] justify-between">
          <div>
            <label className="block text-gray-700">Expire Month</label>
            <input
              type="text"
              {...register("expire_month", {
                required: "Expire month is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])$/,
                  message: "Month must be 01-12",
                },
                validate: (value) => validateFutureDate(value, "month"),
              })}
              className="mt-1 p-2 w-full border rounded"
            />
            {errors.expire_month && (
              <p className="text-red-600 text-sm">
                {errors.expire_month.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Expire Year</label>
            <input
              type="text"
              {...register("expire_year", {
                required: "Expire year is required",
                pattern: {
                  value: /^\d{4}$/,
                  message: "Year must be 4 digits",
                },
                validate: (value) => validateFutureDate(value, "year"),
              })}
              className="mt-1 p-2 w-full border rounded"
            />
            {errors.expire_year && (
              <p className="text-red-600 text-sm">
                {errors.expire_year.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Name on Card</label>
          <input
            type="text"
            {...register("name_on_card", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z]+ [A-Za-z]+$/,
                message: "Please enter first name and surname",
              },
            })}
            className="mt-1 p-2 w-full border rounded"
          />
          {errors.name_on_card && (
            <p className="text-red-600 text-sm">
              {errors.name_on_card.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CardForm;
