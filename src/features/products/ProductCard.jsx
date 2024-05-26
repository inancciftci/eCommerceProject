/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectAllCategories } from "../../app/globalSlice";
import { scrollLower, scrollTop, trToEn } from "../helperutils";
import { addProduct } from "../cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectAllCategories);
  const currentCategory = categories.find(
    (item) => item.id === product.category_id
  );
  const categoryPath = currentCategory?.code.split(":");
  const addToCartHandler = (product) => {
    dispatch(addProduct(product));
  };

  const navigateHandler = () => {
    navigate(
      `/product/${currentCategory?.title}/${product?.id}/${product?.name}`
    );
    scrollTop();
  };

  return (
    <div className="bg-[#fffff] flex flex-col flex-auto w-[25rem] max-sm:w-[40%] max-md:w-[40%] rounded-b-[1rem] overflow-hidden shadow-lg transition-all hover:translate-y-[1rem] cursor-pointer">
      <div id="img-box" className="max-h-[35rem] relative overflow-hidden">
        <img
          onClick={navigateHandler}
          className=" object-cover max-h-[35rem] object-top w-[100%] rounded-t-[1rem]"
          src={product.images[0]?.url}
          alt=""
        />

        <div className="absolute flex gap-[1rem] bottom-[1rem] left-[50%] translate-x-[-50%] translate-y-[-10%]">
          <button className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center  hover:bg-[#252b42] hover:text-white duration-200">
            <i className="fa-solid fa-heart"></i>
          </button>
          <button
            onClick={() => addToCartHandler(product)}
            className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center hover:bg-[#252b42] hover:text-white duration-200"
          >
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
            onClick={scrollLower}
            className=" text-slate-500 text-[1.4rem] font-[300]"
            to={`/shop?category=${currentCategory?.id}`}
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
            className="flex flex-col gap-[1rem] max-md:text-[1.2rem]"
            to={`/product/${currentCategory?.title}/${product?.id}/${product?.name}`}
          >
            <h5 className="max-md:text-[1.4rem]">{product?.name}</h5>
            <span className="flex gap-[0.5rem] text-slate-500 font-[300] items-center max-md:text-[1rem]">
              <i className="fa-regular fa-star text-yellow-600"></i>
              {product?.rating} out of 5
            </span>
            <h5 className="text-[#2b4f88] font-bold">{product?.price} ₺</h5>
          </Link>
          {/* <div className="">
            <p>{product?.description}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
