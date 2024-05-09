import "./raxbariyat.css";

import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Raxbariyat = () => {
  return (
    <>
      <Navbar />
      <div className="raxbariyat">
        <div className="container">
          <div className="raxbariyat_main">
            <div className="raxbariyat_main_contents">
              <h1>Raxbariyat</h1>
              <div className="raxbariyat_worker_info">
                <Link to="info">Malumoti</Link>
                <Link to="experience">Mehnat faoliyati</Link>
                <Link to="task">Vazifalar</Link>
              </div>
              
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Raxbariyat;
