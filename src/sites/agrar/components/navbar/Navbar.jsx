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
              <Link to='/'>
              <span>Agrar Universitet</span>
              </Link>
            </div>
            <div className="navbar_links">
              <div className="navbar_links_items">
                <Link to='/bimm'>
                <p>BIMM</p>
                </Link>
                <Link to='about'>
                  <p>About</p>
                </Link>
                <div class="navbar_links_dropdown">
                  <button class="dropbtn">Manbalar</button>
                  <div class="dropdown-content">
                    <a href="#"> Bosh ilmiy-metodik markaz</a>
                    <a href="#"> Elektron Kutubxona</a>
                    <a href="#">Grafik Dizayn</a>
                    <a href="#">Digital Marketing</a>
                  </div>
                </div>
                <div class="navbar_links_dropdown">
                  <button class="dropbtn">Narxlar</button>
                  <div class="dropdown-content">
                    <a href="#"> Raxbariyat</a>
                    <a href="#"> Elektron Kutubxona</a>
                    <a href="#">Grafik Dizayn</a>
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
