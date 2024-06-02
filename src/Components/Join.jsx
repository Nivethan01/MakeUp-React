import React from 'react';
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
import frame from "../assets/Frame.png";
import icon1 from "../assets/zoom.png";
import icon2 from "../assets/rate.png";
import icon3 from "../assets/members.png";
import './Join.css';

const Join = () => {
  // Manually specify image paths
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
    join12
    // Add more image paths as needed
  ];

  return (
    <div className="join-container">
      {images.map((image, index) => (
        <div className="image-wrapper" key={index}>
          <img src={image} className='join' alt={`Join ${index}`} />
          <div className="overlay"></div>
        </div>
      ))}
      <img src={frame} className="frame-image" alt='' />
      
      <div className="icon-container">
        <div className="icon">
          <img src={icon1} alt="Icon 1" />
          <p>Do it on Zoom</p>
        </div>
        <div className="icon">
          <img src={icon2} alt="Icon 2" />
          <p>4.8/5 Rates</p>
        </div>
        <div className="icon">
          <img src={icon3} alt="Icon 3" />
          <p>35000+ Members</p>
        </div>
      </div>
      
      <button className="apply">Apply Now</button>
    </div>
  );
};

export default Join;
