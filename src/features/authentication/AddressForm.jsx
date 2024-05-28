import { useForm, Controller } from "react-hook-form";
import { saveAddress } from "./addressSlice";
import { useDispatch } from "react-redux";

const cities = ["Istanbul", "Ankara", "Izmir", "Bursa"];

const AddressForm = ({ showForm, setShowForm }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(saveAddress(data));
    setShowForm(false);
  };

  return (
    <div
      className={`${!showForm ? "hidden" : null} address-form fixed top-0 left-0 bg-black bg-opacity-[0.8] min-w-[100vw] min-h-[100vh] z-[13000]`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="z-[13001] max-w-md mx-auto text-[1.4rem] border-[1px] rounded-[10px] shadow-xl min-w-[450px] bg-slate-100 border-slate-300 p-[5rem] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div className="absolute top-[1rem] right-[2rem]">
          <i
            onClick={() => setShowForm(false)}
            className="fa-solid fa-x cursor-pointer"
          ></i>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Address Title</label>
          <input
            {...register("title", { required: true })}
            className="w-full border rounded py-2 px-3"
          />
          {errors.title && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4 flex gap-[1rem] justify-between">
          <div className="w-[50%]">
            <label className="block mb-1">Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full border rounded py-2 px-3"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="w-[50%]">
            <label className="block mb-1">Surname</label>
            <input
              {...register("surname", { required: true })}
              className="w-full border rounded py-2 px-3"
            />
            {errors.surname && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phone</label>
          <input
            {...register("phone", { required: true })}
            className="w-full border rounded py-2 px-3"
          />
          {errors.phone && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1">City (İl)</label>
          <select
            {...register("city", { required: true })}
            className="w-full border rounded py-2 px-3"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1">District (İlçe)</label>
          <input
            {...register("district", { required: true })}
            className="w-full border rounded py-2 px-3"
          />
          {errors.district && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Neighborhood (Mahalle)</label>
          <input
            {...register("neighborhood", { required: true })}
            className="w-full border rounded py-2 px-3"
          />
          {errors.neighborhood && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Address</label>
          <textarea
            {...register("address", { required: true })}
            className="w-full border rounded py-2 px-3"
          />
          {errors.address && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-[100%] uppercase shadow-lg py-[1rem]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
