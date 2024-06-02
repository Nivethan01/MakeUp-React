import React from 'react';
import frame from '../assets/Frame2.png';
import certificate from '../assets/model_certificate.png';
import './Cerified.css';

const Cerified = () => {
  return (
    <div className="cerified-container">
      <div className="image-wrapper">
        <img src={frame} className="frame1" alt="Frame" />
      </div>
      <div className="image-wrapper">
        <img src={certificate} className="frame2" alt="Certificate" />
      </div>
    </div>
  );
};

export default Cerified;
