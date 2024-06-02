import React from "react";
import './Course.css';

const Course = () => {
  return (
    <div className="Course">
      <h1 className="Professional">Professional Online Makeup Course</h1>
      <span className="certificate">Certification Programme</span>
      <div className="rate">
        <span>★ Rated 4.85/5</span>
      </div>
     
      <div className="ticks-container">
        <span className="tick">✔ India's No.1 Online Makeup Course</span><br />
        <span className="tick">✔ Learn by LIVE Do-it-Together Classes</span><br />
        <span className="tick">✔ Unlimited Practise Session to master skills</span>
      </div>
    </div>
  );
};

export default Course;
