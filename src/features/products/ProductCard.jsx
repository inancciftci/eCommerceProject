/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllCategories } from "../../app/globalSlice";
import { scrollTop, trToEn } from "../helperutils";

export default function ProductCard({ product }) {
  const categories = useSelector(selectAllCategories);
  const currentCategory = categories.find(
    (item) => item.id === product.category_id
  );
  const categoryPath = currentCategory?.code.split(":");
  return (
    <div className="bg-[#fffff] flex flex-col flex-auto w-[25rem] max-sm:w-[17rem] rounded-b-[1rem] overflow-hidden shadow-lg">
      <div id="img-box" className="max-h-[35rem] relative overflow-hidden">
        <img
          className=" object-cover max-h-[35rem] object-top w-[100%] rounded-t-[1rem]"
          src={product.images[0]?.url}
          alt=""
        />

        <div className="absolute flex gap-[1rem] bottom-[1rem] left-[50%] translate-x-[-50%] translate-y-[-10%]">
          <button className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center  hover:bg-[#252b42] hover:text-white duration-200">
            <i className="fa-solid fa-heart"></i>
          </button>
          <button className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center hover:bg-[#252b42] hover:text-white duration-200">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center hover:bg-[#252b42] hover:text-white duration-200">
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] bg-[#FAFAFA] flex-1 p-[1rem] rounded-b-[1rem]">
        {categoryPath && currentCategory ? (
          <Link
            onClick={scrollTop}
            className=" text-slate-500 text-[1.4rem] font-[300]"
            to={`/shop/${categoryPath[0]}/${trToEn(categoryPath[1])}`}
          >
            {`${currentCategory?.code[0] === "k" ? "Kadın" : "Erkek"} ${
              currentCategory?.title
            } `}
          </Link>
        ) : (
          "Waiting for the API"
        )}
        <div className="flex flex-col gap-[1rem]">
          <Link
            onClick={scrollTop}
            className="flex flex-col gap-[1rem]"
            to={`/product/${currentCategory?.title}/${product?.id}/${product?.name}`}
          >
            <h5>{product?.name}</h5>

            <span className="flex gap-[0.5rem] text-slate-500 font-[300] items-center">
              <i className="fa-regular fa-star text-yellow-600"></i>
              {product?.rating} out of 5
            </span>
          </Link>
          <p>
            We focus on ergonomics and meeting you where you work. Its only a
            keystroke away.
          </p>
          <div className="flex gap-[1rem]">
            <h5 className="text-[#23856d] font-bold">{product?.price} ₺</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
