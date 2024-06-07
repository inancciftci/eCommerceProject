import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <section className="container">
      <div className="flex flex-col gap-[1rem]">
        <div className="success-animation flex flex-col justify-center items-center">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <div className="flex flex-col justify-center items-center gap-[1rem] mt-[3rem]">
            <h6 className="uppercase font-[100] text-[3rem]">Thank you</h6>
            <h5 className="uppercase font-[300] text-[2.5rem] text-blue-500">
              Your order is confirmed
            </h5>
            <p className="text-[2rem] font-[300]">
              You can view your order history on{" "}
              <Link className="underline text-[2rem] uppercase" to={"/account"}>
                Account
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
