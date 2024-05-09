import { Routes, Route } from "react-router-dom";
// this pages for agrr
import Navbar from "../sites/agrar/components/navbar/Navbar";
import About from "../sites/agrar/pages/about/About";
import AgrarHome from "../sites/agrar/pages/home/Home";

// this pages for bimm

import BimmHome from "../sites/bimm/pages/home/Home";
import BimmAbout from "../sites/bimm/pages/about/About";
import Raxbariyat from "../sites/bimm/pages/raxbariyat/Raxbariyat";
import Bimmcontact from '../sites/bimm/pages/contact/Contact'
const Allroute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AgrarHome />}>
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/bimm" element={<BimmHome />}>
          <Route path="/bimmabout" element={<BimmAbout />} />
          <Route path="/bimmraxbariyat" element={<Raxbariyat />} />
          {/* 
          <Route path="/bimmcontact" element={<Bimmcontact />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default Allroute;
