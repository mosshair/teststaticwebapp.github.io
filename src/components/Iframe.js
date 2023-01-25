import React from "react";
import "../assets/css/main.css";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Iframe(props) {
  const mystyle = {
    marginRight: "2%",
    fontSize: "25px",
  };

  return (
    <div>
      <div className="Mrow">
        <div className="Mcolumn Mleft">
          <h1>{props.heading}</h1>
          <p>
            <iframe
              src={props.source}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Bryn Mawr"
            ></iframe>
          </p>
        </div>
        <div className=" Mcolumn Mright">
          <h1>Contact</h1>
          <p className="Mtop">
            <MdLocationPin style={mystyle} />
            {props.address}
          </p>
          <p className="Mapping-paragraph">
            <FaPhoneAlt style={mystyle} />
            {props.number}
          </p>
          <p className="Mapping-paragraph">
            <FaEnvelope style={mystyle} />
            {props.email}
          </p>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default Iframe;
