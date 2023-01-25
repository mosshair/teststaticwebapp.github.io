import React from "react";
import "../assets/css/main.css";
import Button from "./button";

function Hero() {
  return (
    <div>
      <div className="Hero-Section">
        <div className="Hero-Overlay"></div>
        <div className="Hero-Intro">
          <h2 style={{ color: "white" }}>We all love</h2>
          <h1 style={{ color: "white" }}>PRENLYN AUTOMOTIVE GROUP</h1>
          <p>Expert Automotive Franchise Operators.</p>
          <p>since 1976</p>
          <Button name="Get Started" />
        </div>
      </div>
      <div className="intro">
        <p>
          <strong>Prenlyn </strong>is a family-owned company currently operating
          24 Midas Tire & Auto Repair franchises throughout
        </p>
        <p>Philadelphia & Central New Jersey.</p>
      </div>
    </div>
  );
}

export default Hero;
