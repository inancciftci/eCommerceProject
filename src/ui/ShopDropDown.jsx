import { useSelector } from "react-redux";
import { scrollLower } from "../features/helperutils";
import { Link } from "react-router-dom";
import { selectAllCategories } from "../app/globalSlice";
import { useState } from "react";

const ShopDropDown = () => {
  const categories = useSelector(selectAllCategories);
  const erkekCategories = categories.filter((e) => e.code[0] === "e");
  const kadinCategoreis = categories.filter((e) => e.code[0] === "k");
  const [showDropdown, setShowDropdown] = useState(false);

  const clickHandler = (e) => {
    scrollLower();
    setShowDropdown(false);
  };
  const dropdownHandler = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="relative">
      <span
        onClick={dropdownHandler}
        className="font-[500] text-[1.4rem] cursor-pointer"
      >
        Shop &#8595;
      </span>
      <div
        className={` ${showDropdown ? `shop-dropdown flex gap-[3.5rem] bg-white shadow-xl p-[1rem] top-[2rem] transition-all ease-in duration-300 absolute rounded-b-[1rem] z-50` : `hidden invisible absolute top-[-5rem] transition-all ease-out duration-300`}`}
      >
        <div>
          <h5 className=" uppercase font-[500] tracking-wider mb-[1rem]">
            Erkek
          </h5>

          <ul className="flex flex-col gap-[0.5rem]">
            {erkekCategories.map((category, i) => (
              <li key={i}>
                <Link
                  className="uppercase font-[300]"
                  onClick={clickHandler}
                  to={`shop?category=${category?.id}`}
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className=" uppercase font-[500] tracking-wider mb-[1rem]">
            Kadın
          </h5>
          <ul className="flex flex-col gap-[0.5rem]">
            {kadinCategoreis.map((category, i) => (
              <li key={i}>
                <Link
                  className="uppercase font-[300]"
                  onClick={clickHandler}
                  to={`shop?category=${category?.id}`}
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopDropDown;
