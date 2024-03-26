/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { scrollTop, trToEn } from "../helperutils";

const ShopCategoryCard = ({ category }) => {
  return (
    <div className="w-[19%] ">
      <img
        src={category?.img}
        alt=""
        className="object-cover w-[100%] h-[30rem] rounded-t-md"
      />
      <div className="flex justify-between items-center w-[100%] border-[1px] p-[0.69rem] rounded-b-md bg-blue-100">
        <div className="flex flex-col gap-[0.1rem]">
          <span className="text-[1.2rem] text-slate-400 font-[400]">
            {category?.code[0] === "k" ? "Kadın" : "Erkek"}
          </span>
          <span className="text-[1.6rem] font-[500]">{category?.title}</span>
        </div>
        <div>
          <Link
            onClick={scrollTop}
            className="uppercase font-[300]"
            to={`/shop/${trToEn(category?.gender)}/${trToEn(
              category?.title.toLowerCase()
            )}`}
          >
            &gt;&gt; View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCategoryCard;
