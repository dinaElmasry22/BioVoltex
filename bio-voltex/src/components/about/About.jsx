import React from "react";
import "./about.scss";
import aboutVector from "../../assets/about-vector.svg";

const about = () => {
  return (
    <div className="about-section section__margin">
      <div className="left">
        <div className="title">
          <h2>BIOVOLTEX</h2>
          <span>is The future</span>
        </div>
        <p>
          In the middle of 2023, it began to increase the rate of electricity
          consumption from the normal rate, and therefore to increase the number
          of electronic devices that keep pace with the modern era, so the
          crisis of the continuation of power outages appeared for long periods,
          which negatively affected many commercial and other educational
          activities, so we thought of inventing a device that plays a role in
          storing and generating electricity through food residues.
        </p>
      </div>
      <div className="right">
        <img src={aboutVector} alt="vector" />
      </div>
    </div>
  );
};

export default about;
