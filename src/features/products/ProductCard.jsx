import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="bg-[#fffff] flex flex-col flex-auto w-[25rem] max-sm:w-[17rem] rounded-b-[1rem] overflow-hidden shadow-lg">
      <div className="relative w-[100%]">
        <img
          className="object-cover w-[100%] rounded-[1rem]"
          src="/product-cover-dummy-4.png"
          alt=""
        />
        <div className="absolute flex gap-[1rem] bottom-[1rem] left-[50%] translate-x-[-50%] translate-y-[-10%]">
          <button className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center  hover:bg-[#252b42] hover:text-white duration-200">
            <i className="fa-solid fa-heart"></i>
          </button>
          <button className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center hover:bg-[#252b42] hover:text-white duration-200">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center hover:bg-[#252b42] hover:text-white duration-200">
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] bg-[#FAFAFA] flex-1 p-[1rem] rounded-b-[1rem]">
        <a href="/product" className="text-[#252B42] text-[1.4rem] font-[500]">
          English Department
        </a>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <Link to="/product">
          <h5>Graphic Design</h5>
        </Link>
        <p>
          We focus on ergonomics and meeting you where you work. Its only a
          keystroke away.
        </p>
        <div className="flex gap-[1rem]">
          <h5 className="text-[#bdbdbd] font-bold">$16.48</h5>
          <h5 className="text-[#23856d] font-bold">$6.48</h5>
        </div>
        <div className="flex gap-[0.5rem]">
          <div className="bg-[#23a6f0] w-[1.6rem] h-[1.6rem] rounded-[50%]"></div>
          <div className="bg-[#23856d] w-[1.6rem] h-[1.6rem] rounded-[50%]"></div>
          <div className="bg-[#E77C40] w-[1.6rem] h-[1.6rem] rounded-[50%]"></div>
          <div className="bg-[#252b42] w-[1.6rem] h-[1.6rem] rounded-[50%]"></div>
        </div>
      </div>
    </div>
  );
}
