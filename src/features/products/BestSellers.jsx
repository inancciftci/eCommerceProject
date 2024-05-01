import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsBySellCount, selectBestSellers } from "./productsSlice";
import ProductCard from "./ProductCard";
import MiniLoader from "../../ui/MiniLoader";

const BestSellers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsBySellCount());
  }, [dispatch]);
  const featuredProducts = useSelector(selectBestSellers);

  return (
    <div>
      {!featuredProducts.length ? (
        <div
          className="w-[100%] h-[30rem] flex justify-center items-center
      ]"
        >
          <MiniLoader />
        </div>
      ) : (
        <div className="my-[3rem] container mx-auto">
          <div className="flex gap-[3rem] flex-wrap justify-between max-sm:p-[3rem]">
            {featuredProducts &&
              featuredProducts?.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BestSellers;
