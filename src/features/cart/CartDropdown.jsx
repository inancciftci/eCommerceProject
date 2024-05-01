import React, { useState } from "react";
import DropDownItem from "./DropDownItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "./cartSlice";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className="relative">
      <li className="text-[1.4rem] cursor-pointer">
        <i onClick={clickHandler} className="fa-solid fa-cart-shopping"></i>
        <span className="absolute top-[-0.75rem] right-[-0.75rem] bg-[rgba(71,85,105,0.5)] text-white text-[1rem] font-[500] w-[1.3rem] aspect-square rounded-[50%] text-center">
          {cartItems?.length}
        </span>
      </li>
      <div className={`cart-dropdown ${!toggle ? "hidden" : ""} z-10`}>
        {cartItems.length < 1
          ? "There is no products in your cart"
          : cartItems.map((item) => (
              <DropDownItem key={item.product.id} product={item} />
            ))}
        {cartItems.length < 1 ? null : (
          <div className="flex justify-center items-center gap-[1rem]">
            <Link onClick={clickHandler} to="/cart">
              <button className="border-[1px] border-blue-500 text-blue-500 text-center py-[1rem] px-[3rem] rounded-md shadow-md">
                Cart Page
              </button>
            </Link>
            <Link onClick={clickHandler} to="/cart">
              <button className="bg-blue-500 text-white text-center py-[1rem] px-[3rem] rounded-md shadow-md">
                Check out
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
