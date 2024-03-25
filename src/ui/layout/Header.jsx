import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderMobile from "../HeaderMobile";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/authentication/userSlice";
import LoginRegister from "../LoginRegister";
import UserAvatar from "../../features/authentication/UserAvatar";

const Header = () => {
  const user = useSelector(selectUser).token;
  const [showMenu, setShowMenu] = useState(false);
  const menuToggle = () => {
    setShowMenu(!showMenu);
  };
  const location = useLocation();
  useEffect(() => {
    setShowMenu(false);
  }, [location]);
  return (
    <header>
      <div className="container mx-auto py-[2rem] flex max-md:hidden">
        <div className="flex justify-between items-center gap-[3rem] w-[100%] max-md:hidden">
          <Link to="/" className="text-[2.4rem] font-[700]">
            Bandage
          </Link>
          <nav className="flex items-center gap-[3rem] justify-between w-[100%]">
            <div className="flex gap-[2rem]">
              <Link to="/" className="font-[500]">
                Home
              </Link>
              <Link to="/shop" className="font-[500]">
                Shop
              </Link>
              <Link to="/about" className="font-[500]">
                About
              </Link>
              <Link to="/team" className="font-[500]">
                Team
              </Link>
              <Link to="/contact" className="font-[500]">
                Contact
              </Link>
            </div>
            <div>
              <ul className="flex items-center gap-[2rem] text-[#252B42]">
                <li>{!user ? <LoginRegister /> : <UserAvatar />}</li>
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
          </nav>
        </div>
      </div>
      <HeaderMobile menuToggle={menuToggle} showMenu={showMenu} />
    </header>
  );
};

export default Header;
