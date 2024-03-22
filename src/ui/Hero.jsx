export default function Hero() {
  return (
    <div className="flex max-h-[90vh]">
      <div className="max-md:hidden flex flex-col justify-center p-[5rem] w-[50%] gap-[3rem] bg-[url('https://i.ibb.co/MkWJxRZ/floral-pattern.png')]">
        <h5 className="uppercase font-bold text-white">Summer Tag</h5>
        <h1 className="text-white">
          Multicoloured <br /> Tie-dye Sweater
        </h1>
        <h4 className="text-white">We know how large objects will act.</h4>
        <button className="p-[1rem] bg-transparent text-white w-[15rem] border-solid border-white border-[0.1rem]">
          Shop Now
        </button>
      </div>
      <div className="max-md:w-[100%] w-[50%] max-h-[100%] relative">
        <div className="hidden max-md:flex flex-col gap-[2rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white bg-[rgba(37,43,66,0.4)] p-[2rem] w-[70%] justify-center items-center">
          <h5 className="uppercase font-bold max-md:text-[1.6rem]">
            Summer Tag
          </h5>
          <h1 className="max-md:text-[3.6rem] max-md:text-center">
            Multicoloured <br /> Tie-dye Sweater
          </h1>
          <h4 className="max-md:text-[1.6rem]">
            We know how large objects will act.
          </h4>
          <button className="hover:bg-[rgb(37,43,66)] hover:text-white duration-[200ms] p-[1rem] bg-transparent text-white w-[15rem] border-solid border-white border-[0.1rem]">
            Shop Now
          </button>
        </div>
        <img className="w-[100%] h-[100%] object-cover" src="/hero-img.png" />
      </div>
    </div>
  );
}
