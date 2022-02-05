import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";
import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">New York</p>
        <p className="p__opensans">+1 212 *</p>
        <p className="p__opensans">+1 212 *</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">The best way to find yourself</p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working hours</h1>
        <p className="p__opensans">Mon-Fri</p>
        <p className="p__opensans">Sat-Sun</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
