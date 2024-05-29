import { useSelector } from "react-redux";
import { selectUser } from "../authentication/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { selectCartItems } from "./cartSlice";
import CartItem from "./CartItem";
import BestSellers from "../products/BestSellers";

const CartPage = () => {
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const productsTotal = cartItems.reduce(
    (acc, product) => acc + product.quantity * product.product.price,
    0
  );
  const shippingPrice = 19.99;
  const finalTotal =
    cartItems?.length > 0
      ? productsTotal > 150
        ? productsTotal
        : productsTotal + shippingPrice
      : 0;

  const buttonClickHandler = () => {
    if (cartItems?.length > 0) {
      navigate("/checkout");
    }
  };

  return (
    <section className="container max-md:pr-0 max-md:pl-0 max-md:max-w-[100%] flex gap-[1rem] min-h-[45rem]">
      <div className="w-[70%] flex flex-col gap-[1rem] max-md:w-[100%] max-md:px-[1rem]">
        {!user.email && (
          <div className="bg-slate-200 inline-block px-[1rem] py-[0.5rem] rounded-sm">
            <h5 className="font-[400] text-[1.6rem]">
              <Link
                className="text-[1.6rem] font-[500] text-blue-700 underline"
                to="/login"
              >
                Sign In
              </Link>{" "}
              for a better shopping experience.
            </h5>
          </div>
        )}
        {!(cartItems.length < 1)
          ? cartItems.map((item) => (
              <CartItem key={item.product.id} product={item} />
            ))
          : null}

        <h3 className="mb-[-3rem] text-right max-md:text-center">
          You may {cartItems?.length < 1 ? "" : "also"} like these 👇{" "}
        </h3>
        <BestSellers />
      </div>

      <div className="w-[30%] h-[10rem] sticky top-[1rem] flex flex-col gap-[1rem] items-center max-md:hidden">
        <button
          onClick={buttonClickHandler}
          className={`bg-blue-500 text-white font-[500] w-[80%] flex justify-center items-center text-[1.6rem] px-[2rem] py-[1rem] rounded-md flex gap-[1rem] items-center ${cartItems?.length < 1 ? "disabled bg-slate-500 cursor-not-allowed" : null} `}
        >
          <span>Check out</span> <i className="fa-solid fa-chevron-right"></i>
        </button>
        <div
          className={`w-[80%] flex flex-col gap-[1.5rem] border-[1px] rounded-md border-slate-300 p-[1rem] ${cartItems?.length < 1 ? "blur-[5px]" : null}`}
        >
          <h5>Order Summary</h5>

          <div className={`flex justify-between text-[1.4rem] `}>
            <span className="font-[300] text-slate-500">Products Total</span>
            <span className="font-[500]">{productsTotal.toFixed(2)} ₺</span>
          </div>
          <div className="flex justify-between text-[1.4rem]">
            <span className="font-[300] text-slate-500 ">Shipping Total</span>
            {productsTotal > 150 ? (
              <span className="font-[500] line-through text-red-500">
                {shippingPrice} ₺
              </span>
            ) : (
              <span className="font-[500]">{shippingPrice} ₺</span>
            )}
          </div>
          {productsTotal > 150 ? (
            <>
              <hr />
              <div className="flex justify-between items-center text-[1.4rem]">
                <span className="w-[60%] font-[300] text-slate-500">
                  Free shipping for orders above 150 TL
                </span>
                <span className="font-[500]">{shippingPrice} ₺</span>
              </div>
            </>
          ) : null}
          <hr />
          <div className="flex justify-between text-[1.4rem]">
            <span className="font-[300] text-slate-500">Total</span>
            <span className="font-[500]">{finalTotal.toFixed(2)} ₺</span>
          </div>
        </div>

        <button
          className={`bg-blue-500 text-white font-[500] w-[80%] flex justify-center items-center text-[1.6rem] px-[2rem] py-[1rem] rounded-md flex gap-[1rem] items-center ${cartItems?.length < 1 ? "disabled bg-slate-500 cursor-not-allowed" : null} `}
        >
          <span>Check out</span> <i className="fa-solid fa-chevron-right"></i>
        </button>
        <p
          className={`${cartItems?.length < 1 ? "visible text-red-400" : "hidden"}`}
        >
          * You don't have any products in your cart.
        </p>
      </div>
      <div className="hidden max-md:flex flex-col gap-[1.5rem] justify-between fixed bottom-0 bg-blue-500 min-w-[100%] px-[2rem] py-[2rem] border-t-[1px] border-slate-200">
        <p
          className={`${cartItems?.length < 1 ? "text-red-200 font-[400] text-right" : "hidden"}`}
        >
          * You don't have any products in your cart.
        </p>
        <div className="flex justify-between">
          <div className="flex text-white w-[50%] items-center gap-[2rem]">
            <div>
              <i className="fa-solid fa-arrow-down text-[2rem] text-slate-300"></i>
            </div>
            <div>
              <p className=" text-slate-200">Total</p>
              <p className="font-bold">{finalTotal.toFixed(2)} TL</p>
            </div>
          </div>
          <div>
            <Link
              to={"/checkout"}
              className={`bg-white text-blue-500 font-[500] text-[1.6rem]
          px-[2rem] py-[1rem] rounded-md flex gap-[1rem] items-center justify-center w-[20rem] ${cartItems?.length < 1 ? "disabled blur-[2px] cursor-not-allowed" : null}`}
            >
              <span>Check out</span>{" "}
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
        <p
          className={`${finalTotal < 150 && cartItems?.length > 0 ? "text-[1rem] text-white" : "hidden"}`}
        >
          *Shipping fee included (19.99 TL)
        </p>
      </div>
    </section>
  );
};

export default CartPage;
