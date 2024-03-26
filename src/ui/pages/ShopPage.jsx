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
  selectProductTotal,
} from "../../features/products/productsSlice";
import ProductCard from "../../features/products/ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const ShopPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const activePage = useSelector(selectActivePage);
  const totalProducts = useSelector(selectProductTotal);
  const products = useSelector(selectAllProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const currentURL = window.location.href.split("shop");
  let urlToFetch;
  if (currentURL.length >= 2) {
    urlToFetch = currentURL[1];
  }
  // console.log(urlToFetch);
  useEffect(() => {
    if (urlToFetch) {
      // console.log("we will get the products depending on url");
      dispatch(fetchProducts(urlToFetch));
    } else {
      dispatch(fetchProducts());
      // console.log("This will fetch products as default");
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
    const currentParams = Object.fromEntries([...searchParams]);
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
          <div className="flex gap-[1rem]">
            <input
              className="border-[1px] border-[slate-100] p-[1rem] text-[1.4rem] rounded-[5rem]"
              type="text"
              name="filter"
              onChange={paramHandler}
              value={filter || ""}
              placeholder="enter a filter"
            />
            <button
              onClick={paramHandler}
              className="bg-[#23A6F0] rounded-[3rem] text-white p-[1rem]"
              name="sort"
              value={"price:asc"}
            >
              price asc
            </button>
            <button
              onClick={paramHandler}
              className="bg-[#23A6F0] rounded-[3rem] text-white p-[1rem]"
              name="sort"
              value={"price:desc"}
            >
              price desc
            </button>
            <button
              onClick={paramHandler}
              className="bg-[#23A6F0] rounded-[3rem] text-white p-[1rem]"
              name="sort"
              value="rating:desc"
            >
              rating
            </button>
          </div>
        </div>
        {!products.length ? (
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
              // console.log(urlToFetch);
            }}
            hasMore={activePage * 24 < totalProducts ? true : false}
            loader={<MiniLoader />}
            className="flex gap-[3rem] w-[100%] flex-wrap justify-between max-sm:p-[3rem]"
          >
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
