import { Routes, Route, Link } from "react-router-dom";
import { BiArrowToTop } from "react-icons/bi";
// this pages for agrr
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import NoPage from "../pages/noPage/NoPages";

const Allroute = () => {
  return (
    <>
      <div className="link_to_top">
        <div className="link_to_top_logo">
          <Link to="#">
            <BiArrowToTop />
          </Link>
        </div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};


export default Allroute;