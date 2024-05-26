import { useDispatch, useSelector } from "react-redux";
import { globalLoading, selectAllCategories } from "../../app/globalSlice";
import MiniLoader from "../../ui/MiniLoader";
import BreadCrumbs from "../../ui/BreadCrumbs";
import ShopCategoryCard from "../../features/products/ShopCategoryCard";
import {
  fetchMoreProducts,
  fetchProducts,
  selectActivePage,
  selectAllProducts,
  selectLoadingState,
  selectProductTotal,
} from "../../features/products/productsSlice";
import ProductCard from "../../features/products/ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const ShopPage = () => {
  const dispatch = useDispatch();
  const productsLoading = useSelector(selectLoadingState);
  const categories = useSelector(selectAllCategories);
  const activePage = useSelector(selectActivePage);
  const totalProducts = useSelector(selectProductTotal);
  const products = useSelector(selectAllProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = Object.fromEntries([...searchParams]);
  const filter = searchParams.get("filter");
  const currentURL = window.location.href.split("shop");
  let urlToFetch;
  if (currentURL.length >= 2) {
    urlToFetch = currentURL[1];
  }
  useEffect(() => {
    if (urlToFetch) {
      dispatch(fetchProducts(urlToFetch));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, urlToFetch]);

  const topCategories = !categories.length
    ? null
    : categories
        .map((category) => category)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);
  const isLoading = useSelector(globalLoading);

  const paramHandler = (e) => {
    const { name, value } = e.target;
    console.log(value);
    console.log(currentParams);
    const newParams = { ...currentParams, [name]: value };
    setSearchParams(newParams);
  };
  return (
    <section>
      <div className="bg-[#FAFAFA] ">
        <div className="container py-[2rem]">
          <div className="inline-block">
            <BreadCrumbs topPage={"/"} currentPage={"shop"} />
          </div>

          <div className="flex flex-wrap flex-1 justify-between py-[2rem] items-center">
            {isLoading ? (
              <div className="text-center w-[100%]">
                <MiniLoader />
              </div>
            ) : (
              topCategories?.map((category) => (
                <ShopCategoryCard key={category.id} category={category} />
              ))
            )}
          </div>
        </div>
      </div>
      <div className="container py-[2rem]">
        <div
          id="product-filters"
          className="flex items-center justify-between pb-[2rem]"
        >
          <p className="font-[400]">Total products listed: {products.length}</p>
          <div>
            <input
              className="border-[1px] border-[slate-100] p-[1rem] text-[1.4rem] rounded-[5rem]"
              type="text"
              name="filter"
              onChange={paramHandler}
              value={filter || ""}
              placeholder="enter a filter"
            />
          </div>
          <div className="flex items-center gap-[5rem]">
            <div className="flex flex-col justify-center items-center">
              <span className="font-[100] uppercase  text-[1.4rem]">Price</span>
              <div className="flex gap-[0.5rem] items-center">
                <button
                  onClick={paramHandler}
                  className={
                    currentParams.sort == "price:asc"
                      ? "border-[1px] bg-slate-500 px-[1rem] py-[0.5rem] rounded-[50%] text-[1.6rem] text-white"
                      : "border-[1px] px-[1rem] py-[0.5rem] rounded-[50%] text-[1.6rem] bg-slate-300 text-white"
                  }
                  name="sort"
                  value={"price:asc"}
                >
                  ↑
                </button>
                <button
                  onClick={paramHandler}
                  className={
                    currentParams.sort == "price:desc"
                      ? "border-[1px] bg-slate-500 px-[1rem] py-[0.5rem] rounded-[50%] text-[1.6rem] text-white"
                      : "border-[1px] px-[1rem] py-[0.5rem] rounded-[50%] text-[1.6rem] bg-slate-300 text-white"
                  }
                  name="sort"
                  value="price:desc"
                >
                  ↓
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-[500] text-[1.4rem]">Rating</span>
              <div className="flex gap-[0.5rem] items-center">
                <button
                  onClick={paramHandler}
                  className={
                    currentParams.sort == "rating:asc"
                      ? "border-[1px] bg-slate-500 px-[1rem] py-[0.5rem] rounded-[50%] text-[1.6rem] text-white"
                      : "border-[1px] px-[1rem] py-[0.5rem] rounded-[50%] text-[1.6rem] bg-slate-300 text-white"
                  }
                  name="sort"
                  value={"rating:asc"}
                >
                  ↑
                </button>
                <button
                  onClick={paramHandler}
                  className={
                    currentParams.sort == "rating:desc"
                      ? "border-[1px] bg-slate-500 px-[1rem] py-[0.5rem] rounded-[50%] text-[1.6rem] text-white"
                      : "border-[1px] px-[1rem] py-[0.5rem] rounded-[50%] text-[1.6rem] bg-slate-300 text-white"
                  }
                  name="sort"
                  value="rating:desc"
                >
                  ↓
                </button>
              </div>
            </div>
          </div>
        </div>
        {productsLoading && !products.length ? (
          <MiniLoader />
        ) : (
          <InfiniteScroll
            dataLength={activePage * 24}
            next={() => {
              dispatch(
                fetchMoreProducts({
                  offset: activePage * 24,
                  params: urlToFetch,
                })
              );
            }}
            hasMore={activePage * 24 < totalProducts ? true : false}
            loader={<MiniLoader />}
            className="flex gap-[3rem] w-[100%] flex-wrap justify-between max-md:px-[0.5rem]"
          >
            {products.length < 1 ? (
              <div className="flex flex-col justify-center items-center text-center w-[100%] min-h-[15rem] bg-red-300 text-white">
                <p className="text-center text-[2.4rem]">
                  This category has no products. Please chose another category.
                </p>
              </div>
            ) : null}
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </section>
  );
};

export default ShopPage;
