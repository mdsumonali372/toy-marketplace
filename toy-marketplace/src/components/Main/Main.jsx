import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Main;
