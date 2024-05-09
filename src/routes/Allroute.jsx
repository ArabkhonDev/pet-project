import { Routes, Route, Link } from "react-router-dom";
import { BiArrowToTop } from "react-icons/bi";
// this pages for agrr
import Navbar from "../sites/agrar/components/navbar/Navbar";
import About from "../sites/agrar/pages/about/About";
import AgrarHome from "../sites/agrar/pages/home/Home";

// this pages for bimm

import BimmHome from "../sites/bimm/pages/home/Home";
import BimmAbout from "../sites/bimm/pages/about/About";
import Raxbariyat from "../sites/bimm/pages/raxbariyat/Raxbariyat";

// this components for bimm
import { Info } from "../sites/bimm/components/raxbariyat/info/Info";
import { Experience } from "../sites/bimm/components/raxbariyat/experience/Experience";
import { Task } from "../sites/bimm/components/raxbariyat/task/Task";

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
      <Routes>
        <Route path="/" element={<AgrarHome />} />
        <Route path="/about" element={<About />} />

        <Route path="/bimm" element={<BimmHome />} />
        <Route path="/bimmabout" element={<BimmAbout />} />
        <Route path="/raxbariyat" element={<Raxbariyat />}>
          <Route index path="info" element={<Info />} />
          <Route path="experience" element={<Experience />} />
          <Route path="task" element={<Task />} />
        </Route>
      </Routes>
    </>
  );
};

export default Allroute;
