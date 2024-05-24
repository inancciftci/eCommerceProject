/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories } from "../../app/globalSlice";
import {
  decrementQuantity,
  deleteProduct,
  incrementQuantity,
} from "./cartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const category = categories.find(
    (item) => item.id === product.product.category_id,
  );
  const quantityHandler = (e) => {
    if (e.target.name === "+") {
      dispatch(incrementQuantity(product));
      console.log("increment");
    }
    if (e.target.name === "-") {
      dispatch(decrementQuantity(product));
      console.log("decrement");
    }
  };

  const handleDeleteProduct = (product) => {
    dispatch(deleteProduct(product));
  };
  return (
    <div className="flex gap-[1.5rem] items-center border-[1px] p-[1rem]">
      <div className="h-[10rem] aspect-square">
        <img
          src={product.product.images[0].url}
          alt=""
          className="object-cover w-[100%] max-h-[10rem]"
        />
      </div>
      <div className="w-[100%] flex justify-between">
        <div className=" flex flex-col gap-[1rem] ">
          <p>
            <span className="font-[500] text-[1.4rem]">{category?.title}</span>
            <span className="ml-[0.5rem] font-[300] text-[1.4rem]">
              {product?.product.name}
            </span>
          </p>
          <p className="text-slate-400">
            <i className="fa-solid fa-truck-fast mr-[0.5rem]"></i>
            Estimated Shipping Time: in 2 days
          </p>
        </div>
        <div className="flex">
          <button onClick={quantityHandler} name="-" className="counter-button">
            -
          </button>
          <input
            className="counter-content"
            type="text"
            pattern="[0-9]*"
            value={product.quantity}
          />
          <button onClick={quantityHandler} name="+" className="counter-button">
            +
          </button>
        </div>
        <div className="text-right flex flex-col gap-[0.3rem]">
          <button
            onClick={() => handleDeleteProduct(product)}
            className="text-[1rem] font-[300] text-slate-400"
          >
            <i className="fa-solid fa-trash-can mr-[0.3rem]"></i>Remove Item
          </button>
          <h5 className="text-[#6074c2]">
            {(product.product.price * product.quantity).toFixed(2)} TL
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
