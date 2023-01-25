import React from "react";
import "../assets/css/main.css";

function Services() {
  return (
    <div>
      <div className="Service-Heading">
        <h1>Our Services</h1>
      </div>
      <div className="Service-section">
        <div className="Service-image">
          <img src="http://www.prenlyn.com/wp-content/uploads/2022/03/Image-from-iOS-14-1-scaled.jpg" />
          <p>
            <strong>Alignment</strong>
          </p>
        </div>
        <div className="Service-image2">
          <img src="http://www.prenlyn.com/wp-content/uploads/2022/03/Image-from-iOS-10-1-scaled.jpg" />
          <p>
            <strong>Tire Sale</strong>
          </p>
        </div>
        <div className="Service-image">
          <img src="http://www.prenlyn.com/wp-content/uploads/2022/03/Image-from-iOS-15-1-scaled.jpg" />
          <p>
            <strong>Auto Repair</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
