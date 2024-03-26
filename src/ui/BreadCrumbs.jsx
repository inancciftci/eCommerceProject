/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { trToEn } from "../features/helperutils";

const BreadCrumbs = () => {
  const location = useLocation();
  let currentPath = location.pathname.split("/");
  let currentPage = currentPath[currentPath.length - 1];
  let gender = "";
  let previousPage = "";
  let previousPageName = "";
  if (currentPath.includes("k")) {
    gender = "Kadın";
  }
  if (currentPath.includes("e")) {
    gender = "Erkek";
  }
  if (currentPath.length > 2) {
    if (currentPath[1] !== "") {
      previousPage += currentPath[1];
    }
  } else {
    previousPage = currentPath[0];
    previousPageName = "home";
  }

  return (
    <div className="flex gap-[1rem] items-center text-white bg-[rgba(0,0,0,0.4)] p-[1rem] rounded-md">
      <Link
        to={"/" + previousPage}
        className="text-[1.6rem] uppercase font-[500] "
      >
        {previousPageName !== "" ? "Home" : `${previousPage}`}
      </Link>
      <span className="text-[1.6rem]  cursor-default text-slate-200">&gt;</span>
      <span className="text-[1.6rem]  text-slate-300 cursor-default uppercase font-[500]">
        {`${gender} ${trToEn(currentPage)}`}
      </span>
    </div>
  );
};

export default BreadCrumbs;
