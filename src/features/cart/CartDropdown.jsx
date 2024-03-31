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
        <Link onClick={clickHandler} to="/cart">
          &gt;&gt; Cart Page
        </Link>
        <button onClick={clickHandler}>X</button>
      </div>
    </div>
  );
};

export default CartDropdown;
