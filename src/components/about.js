import React from "react";
import "../assets/css/main.css";
import Values from "./Values.js";

function About() {
  const mystyles = {
    width: "2%",
    height: "2%",
    margin: "5% 49% 0",
    opacity: "0.3",
  };

  const Ppadding = {
    marginTop: "2%",
  };

  return (
    <div>
      <div className="Heading-Section">
        <div className="Heading-Intro">
          <h1 style={{ color: "orange" }}>About</h1>
        </div>
      </div>

      <div className="aboutH">
        <p>
          The <strong>Prenlyn Automotive Group</strong> is a family owned
          company that currently operates 24 Midas Tire
        </p>
        <p>& Auto franchises throughout Philadelphia & Central New Jersey.</p>
      </div>
      <div className="Arow">
        <div className="Acolumn Aleft">
          <h1>History</h1>
          <p>
            The name “Prenlyn” comes from the company’s co-founders Prentice &
            Evelyn Beers (Pren + lyn). Prentice, Evelyn & their son Tracy
            started with one Midas location in 1976. In 1978 Tracy’s
            brother-in-law Herb Hollinger joined the company. Together Tracy &
            Herb grew the business by opening new locations & acquiring existing
            franchises. In 2010 Tracy’s sons Brian & Chris Beers joined the
            business and learned everything from the ground up. In 2015 Brian
            took over as President of the company and Chris as Vice President.
            At this point the company operated 6 locations in the Philadelphia
            market.
          </p>
        </div>
        <div className="Acolumn Aright">
          <img src="http://www.prenlyn.com/wp-content/uploads/2022/02/Prenlyn-Automotive-Group-1024x574.jpg" />
        </div>
      </div>
      <div className="AboutBelow">
        <p style={Ppadding}>
          In 2016 Brian & Chris started expanding the company by acquiring
          existing locations & opening new locations. In 2021 Prenlyn expanded
          into New Jersey acquiring 7 locations in a single transaction.
        </p>
        <h1>Recognition</h1>
        <p>
          Prenlyn is considered to be one of the most well respected Midas
          franchisees in the system. Both Brian and Chris sit on multiple
        </p>
        <p>boards that help strengthen the brand. </p>
        <p>
          They have been recognized as the Franchisee of the year multiple times
          including in 2018, 2019.{" "}
        </p>
        <p>Prenlyn Automotive Group is headquartered in Blue Bell, PA</p>
      </div>
      {/* <div className="goal">
        <div className="Gimg-container">
          <img src="http://www.prenlyn.com/wp-content/uploads/2022/04/mission-removebg-preview.png" />
        </div>
        <div className="Gimg-container">
          <img src="http://www.prenlyn.com/wp-content/uploads/2022/04/aim-removebg-preview.png" />
        </div>
      </div> */}
      <Values />
      <div className="Testimony">
        <img
          style={mystyles}
          src="http://www.prenlyn.com/wp-content/uploads/2021/11/quotes.svg"
        />
        <h3>
          “Prenlyn Automotive Group has an amazing team of hard working
          professionals. It has been a pleasure to meet them.”
        </h3>
        <img src="http://www.prenlyn.com/wp-content/uploads/2021/11/avatar_on_about.png" />
        <p>
          <strong>Emily Davis</strong>
        </p>
      </div>
    </div>
  );
}

export default About;
