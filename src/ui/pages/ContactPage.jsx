/* eslint-disable react/no-unescaped-entities */
const ContactPage = () => {
  return (
    <div>
      <div className="container mx-auto my-[5rem]">
        <div className="flex justify-center items-center max-md:flex-col">
          <div className="flex basis-[60%] flex-col gap-[3rem] max-md:justify-center max-md:items-center max-md:text-center">
            <h5 className=" uppercase">Contact us</h5>
            <h1>Get in touch today!</h1>
            <h4>
              We know how large objects will act, <br /> but things on a small
              scale
            </h4>
            <h3>Phone: +451 215 215</h3>
            <h3>Fax: +451 215 216</h3>
            <div className="flex gap-[2rem] items-center text-[3rem]">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="basis-[40%] relative">
            <img
              src="/contact-page/contact-hero.png"
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
      <div className="container mx-auto my-[5rem] gap-[5rem] flex flex-col">
        <div className="text-center">
          <h6 className="uppercase">Visit our office</h6>
          <h2 className="leading-[1.2] my-[2rem]">
            We help small businesses <br /> with big ideas
          </h2>
        </div>
        <div className="flex max-md:flex-col">
          <div className="flex-1 flex flex-col justify-center items-center gap-[2rem] py-[5rem]">
            <i className="fa-solid fa-phone text-[7.2rem] text-[#23A6F0]"></i>
            <div className="text-center flex flex-col gap-[0.5rem]">
              <h6 className="font-bold">support@bandage.com</h6>
              <h6 className="font-bold">sales@bandage.com</h6>
            </div>
            <h5>Get Support</h5>
            <button className=" bg-transparent border-[#23A6F0] border-[1px] rounded-[3rem] px-[2rem] py-[1rem] text-[#23A6F0]">
              Submit Request
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-[2rem] bg-[#252B42] py-[5rem]">
            <i className="fa-solid fa-location-dot text-[7.2rem] text-[#23A6F0]"></i>
            <div className="text-center flex flex-col gap-[0.5rem]">
              <h6 className="font-bold text-white">support@bandage.com</h6>
              <h6 className="font-bold text-white">sales@bandage.com</h6>
            </div>
            <h5 className="text-white">Get Support</h5>
            <button className=" bg-transparent border-[#23A6F0] border-[1px] rounded-[3rem] px-[2rem] py-[1rem] text-[#23A6F0]">
              Submit Request
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-[2rem] py-[5rem]">
            <i className="fa-solid fa-envelope text-[7.2rem] text-[#23A6F0]"></i>
            <div className="text-center flex flex-col gap-[0.5rem]">
              <h6 className="font-bold">support@bandage.com</h6>
              <h6 className="font-bold">sales@bandage.com</h6>
            </div>
            <h5>Get Support</h5>
            <button className=" bg-transparent border-[#23A6F0] border-[1px] rounded-[3rem] px-[2rem] py-[1rem] text-[#23A6F0]">
              Submit Request
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-[5rem] text-center">
        <i className="fa-solid fa-chevron-down text-[5rem] my-[3rem]"></i>
        <h6 className="uppercase">We can't wait to meet you</h6>
        <h2 className="text-[5.6rem] my-[1rem]">Let's Talk</h2>
        <button className="bg-[#23A6F0] px-[4rem] py-[2rem] text-white rounded-[0.5rem]">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
