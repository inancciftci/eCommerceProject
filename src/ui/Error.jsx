import { useNavigate, useRouteError } from "react-router-dom";
import Header from "./layout/Header";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <Header />
      <div className="h-[90vh] flex flex-col justify-center items-center">
        <h1 className="text-[3rem]">Something went wrong.</h1>
        <p>{error.data || error.message}</p>
        <button
          className="p-[1rem] bg-red-300 rounded-md mt-[3rem]"
          onClick={() => navigate(-1)}
        >
          {" "}
          <i className="fa-solid fa-arrow-left"></i> Go back
        </button>
      </div>
    </div>
  );
};

export default Error;
