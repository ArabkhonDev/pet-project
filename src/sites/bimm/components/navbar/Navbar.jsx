import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaSearch,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav_main">
            <div className="navbar_logo">
              <Link to="/bimm">
                <span>Bosh Ilmiy-Metodik Markaz</span>
              </Link>
            </div>
            <div className="navbar_links">
              <div className="navbar_links_items">
                <Link to="/">
                  <p>Agrar</p>
                </Link>

                <div class="navbar_links_dropdown">
                  <button class="dropbtn">BIMM</button>
                  <div class="dropdown-content">
                    <Link to="/bimmabout">Markaz xaqida</Link>
                    <Link to="/raxbariyat">Raxbariyat</Link>
                    <Link to="#">Markaz tuzilmasi</Link>
                    <Link to="#">Markaz apparat</Link>
                    <Link to="#">Malaka oshirish markazi</Link>
                    <Link to="#">Gender tenglik</Link>
                    <Link to="#">Contact</Link>
                  </div>
                </div>
                <div class="navbar_links_dropdown">
                  <button class="dropbtn">Axborot Xizmati</button>
                  <div class="dropdown-content">
                    <Link to="#"> Yangilik</Link>
                    <Link to="#"> Ommaviy tadbirlar</Link>
                    <Link to="#">Elonlar</Link>
                    <Link to="#">Savol va javob</Link>
                  </div>
                </div>
                <div class="navbar_links_dropdown">
                  <button class="dropbtn">Hujjatlar</button>
                  <div class="dropdown-content">
                    <Link to="#">Qonunlar</Link>
                    <Link to="#">Prezident qaror va namoyishlar</Link>
                    <Link to="#">Hukumat qaror va farmonlari</Link>
                  </div>
                </div>
                <p>Blog</p>
              </div>
            </div>
            <div className="navbar_contact_icon_links">
              <div className="navbar_search_input">
                <form action="#" method="get">
                  <input
                    type="search"
                    hidden
                    name="navbar_search_input"
                    id=""
                  />
                  <FaSearch />
                  <input type="submit" value="" hidden />
                </form>
              </div>
              <div className="navbar_link_icons">
                <Link to="#" target="_blank">
                  <li>
                    <FaFacebookF />
                  </li>
                </Link>
                <Link to="#" target="_blank">
                  <li>
                    <FaTwitter />
                  </li>
                </Link>
                <Link to="#" target="_blank">
                  <li>
                    <FaGooglePlusG />
                  </li>
                </Link>
                <Link to="#" target="_blank">
                  <li>
                    <FaPinterestP />
                  </li>
                </Link>
              </div>
            </div>
            <div className="menubar">
              <Link to="#" target="_blank">
                <IoMenu />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
