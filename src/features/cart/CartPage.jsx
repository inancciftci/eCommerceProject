import { useSelector } from "react-redux";
import { selectUser } from "../authentication/userSlice";
import { Link } from "react-router-dom";
import { selectCartItems } from "./cartSlice";
import CartItem from "./CartItem";

const CartPage = () => {
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCartItems);

  return (
    <section className="container flex">
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
      <div className="w-[30%] h-[10rem] sticky top-[1rem]">deneme</div>
    </section>
  );
};

export default CartPage;
