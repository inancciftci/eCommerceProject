/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { selectAllCategories } from "../app/globalSlice";
import MiniLoader from "./MiniLoader";

const FeaturedCategory = () => {
  const featuredCategories = useSelector(selectAllCategories);
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-[2rem] mb-[3rem] ">
        <h2 className="uppercase">Editor's Pick</h2>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      {!featuredCategories.length ? (
        <div
          className="w-[100%] h-[30rem] flex justify-center items-center
        ]"
        >
          <MiniLoader />
        </div>
      ) : (
        <div className="my-[3rem] max-md:px-[1rem] container mx-auto">
          <div className="flex flex-wrap justify-between gap-[3rem] max-sm:gap-[1rem]">
            <div className="max-sm:basis-[40%] max-md:basis-[35%] basis-2/5 flex-1 max-h-[60rem]">
              <CategoryCard category={featuredCategories[10]} />
            </div>
            <div className="max-sm:basis-[40%] max-md:basis-[60%] basis-1/5 flex-1 max-h-[60rem]">
              <CategoryCard category={featuredCategories[8]} />
            </div>
            <div className="max-md:flex-row basis-1/5 flex-1 flex flex-col gap-[3rem] max-sm:gap-[1rem] max-h-[60rem]">
              <div className="bg-black max-sm:flex-1 max-md:basis-[60%]  md:max-h-[30rem]">
                <CategoryCard category={featuredCategories[4]} />
              </div>
              <div className="bg-black max-sm:flex-1 max-md:basis-[35%]  md:max-h-[27rem]">
                <CategoryCard category={featuredCategories[2]} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedCategory;
