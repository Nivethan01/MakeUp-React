import React from "react";
import join1 from "../assets/join1.png";
import join2 from "../assets/header2.png";
import join3 from "../assets/join3.png";
import join4 from "../assets/join4.png";
import join5 from "../assets/join5.png";
import join6 from "../assets/join6.png";
import join7 from "../assets/join7.png";
import join8 from "../assets/join8.png";
import join9 from "../assets/join9.png";
import join10 from "../assets/join10.png";
import join11 from "../assets/join11.png";
import join12 from "../assets/join12.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import frame from "../assets/frame3.png";
import "./Footer.css";

const Footer = () => {
  const images = [
    join1,
    join2,
    join3,
    join4,
    join5,
    join6,
    join7,
    join8,
    join9,
    join10,
    join11,
    join12,
  ];

  return (
    <div className="footer-container">
      <div className="footer-image-grid">
        {images.map((image, index) => (
          <div className="footer-image-wrapper" key={index}>
            <img src={image} className="footer-join" alt={`Join ${index}`} />
            <div className="footer-overlay"></div>
          </div>
        ))}
      </div>
      <img src={frame} className="footer-frame-image" alt="" />
      <button className="footer-apply">Apply Now</button>
      <div className="footer-icon-container">
        <div className="footer-icon">
          <img src={Instagram} alt="Instagram" />
          <p>Instagram</p>
        </div>
        <div className="footer-icon">
          <img src={Facebook} alt="Facebook" />
          <p>Facebook</p>
        </div>
        <div className="footer-icon">
          <img src={Linkedin} alt="LinkedIn" />
          <p>LinkedIn</p>
        </div>
        <div className="footer-icon">
          <img src={Twitter} alt="Twitter" />
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
