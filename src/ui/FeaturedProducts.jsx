import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsBySellCount,
  selectBestSellers,
} from "../features/products/productsSlice";
import ProductCard from "../features/products/ProductCard";
import { useEffect } from "react";
import MiniLoader from "./MiniLoader";
import BestSellers from "../features/products/BestSellers";

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
      <BestSellers />
    </>
  );
}
