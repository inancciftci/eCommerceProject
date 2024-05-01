import { useSelector } from "react-redux";
import { selectUser } from "../authentication/userSlice";
import { Link } from "react-router-dom";
import { selectCartItems } from "./cartSlice";
import CartItem from "./CartItem";

const CartPage = () => {
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  const productsTotal = cartItems.reduce(
    (acc, product) => acc + product.quantity * product.product.price,
    0
  );
  const shippingPrice = 19.99;
  const finalTotal =
    productsTotal > 150 ? productsTotal : productsTotal + shippingPrice;

  return (
    <section className="container flex gap-[1rem] min-h-[45rem]">
      <div className="w-[70%] flex flex-col gap-[1rem]">
        {!user && (
          <div className="bg-slate-200 inline-block px-[1rem] py-[0.5rem] rounded-sm">
            <h5 className="font-[400] text-[1.6rem]">
              <Link
                className="text-[1.6rem] font-[500] text-blue-700 underline"
                to="/login"
              >
                Sign In
              </Link>{" "}
              to have a better shopping experience
            </h5>
          </div>
        )}
        {!(cartItems.length < 1)
          ? cartItems.map((item) => (
              <CartItem key={item.product.id} product={item} />
            ))
          : null}
      </div>
      <div className="w-[30%] h-[10rem] sticky top-[1rem] flex flex-col gap-[1rem] items-center">
        <button className="bg-[#252B42] text-white font-[500] text-[1.6rem] px-[2rem] py-[1rem] rounded-md flex gap-[1rem] items-center">
          <span>Check out</span> <i className="fa-solid fa-chevron-right"></i>
        </button>
        <div className="w-[70%] flex flex-col gap-[1.5rem] border-[1px] rounded-md border-slate-300 p-[1rem]">
          <h5>Order Summary</h5>
          <div className="flex justify-between text-[1.4rem]">
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

        <button className="bg-[#252B42] text-white font-[500] text-[1.6rem] px-[2rem] py-[1rem] rounded-md flex gap-[1rem] items-center">
          <span>Check out</span> <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default CartPage;
