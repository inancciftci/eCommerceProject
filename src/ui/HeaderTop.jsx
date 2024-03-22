const HeaderTop = () => {
  return (
    <div className="bg-[#252B42]">
      <div className="max-md:hidden container mx-auto py-[1rem] flex justify-between color text-white items-center">
        <div className="flex gap-x-[3rem]">
          <button className="flex items-center gap-x-[0.5rem]">
            <i className="fa-solid fa-phone decoration-white"></i>
            (225) 555-0118
          </button>
          <button className="flex items-center gap-x-[0.5rem]">
            <i className="fa-regular fa-envelope"></i>
            michelle.rivera@example.com
          </button>
        </div>
        <div>
          <h6>Follow us and get a chance to win 80% off!</h6>
        </div>
        <div className="flex items-center gap-x-[1rem]">
          <h6>Follow us : </h6>
          <div className="flex items-center gap-x-[1rem]">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
