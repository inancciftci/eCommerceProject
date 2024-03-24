import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsBySellCount,
  selectBestSellers,
} from "../features/products/productsSlice";
import ProductCard from "../features/products/ProductCard";
import { useEffect } from "react";
import MiniLoader from "./MiniLoader";

export default function FeaturedProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsBySellCount());
  }, [dispatch]);
  const featuredProducts = useSelector(selectBestSellers);
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-[3rem] gap-[1rem]">
        <h4 className="font-[300]">Featured Products</h4>
        <h3 className="uppercase">Bestseller Products</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>
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
    </>
  );
}
