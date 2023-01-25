import React from "react";
import "../assets/css/main.css";
import Button from "./button";
import { FaMailBulk, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className="Heading-Section">
        <div className="Heading-Intro">
          <h1 style={{ color: "orange" }}>Contact us</h1>
        </div>
      </div>
      <div className="cta">
        <h1>Work with us</h1>
        <p>We are in the business of scaling and expanding.</p>
        <p>
          Doubling in size in the past 3-4 years, we aim to double again in
          thenext.
        </p>
        <p>
          We are always excited to learn about prime franchise opportunities
          andreach new locations.
        </p>
      </div>
      <div className="Crow">
        <div className="Ccolumn Cleft">
          <h2 style={{ color: "orange" }}>You can find us at</h2>
          <div className="Contactinfo">
            <div>
              <h5>EMAIL</h5>
              <p>
                <FaMailBulk className="reacticons2" />
                hello@tyler.com
              </p>
            </div>
            <div>
              <h5>PHONE NUMBER</h5>
              <p>
                <FaPhoneAlt className="reacticons2" />
                202-555-0188
              </p>
            </div>
            <div>
              <h5>LOCATION</h5>
              <p>
                <FaMapMarkedAlt className="reacticons2" />
                2360 Hood Avenue, San Diego, CA, 92123
              </p>
            </div>
          </div>
        </div>
        <div className="Ccolumn Cright">
          <h2 style={{ color: "orange" }}>Let's get in touch for inquiries</h2>
          <input type="text" placeholder="Your Name"></input>
          <br />
          <input type="text" placeholder="Your Email"></input>
          <br />
          <input type="text" placeholder="Message"></input>
          <br />
          <Button name="Send Message" />
        </div>
      </div>
      <div className="ins">
        <h1 style={{ color: "orange" }}>We are optimists who love to </h1>
        <h1 style={{ color: "orange" }}>work together</h1>
        <img src="http://www.prenlyn.com/wp-content/uploads/2021/11/avatar_1.jpg" />
        <img src="http://www.prenlyn.com/wp-content/uploads/2021/11/avatar_2.jpg" />
        <img src="http://www.prenlyn.com/wp-content/uploads/2021/11/avatar_3.jpg" />
        <img src="http://www.prenlyn.com/wp-content/uploads/2021/11/avatar_4.jpg" />
      </div>
    </div>
  );
}

export default Contact;
