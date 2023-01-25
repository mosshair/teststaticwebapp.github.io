import React from "react";
import "../assets/css/main.css";
import Button from "./button";
// import Share from "./Share.js";

function ServicePage() {
  const mystyle = {
    fontFamily: "Forum",
    fontWeight: "400",
    fontSize: "34px",
    letterSpacing: "-1px",
  };

  return (
    <div>
      <div className="Heading-Section">
        <div className="Heading-Intro">
          <h1 style={{ color: "orange" }}>Our Services</h1>
        </div>
      </div>
      <div className="Services-bg">
        <div className="App">
          <div className="Services-Left">
            <img
              src="http://www.prenlyn.com/wp-content/uploads/2022/03/Image-from-iOS-14-1-scaled.jpg"
              alt="dog"
            />
          </div>
          <div className="Services-Right">
            <h1 style={mystyle}>Alignment</h1>
            <h2 style={mystyle}>From $99</h2>
            <Button name="Start a Project" />
          </div>
        </div>
      </div>
      <div className="Services-bg-2">
        <div className="App">
          <div className="Services-Left-2">
            <div className="Service-btn">
              <h1 style={mystyle}>Auto Repair</h1>
              <h2 style={mystyle}>From $99</h2>
              <Button name="Start a Project" />
            </div>
          </div>
          <div className="Services-Right-2">
            <img
              src="http://www.prenlyn.com/wp-content/uploads/2022/03/Image-from-iOS-15-1-scaled.jpg"
              alt="dog"
            />
          </div>
        </div>
      </div>
      <div className="Services-bg">
        <div className="App">
          <div className="Services-Left">
            <img
              src="http://www.prenlyn.com/wp-content/uploads/2022/03/Image-from-iOS-13-scaled.jpg"
              alt="dog"
            />
          </div>
          <div className="Services-Right">
            <h1 style={mystyle}>Content Tire Sale</h1>
            <h2 style={mystyle}>From $99</h2>
            <Button name="Start a Project" />
          </div>
        </div>
      </div>
      {/* <Share /> */}
    </div>
  );
}

export default ServicePage;
