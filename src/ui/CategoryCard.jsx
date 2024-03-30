import { Link } from "react-router-dom";
import { scrollLower } from "../features/helperutils";

/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
  return (
    <div className="relative flex h-[100%]">
      <img className="w-[100%] rounded-md object-cover" src={category?.img} />
      <Link
        name="category"
        onClick={scrollLower}
        to={`/shop?category=${category?.id}`}
        // to={`/shop/${trToEn(category.gender)}/${trToEn(
        //   category.title.toLowerCase()
        // )}`}
        className="absolute bottom-10 left-10 text-[1.6rem] bg-white px-[5rem] py-[1rem]"
      >
        {category?.title}
      </Link>
    </div>
  );
};

export default CategoryCard;
