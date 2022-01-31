import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="" />
    </div>

    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home"></a>Home
      </li>
      <li className="p__opensans">
        <a href="#about"></a>About
      </li>
      <li className="p__opensans">
        <a href="#menu"></a>Menu
      </li>
      <li className="p__opensans">
        <a href="#awards"></a>Awards
      </li>
      <li className="p__opensans">
        <a href="#contact"></a>Contact
      </li>
    </ul>

    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">
        Log In / Register
      </a>
      <div />
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div>

    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => {}} />

      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu
          fontSize={27}
          className="overlay__clode"
          onClick={() => {}}
        />
        <ul className="app__navbar-smallscreen-links">
          <li className="p__opensans">
            <a href="#home"></a>Home
          </li>
          <li className="p__opensans">
            <a href="#about"></a>About
          </li>
          <li className="p__opensans">
            <a href="#menu"></a>Menu
          </li>
          <li className="p__opensans">
            <a href="#awards"></a>Awards
          </li>
          <li className="p__opensans">
            <a href="#contact"></a>Contact
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
