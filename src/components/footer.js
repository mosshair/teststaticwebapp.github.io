import React from "react";
import "../assets/css/main.css";
import { FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="Findex">
      <div className="frow">
        <div className="fcolumn fleft">
          <p>
            The <strong>Prenlyn Automotive Group</strong> is a family owned
            company that
          </p>
          <p>currently operates 24 Midas Tire & Auto franchises throughout</p>
          <p>Philadelphia & Central New Jersey.</p>
          <div className="fhours">
            <h4>Working Hours</h4>
            <p>Mon-sat (8:00 am - 6:00 pm)</p>
            <p> Sunday(off)</p>
          </div>
        </div>
        <div className="fcolumn fright">
          <p>
            <FaMapMarkerAlt className="reacticons" />
            <strong> 345h street xyz city</strong>
          </p>
          <p>
            <FaPhoneAlt className="reacticons" />
            <strong> +123456789</strong>
          </p>
          <p>
            <FaMailBulk className="reacticons" />
            <strong> info@prenlyn.com</strong>
          </p>
        </div>
      </div>
      <div className="fcopyright">
        <p>
          <strong>Copyright © 2023 Prenlyn</strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;
