import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../Loader";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <div className="">
        {isLoading && <Loader />}
        <Header />
        <main className=" max-md:pt-[8.5rem]">
          <Outlet />
        </main>
        <ToastContainer />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
