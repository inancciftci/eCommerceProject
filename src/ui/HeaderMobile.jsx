/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems } from "../features/cart/cartSlice";
import { selectUser } from "../features/authentication/userSlice";
import UserAvatar from "../features/authentication/UserAvatar";
import { scrollTop } from "../features/helperutils";

const HeaderMobile = ({ showMenu, menuToggle }) => {
  const cartItems = useSelector(selectCartItems);
  const totalItems = cartItems?.length;
  const user = useSelector(selectUser);
  return (
    <div
      id="mobile-menu"
      className="hidden max-md:flex py-[2rem] px-[1rem] justify-between w-[100%] fixed top-0 z-[5000] bg-[rgba(255,255,255,0.9)]"
    >
      <div
        className={
          showMenu
            ? "   flex flex-col gap-[5rem] absolute top-[6.5rem] left-0 w-[100vw] items-center z-10 bg-[#F6F6F6] py-[3rem]  "
            : " hidden "
        }
      >
        <Link to="/" className="font-[500]">
          Home
        </Link>
        <Link to="/shop" className="font-[500]">
          Shop
        </Link>
        <Link to="/about" className="font-[500]">
          About
        </Link>
        <a href="" className="font-[500]">
          Blog
        </a>
        <Link to="/contact" className="font-[500]">
          Contact
        </Link>
        <a href="" className="font-[500]">
          Pages
        </a>
      </div>
      <div className="flex items-center gap-[2rem] px-[1rem] ">
        <div id="hamburger" className="cursor-pointer" onClick={menuToggle}>
          {showMenu ? (
            <i className="fa-solid fa-x text-[2.4rem]"></i>
          ) : (
            <i className="fa-solid fa-bars text-[2.4rem]"></i>
          )}
        </div>

        <Link to="/" className="text-[2.4rem] font-[700]">
          Bandage
        </Link>
      </div>
      <ul className="flex items-center gap-[2rem] text-[#252B42]">
        <li className="text-[1.4rem] cursor-pointer flex gap-[1rem] items-center">
          {user?.token ? (
            <UserAvatar />
          ) : (
            <Link to="login">
              {" "}
              <i className="fa-solid fa-user"></i>
            </Link>
          )}
        </li>
        <li className="text-[1.4rem] cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
        <li className="text-[1.4rem] cursor-pointer relative">
          <Link onClick={scrollTop} to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="w-[2.2rem] h-[2.2rem] rounded-[50%] flex justify-center items-center absolute bg-[rgba(59,130,246,0.4)] text-white text-[1.2rem] font-bold top-[1rem] left-[0.5rem]">
              {totalItems}
            </div>
          </Link>
        </li>
        <li className="text-[1.4rem] cursor-pointer">
          <i className="fa-solid fa-heart"></i>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMobile;
