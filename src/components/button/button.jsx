import React from "react";
import "./button.css";
import cv from '../props/Ahmed Elhdad22.pdf'

function Buttons() {


  return (
    <div className="container button-container">
      <a href={cv} className="btn pri" target={"blank"}>
         Download CV
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>
    </div>
  );
}

export default Buttons;
