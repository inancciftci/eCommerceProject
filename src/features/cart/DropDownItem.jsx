import React from "react";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../../app/globalSlice";

const DropDownItem = ({ product }) => {
  const categories = useSelector(selectAllCategories);
  const category = categories.find(
    (item) => item.id === product.product.category_id
  );

  return (
    <>
      <div className="flex gap-[1rem] items-center h-[10rem]">
        <div className="w-[25%]">
          <img
            className="object-cover object-top h-[9rem] w-[100%]"
            src={product.product.images[0].url}
            alt="product-image"
          />
        </div>
        <div className="w-[80%] flex flex-col gap-[1rem] z-50">
          <div className="flex gap-[1rem] items-center">
            <p>
              <span className="font-[500] text-[1.4rem]">
                {category?.title}
              </span>
              <span className="ml-[0.5rem] font-[300] text-[1.4rem]">
                {product.product.name}
              </span>
            </p>
          </div>
          <p className="text-slate-500">
            Quantity: <span>{product.quantity}</span>
          </p>
          <h5 className="font-[500] text-[1.6rem]">
            {product.product.price} ₺
          </h5>
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-center text-slate-300 ">
        {"<<"}
        <hr className="w-[75%] my-[1rem]" />
        {">>"}
      </div>
    </>
  );
};

export default DropDownItem;
