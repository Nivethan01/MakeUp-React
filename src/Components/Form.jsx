import React from "react";
import './Form.css';

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-heading">FILL THE FORM BELOW TO ENQUIRE</div>
      <form className="form">
        <div className="form-group">
          <label>*Enter your name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>*Enter your WhatsApp Number</label>
          <div className="whatsapp-number">
            <select className="country-code">
              <option value="" disabled selected>Code</option>
              <option value="+1">+1</option>  {/* USA */}
              <option value="+91">+91</option> {/* India */}
              <option value="+44">+44</option> {/* UK */}
              <option value="+61">+61</option> {/* Australia */}
              <option value="+81">+81</option> {/* Japan */}
              {/* Add more country codes as needed */}
            </select>
            <input type="tel" className="phone-number" placeholder="Eg. 0000000000" pattern="[0-9]{10}" />
          </div>
        </div>
        <div className="form-group">
          <label>*Select your profession</label>
          <select className="select">
            <option value="" disabled selected>Choose the most relevant option</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>*Select your goal</label>
          <select className="select">
            <option value="" disabled selected>Choose the most relevant option</option>
            <option value="learn">Learn new skills</option>
            <option value="career">Career advancement</option>
            <option value="hobby">Hobby</option>
          </select>
        </div>
        <div className="form-group">
          <label>*Select your city</label>
          <select className="select">
            <option value="" disabled selected>Choose the most relevant option</option>
            <option value="newyork">New York</option>
            <option value="losangeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            {/* Add more cities as needed */}
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
