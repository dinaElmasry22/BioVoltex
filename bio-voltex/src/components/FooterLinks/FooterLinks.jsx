/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer-links.scss";
import linkedin from "../../assets/linkedin-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import youtube from "../../assets/youtube-icon.svg";
import twitter from "../../assets/twitter-icon.svg";

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <a href="#" className="logo">BIOVOLTEX</a>
      <div className="footer-links__container">
        <div>
          <p>
            We help you obtain a Device that preserves the Environment and
            produces gas and electricity from food waste
          </p>

          <div className="social-media__contact">
            
            <a href="#"><img src={linkedin} alt="linkedin" /></a>
            <a href="#"><img src={facebook} alt="facebook" /></a>
            <a href="#"><img src={youtube} alt="youtube" /></a>
            <a href="#"><img src={twitter} alt="twitter" /></a>
          </div>
          <p>@ 2024 Biovoltex,All Right Deserved</p>
        </div>
      
      <div>
        <ul>
          <li>
            <a href="#">About Biovoltex</a>
          </li>
          <li>
            <a href="#">Our Article</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">EN</a> /{" "}
            <a href="#" className="lang">
              AR
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default FooterLinks;
