/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HeaderMobile = ({ showMenu, menuToggle }) => {
  return (
    <div
      id="mobile-menu"
      className="hidden max-md:flex py-[2rem] px-[1rem] justify-between w-[100%] relative"
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
          <Link to="/login">
            <i className="fa-solid fa-user"></i>
          </Link>
        </li>
        <li className="text-[1.4rem] cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
        <li className="text-[1.4rem] cursor-pointer">
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
        <li className="text-[1.4rem] cursor-pointer">
          <i className="fa-solid fa-heart"></i>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMobile;
