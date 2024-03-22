/* eslint-disable react/no-unescaped-entities */
const AboutPage = () => {
  const brandImages = [
    "brand-1.png",
    "brand-2.png",
    "brand-3.png",
    "brand-4.png",
    "brand-5.png",
    "brand-6.png",
  ];
  return (
    <div>
      <div className="container mx-auto my-[5rem]">
        <div className="flex justify-center items-center max-md:flex-col">
          <div className="flex basis-[60%] flex-col gap-[3rem] max-md:justify-center max-md:items-center max-md:text-center">
            <h5 className=" uppercase">About Company</h5>
            <h1 className=" uppercase">About Us</h1>
            <h4>
              We know how large objects will act, <br /> but things on a small
              scale
            </h4>
            <button className="bg-[#23a6f0] text-white font-bold py-[1rem] w-[17rem]">
              Get Quote Now
            </button>
          </div>
          <div className="basis-[40%] relative">
            <img
              src="/technology-about.png"
              alt="woman with shopping bags"
              className="w-100% hover:scale-[1.1] duration-[100ms]"
            />
            <div
              id="xs-circle-shape"
              className="w-[1.5rem] h-[1.5rem] rounded-[50%] bg-[#977df4] absolute right-[1rem] top-[30%] z-[-1]"
            ></div>
            <div
              id="xs-circle-shape"
              className="w-[1.5rem] h-[1.5rem] rounded-[50%] bg-[#977df4] absolute top-[70%] z-[-1]"
            ></div>
            <div
              id="xs-circle-shape"
              className="w-[1.5rem] h-[1.5rem] rounded-[50%] bg-[#ffe9ea] absolute top-[45%] z-[-1] right-[1%]"
            ></div>
            <div
              id="m-circle-shape"
              className="w-[7.8rem] h-[7.8rem] bg-[#ffe9ea] absolute rounded-[50%] top-[5%] left-[-5%] z-[-1]"
            ></div>
            <div
              id="xl-circle-shape"
              className="w-[48rem] h-[48rem] rounded-[50%] bg-[#ffe9ea] absolute top-[5%] right-[5%] z-[-1]"
            ></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-around items-center my-[5rem] max-md:flex-col">
        <div className="w-[35%] flex flex-col gap-[1rem] max-md:w-[100%] max-md:text-center">
          <p className="text-[#E74040] text-[1.4rem]">Probmlems trying</p>
          <h2 className="text-[#252B42] text-[2.4rem]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div className="w-[45%] max-md:w-[100%] max-md:text-center max-md:my-[2rem]">
          <p className="text-[#737373] text-[1.4rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center my-[5rem] max-md:flex-col max-md:gap-[3rem]">
        <div className="flex flex-col gap-[1rem] justify-center items-center">
          <h1 className="uppercase">15k</h1>
          <p>Happy Customers</p>
        </div>
        <div className="flex flex-col gap-[1rem] justify-center items-center">
          <h1 className="uppercase">150k</h1>
          <p>Monthly Visitors</p>
        </div>
        <div className="flex flex-col gap-[1rem] justify-center items-center">
          <h1 className="uppercase">15</h1>
          <p>Countries WW</p>
        </div>
        <div className="flex flex-col gap-[1rem] justify-center items-center">
          <h1 className="uppercase">100+</h1>
          <p>Top Partners</p>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-[3rem] my-[5rem]">
        <div className="text-center">
          <h2>Meet Our Team</h2>
          <p className="w-[50%] mx-auto my-[2rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex basis-[30%] h-[30rem] flex-col text-center gap-[1rem]">
            <img src="/team-1.jpg" alt="" className="h-[100%] object-cover" />
            <h5>Username</h5>
            <h6>Profession</h6>
            <div className="flex gap-[1rem] justify-center items-center text-[1.4rem]">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="flex basis-[30%] h-[30rem] flex-col text-center gap-[1rem]">
            <img src="/team-2.png" alt="" className="h-[100%] object-cover" />
            <h5>Username</h5>
            <h6>Profession</h6>
            <div className="flex gap-[1rem] justify-center items-center text-[1.4rem]">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="flex basis-[30%] h-[30rem] flex-col text-center gap-[1rem]">
            <img src="/team-3.jpg" alt="" className="h-[100%] object-cover" />
            <h5>Username</h5>
            <h6>Profession</h6>
            <div className="flex gap-[1rem] justify-center items-center text-[1.4rem]">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-[3rem]">
        <div className="flex justify-center items-center flex-col gap-[2rem] mt-[5rem] max-md:text-center">
          <h2>Big Companies Are Here</h2>
          <p className="text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex justify-between items-center max-md:flex-wrap max-md:justify-center max-md:gap-[3rem]">
          {brandImages.map((e, i) => (
            <div key={i} className="my-[5rem]">
              <img src={e} className="w-[100%]" alt="brand" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex bg-[#2A7CC7] relative h-[64rem]">
        <div className="container mx-auto flex absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
          <div className="w-[60%] max-md:w-[100%]">
            <div className="w-[50rem] flex flex-col gap-[3rem] text-white max-md:text-center max-md:w-[100%]">
              <h5 className="uppercase">work with us</h5>
              <h2>Now Let's Grow Yours</h2>
              <p>
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th{" "}
              </p>
            </div>
          </div>
          <div className="w-[40%] max-md:hidden"></div>
        </div>
        <div className="w-[60%]"></div>
        <div className="max-md:hidden w-[40%] bg-[url('../public/about-bottom.png')] bg-center bg-no-repeat bg-cover"></div>
      </div>
    </div>
  );
};

export default AboutPage;
