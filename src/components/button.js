import React from "react";
import "../assets/css/main.css";

function Button(props) {
  return (
    <div className="btn">
      <div>
        <p>
          <strong>{props.name}</strong>
        </p>
      </div>
    </div>
  );
}

export default Button;
