import { Link } from "react-router-dom";

const TeamPage = () => {
  const teamImgs = [
    "/team-page/team-1-user-1.jpg",
    "/team-page/team-1-user-2.jpg",
    "/team-page/team-1-user-3.jpg",
    "/team-page/team-1-user-4.jpg",
    "/team-page/team-1-user-5.jpg",
    "/team-page/team-1-user-6.jpg",
    "/team-page/team-1-user-7.jpg",
    "/team-page/team-1-user-8.jpg",
    "/team-page/team-1-user-9.jpg",
  ];
  return (
    <div>
      <div className="container mx-auto flex flex-col my-[5rem] text-center gap-[2rem]">
        <h5 className="uppercase">What we do</h5>
        <h2 className="text-[5.8rem]">Innovation tailored for you</h2>
        <div className="flex gap-[1rem] justify-center items-center">
          <Link to="/">Home</Link>
          <i className="fa-solid fa-chevron-right text-[1.4rem] text-[#BDBDBD]"></i>
          <Link to="/team">Team</Link>
        </div>
      </div>
      <div className="flex gap-[1rem] max-md:flex-col">
        <div className="flex-auto">
          <img
            className="w-[100%] object-cover"
            src="/team-page/team-hero-1.png"
            alt=""
          />
        </div>
        <div className="flex-auto flex flex-col justify-between max-md:gap-[1rem]">
          <div className="flex gap-[1rem]">
            <div className="flex-auto w-[50%]">
              <img
                className="w-[100%]"
                src="/team-page/team-hero-2.png"
                alt=""
              />
            </div>
            <div className="flex-auto w-[50%]">
              <img
                className="w-[100%]"
                src="/team-page/team-hero-3.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-[1rem]">
            <div className="w-[50%] flex-auto">
              <img
                className="w-[100%]"
                src="/team-page/team-hero-4.png"
                alt=""
              />
            </div>
            <div className="flex-auto w-[50%]">
              <img
                className="w-[100%] object-cover"
                src="/team-page/team-hero-5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="my-[5rem] text-center">Meet Our Team</h2>
        <div className="flex gap-[3rem] flex-wrap justify-between max-sm:p-[3rem]">
          {teamImgs.map((e, i) => (
            <div
              key={i}
              className="flex w-[30%] flex-auto flex-col text-center gap-[1rem]"
            >
              <img src={e} alt="" className="h-[30rem] object-cover" />
              <h5>Username</h5>
              <h6>Profession</h6>
              <div className="flex gap-[1rem] justify-center items-center text-[1.4rem]">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto text-center my-[5rem] flex flex-col gap-[2rem] max-md:w-[70%]">
        <h2>Start your 14 days free trial</h2>
        <h6 className="w-[40%] mx-auto max-md:w-[100%]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </h6>
        <button className="bg-[#23A6F0] text-white w-[25%] max-md:w-[50%] mx-auto py-[1rem] rounded-[0.5rem]">
          Try it free now
        </button>
        <div className="flex gap-[2rem] justify-center items-center text-[2.4rem] text-[#23A6f0]">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
