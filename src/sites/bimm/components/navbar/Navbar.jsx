import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaSearch,
} from "react-icons/fa";

import "./navbar.css";
import { Link } from "react-router-dom";

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
                
                <Link to=''></Link>
                <Link to=''></Link>
                <Link to=''></Link>
                <div class="navbar_links_dropdown">
                  <button class="dropbtn">BIMM</button>
                  <div class="dropdown-content">
                  <Link to='/bimmabout'>Markaz xaqida</Link>
                  <Link to='/raxbariyat'>Raxbariyat</Link>
                  <Link to='/'>Markaz tuzilmasi</Link>
                  <Link to='/'>Markaz apparat</Link>
                  <Link to='/'>Malaka oshirish markazi</Link>
                  <Link to='/'>Gender tenglik</Link>
                  </div>
                </div>
                <Link to='/bimmcontact'>
                  <span>Contact</span>
                </Link>
                <div class="navbar_links_dropdown">
                  <button class="dropbtn">Axborot Xizmati</button>
                  <div class="dropdown-content">
                    <a href="#"> Yangilik</a>
                    <a href="#"> Ommaviy tadbirlar</a>
                    <a href="#">Elonlar</a>
                    <a href="#">Digital Marketing</a>
                  </div>
                </div>
                <div class="navbar_links_dropdown">
                  <button class="dropbtn">Hujjatlar</button>
                  <div class="dropdown-content">
                    <a href="#">Qonunlar</a>
                    <a href="#">Prezident qaror va namoyishlar</a>
                    <a href="#">Elonlar</a>
                    <a href="#">Digital Marketing</a>
                  </div>
                </div>
                <p>Blog</p>
                <p>Contact</p>
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
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaGooglePlusG />
                </li>
                <li>
                  <FaPinterestP />
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
