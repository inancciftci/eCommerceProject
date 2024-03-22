import ProductCard from "../features/products/ProductCard";

export default function FeaturedProducts() {
  const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="my-[3rem] container mx-auto">
      <div className="flex flex-col items-center justify-center mb-[3rem] gap-[1rem]">
        <h4 className="font-[300]">Featured Products</h4>
        <h3 className="uppercase">Bestseller Products</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="flex justify-between flex-wrap gap-[3rem]">
        {dummyArray.map((e) => (
          <ProductCard key={e} />
        ))}
      </div>
    </div>
  );
}
