import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  selecetCurrentProduct,
} from "../../features/products/productsSlice";
import { useEffect } from "react";
import MiniLoader from "../MiniLoader";
import BestSellers from "../../features/products/BestSellers";
import Accordion from "../Accordion";
import { addProduct } from "../../features/cart/cartSlice";

export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selecetCurrentProduct);
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);

  const addToCartHandler = (product) => {
    dispatch(addProduct(product));
  };

  const stars = Math.ceil(product?.rating);
  const starsComp = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starsComp.push(
        <i
          key={starsComp.length}
          className="fa-solid fa-star text-[#F3CD03] text-[1.4rem]"
        ></i>
      );
    } else {
      starsComp.push(
        <i
          key={starsComp.length}
          className="fa-regular fa-star text-[#F3CD03] text-[1.4rem]"
        ></i>
      );
    }
  }
  const colorOptions = ["#23A6F0", "#252B42"];
  if (product.id === 0) {
    return <MiniLoader />;
  } else {
    return (
      <div>
        <div className="bg-[#FAFAFA]">
          <div className="container mx-auto">
            <div className="inline-block pt-[2rem]">
              <div className="flex gap-[1rem] items-center text-white bg-[rgba(0,0,0,0.4)] p-[1rem] rounded-md">
                <Link className="text-[1.6rem] uppercase font-[500]" to="/">
                  Home
                </Link>
                <i className="fa-solid fa-chevron-right text-[1.4rem] text-[#BDBDBD]"></i>
                <Link className="text-[1.6rem] uppercase font-[500]" to="/shop">
                  Shop
                </Link>
                <span className="text-[1.6rem]  cursor-default text-slate-200">
                  &gt;
                </span>
                <span className="text-[1.6rem]  text-slate-300 cursor-default uppercase font-[500]">
                  {product?.name}
                </span>
              </div>
            </div>

            <div className="flex gap-[3rem] py-[2rem] max-md:flex-col">
              <div className="flex-1">
                <div>
                  <img
                    src={product?.images[0].url}
                    className="w-[100%] aspect-square object-cover object-top"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-[2rem] px-[2rem] max-md:px-0">
                <div>
                  <h4 className="font-bold">{product?.name}</h4>
                  <div className="flex items-center gap-[0.5rem]">
                    {starsComp.map((e) => e)}
                    <p className="ml-[1rem] font-[400]">{product?.rating}</p>
                  </div>
                </div>

                <h5 className="max-md:hidden text-[2.4rem] font-bold">
                  ₺{product?.price}
                </h5>
                <div className="flex gap-[1rem]">
                  <h6 className="font-[500]">Availability: </h6>
                  <h6 className="text-[#23A6F0] font-[500]">In Stock</h6>
                </div>
                <p>{product?.description}</p>
                <hr className="my-[3rem] max-md:hidden" />
                <div className="flex gap-[1rem] max-md:hidden">
                  {colorOptions.map((e, i) => (
                    <div
                      key={i}
                      className={
                        "w-[3rem] h-[3rem] rounded-[50%] bg-[" + e + "]"
                      }
                    ></div>
                  ))}
                </div>
                <div className="flex items-center gap-[1.5rem] max-md:hidden">
                  <button className="text-[1.4rem] px-[2.5rem] py-[1.5rem] rounded-[0.5rem] bg-[#23A6F0] text-white">
                    <i className="fa-solid fa-cart-shopping"></i> Add to cart
                  </button>
                  <button className="bg-white border-[1px] border-[solid] border-[black] w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center  hover:bg-[#252b42] hover:text-white duration-200">
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
                <div className="hidden z-[1000] max-md:flex justify-between items-center fixed bottom-0 left-0 bg-white min-w-[100%] px-[2rem] py-[2rem] border-t-[1px] border-slate-300">
                  <div className="flex flex-col">
                    <p className="text-[1.1rem]">
                      🔥 Currently{" "}
                      <span className="text-blue-400 font-bold">
                        {Math.floor(Math.random() * 250)}
                      </span>{" "}
                      people on this page
                    </p>
                    <h5 className="text-[2rem] font-bold">
                      {product?.price} TL
                    </h5>
                  </div>

                  <button
                    onClick={() => addToCartHandler(product)}
                    className="text-[1.4rem] px-[2.5rem] py-[1.5rem] rounded-[0.5rem] bg-[#23A6F0] text-white"
                  >
                    <i className="fa-solid fa-cart-shopping"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col my-[3rem]">
          <div className="flex items-center justify-center gap-[3rem]">
            <Link className="font-bold text-[#737373]">Description</Link>
            <Link className="font-bold text-[#737373]">
              Additional Information
            </Link>
            <Link className="font-bold text-[#737373]">Reviews (0)</Link>
          </div>
          <hr className="my-[3rem]" />
          <div className="flex justify-between gap-[2rem] max-md:flex-col">
            <div className="flex-1">
              <img
                className="object-cover w-[100%]"
                src="/product-page/product-desc-1.png"
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col gap-[1rem] justify-between">
              <h3>the quick fox jumps over</h3>
              <p className="text-[1.6rem]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-[1.6rem]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-[1.6rem]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-between max-md:hidden">
              <h3>the quick fox jumps over</h3>

              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <hr />
              <h3>the quick fox jumps over</h3>
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa] py-[2rem]">
          <div className="container mx-auto flex flex-col">
            <h3 className="uppercase">bestseller products</h3>
            <hr className="my-[2rem]" />
            <div className="w-[100%] flex flex-wrap gap-[2rem]">
              <BestSellers />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
