import React from "react";
import "../assets/css/main.css";
import Iframe from "../components/Iframe";
import Data from "./map.js";

const dataComp = Data.map((data) => {
  return (
    <Iframe
      key={data.key}
      source={data.link}
      heading={data.heading}
      address={data.adress}
      email={data.email}
      number={data.contact}
    />
  );
});

function Location() {
  return (
    <div>
      <div>
        <div className="Heading-Section">
          <div className="Heading-Intro">
            <h1 style={{ color: "orange" }}>Locations</h1>
          </div>
        </div>
        <div className="LContents Lheading">
          <h1>Midas Locations</h1>
          <h5>PA Shops - Prenlyn Enterprises, Prenlyn II Corporation</h5>
          <p>
            We develop support systems in place to ensure each of location is
            success
          </p>
        </div>
        <div>{dataComp}</div>
      </div>
    </div>
  );
}

export default Location;
