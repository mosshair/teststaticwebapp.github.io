import React from "react";
import "../assets/css/main.css";

function Values() {
  return (
    <div className="Our-Goal">
      <div className="Our-Mission">
        <div className="Mission-Image">
          <img
            alt="Bullseye"
            src="http://www.prenlyn.com/wp-content/uploads/2022/04/mission-removebg-preview.png"
          />
        </div>
        <div className="Mission-Paragraph">
          <h1>Our Mission</h1>
          <p>
            The <strong>Prenlyn Automotive Group’s</strong> core focus is to
            “inspire growth”. We understand that every individual wants to
            experience growth personally and professionally.
          </p>
        </div>
      </div>
      <div className="Our-Values">
        <div className="Mission-Image2">
          <img
            alt="Bullseye"
            src="http://www.prenlyn.com/wp-content/uploads/2022/04/aim-removebg-preview.png"
          />
        </div>
        <div className="Mission-Paragraph">
          <h1>Our Values</h1>
          <p>
            We strive to go above and beyond for our clients no matter the
            challenge. We <strong>aim</strong> to deliver our very best work
            every single day across our services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
