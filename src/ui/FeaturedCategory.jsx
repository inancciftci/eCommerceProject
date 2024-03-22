/* eslint-disable react/no-unescaped-entities */
import CategoryCard from "./CategoryCard";

const FeaturedCategory = () => {
  return (
    <div className="my-[3rem] max-md:px-[1rem] container mx-auto">
      <div className="flex flex-col items-center justify-center mb-[3rem] ">
        <h2 className="uppercase">Editor's Pick</h2>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="flex flex-wrap justify-between gap-[3rem] max-sm:gap-[1rem]">
        <div className="max-sm:basis-[40%] max-md:basis-[35%] basis-2/5 flex-1">
          <CategoryCard />
        </div>
        <div className="max-sm:basis-[40%] max-md:basis-[60%] basis-1/5 flex-1 bg-black">
          <CategoryCard />
        </div>
        <div className="max-md:flex-row basis-1/5 flex-1 flex flex-col gap-[3rem] max-sm:gap-[1rem]">
          <div className="bg-black max-sm:flex-1 max-md:basis-[60%]">
            <CategoryCard />
          </div>
          <div className="bg-black max-sm:flex-1 max-md:basis-[35%]">
            <CategoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
