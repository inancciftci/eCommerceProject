import { Link } from "react-router-dom";
import ProductCard from "../../features/products/ProductCard";
import Accordion from "../Accordion";

export default function ProductPage() {
  const bestSellerProducts = [1, 2, 3, 4, 5, 6, 7, 8];
  const stars = 4;
  const starsComp = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starsComp.push(
        <i className="fa-solid fa-star text-[#F3CD03] text-[1.4rem]"></i>
      );
    } else {
      starsComp.push(
        <i className="fa-regular fa-star text-[#F3CD03] text-[1.4rem]"></i>
      );
    }
  }
  const colorOptions = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];
  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto">
          <div className="flex gap-[1rem] pt-[2rem] items-center">
            <Link className="font-[500] text-[1.6rem]" to="/">
              Home
            </Link>
            <i className="fa-solid fa-chevron-right text-[1.4rem] text-[#BDBDBD]"></i>
            <Link
              className="text-[1.6rem] font-[500] text-[#BDBDBD]"
              to="/team"
            >
              Team
            </Link>
          </div>
          <div className="flex gap-[3rem] py-[2rem] max-md:flex-col">
            <div className="flex-1">
              <div>
                <img
                  src="/product-page/product-cover-1.jpg"
                  className="w-[100%] object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between gap-[2rem] px-[2rem] max-md:px-0">
              <div>
                <h4 className="font-bold">Floating Phone</h4>
                <div className="flex items-center gap-[0.5rem]">
                  {starsComp.map((e) => e)}
                  <p className="ml-[1rem] font-[400]">10 Reviews</p>
                </div>
              </div>

              <h5 className="text-[2.4rem] font-bold">$1,139.33</h5>
              <div className="flex gap-[1rem]">
                <h6 className="font-[500]">Availability: </h6>
                <h6 className="text-[#23A6F0] font-[500]">In Stock</h6>
              </div>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <hr className="my-[3rem]" />
              <div className="flex gap-[1rem]">
                {colorOptions.map((e, i) => (
                  <div
                    key={i}
                    className={
                      "w-[3rem] h-[3rem] rounded-[50%] " + "bg-[" + e + "]"
                    }
                  ></div>
                ))}
              </div>
              <div className="flex items-center gap-[1.5rem]">
                <button className="text-[1.4rem] px-[2.5rem] py-[1.5rem] rounded-[0.5rem] bg-[#23A6F0] text-white">
                  Select Options
                </button>
                <button className="bg-white border-[1px] border-[solid] border-[black] w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center  hover:bg-[#252b42] hover:text-white duration-200">
                  <i className="fa-solid fa-heart"></i>
                </button>
                <button className="bg-white border-[1px] border-[solid] border-[black] w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center hover:bg-[#252b42] hover:text-white duration-200">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <button className="bg-white border-[1px] border-[solid] border-[black] w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center hover:bg-[#252b42] hover:text-white duration-200">
                  <i className="fa-solid fa-eye"></i>
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
        <div className="flex justify-between gap-[2rem]">
          <div className="flex-1">
            <img
              className="object-cover w-[100%]"
              src="/product-page/product-desc-1.png"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <h3>the quick fox jumps over</h3>
            <p className="text-[1.6rem]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[1.6rem]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[1.6rem]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <h3>the quick fox jumps over</h3>
            <div>
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
            <hr />
            <h3>the quick fox jumps over</h3>
            <div>
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] py-[2rem]">
        <div className="container mx-auto flex flex-col">
          <h3 className="uppercase">bestseller products</h3>
          <hr className="my-[2rem]" />
          <div className="w-[100%] flex flex-wrap gap-[2rem]">
            {bestSellerProducts.map((e, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
