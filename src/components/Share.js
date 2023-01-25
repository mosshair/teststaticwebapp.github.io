import React from "react";
import "../assets/css/main.css";
import { FaAward } from "react-icons/fa";

function Share() {
  return (
    <div>
      <div className="Container">
        <div className="Text-Container">
          <h1 style={{ color: "#FCB500", fontSize: "35px", fontWeight: "100" }}>
            Why Love Nature
          </h1>
          <div>
            <p>
              Your customers just learned what services you offer. Tell them why
              they should work with you or your team, for example you could
              highlight your experience and positive client reviews.
            </p>
          </div>
          <div>
            <p>
              The badges illustrate this. We also focus on key benefits they
              will get while using our services, namely quick turnaround times
              and dedicated support. You could also use them to show awards you
              won for your best work.
            </p>
          </div>
        </div>
        {/* <div className="Badges-Container">
          <div className="Image-Container">
             <img src="../../content/images/Badge1.png" alt="Badge" /> 
            <FaAward values={{ color: "yellow", size: "100px" }} />
            <p>8 Years Experience</p>
          </div>
          <div className="Image-Container">
            <img src="../../content/images/Badge2.png" alt="Star" />
            <p>5 Star Rating</p>
          </div>
          <div className="Image-Container">
            <img src="../../content/images/Badge3.png" alt="Repeat Icon" />
            <p>Quick Turnaround</p>
          </div>
          <div className="Image-Container">
            <img src="../../content/images/Badge4.png" alt="Bullseye" />
            <p>Dedicated Support</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Share;
