import React from 'react';
import header1 from "../assets/header1.png";
import header2 from "../assets/header2.png";
import header3 from "../assets/Header3.png";
import header4 from "../assets/header4.png";
import './Header.css';
import Logo from "../assets/logo.png";
import Presents from "../assets/Presents.png";
const Header = () => {
    return (
      <div className="parent-container">
          <div className="container">
              <div className="image-wrapper">
                  <img src={header1} alt="Header 1" className="image" />
              </div>
              <div className="image-wrapper">
                  <img src={header2} alt="Header 2" className="image" />
              </div>
              <div className="image-wrapper">
                  <img src={header3} alt="Header 3" className="image" />
              </div>
              <div className="image-wrapper">
                  <img src={header4} alt="Header 4" className="image" />
              </div>
              
              <img src={Logo} alt="Additional Image 1" className="additional-image additional-image-1" />
              <img src={Presents} alt="Additional Image 2" className="additional-image additional-image-2" />
          </div>
      </div>
    );
  }
  
  export default Header;