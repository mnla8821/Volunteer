import { Outlet } from "react-router-dom";
import { Header } from "./Component";
import { Home, Box, SlideBar } from "./Pages";
import Footer from "./Sections/Footer/Footer";

const Root = () => {
  return (
    <div className="App w-full h-[125vh] ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

// "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
