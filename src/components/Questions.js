import React from "react";
import "../assets/css/main.css";
import Button from "./button";

function Questions() {
  return (
    <div className="questions questions-background">
      <div className="mtext">
        <h2 style={{ color: "orange" }}>QUESTIONS?</h2>
        <p>Whether you're curious about Services, or features, we're</p>
        <p>here to answer any questions.</p>
        <Button name="Let's Talk Now" />
      </div>
    </div>
  );
}

export default Questions;
