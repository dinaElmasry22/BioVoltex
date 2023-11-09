/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navbar.scss";
import avatar from "../../assets/avatar.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <a href="#" className="logo">BIOVOLTEX</a>
        <div className="navbar__discover-link">
          <a href="m">Discover BioVoltex 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="#00485E"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg></a>
          
        </div>
      </div>
      <div className="navbar__right">
        <a>Be a Mentor</a>
        <div className="separator"></div>
        <a href="#"><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_334_1076)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.4941 3.80103C20.5891 5.02203 22.0631 7.50103 21.9981 10.393C21.9171 14.003 19.1081 17.187 14.3191 20.031C13.6091 20.453 12.8611 21 12.0001 21C11.1551 21 10.3751 20.443 9.68007 20.03C4.89307 17.187 2.08307 14.002 2.00207 10.393C1.93707 7.50103 3.41107 5.02303 5.50607 3.80103C7.46607 2.66003 9.92807 2.65303 12.0001 4.33803C14.0721 2.65303 16.5341 2.65903 18.4941 3.80103ZM17.4871 5.53003C16.0931 4.71803 14.3511 4.74703 12.8431 6.27303C12.7326 6.38424 12.6013 6.4725 12.4566 6.53272C12.3119 6.59295 12.1568 6.62396 12.0001 6.62396C11.8434 6.62396 11.6882 6.59295 11.5435 6.53272C11.3988 6.4725 11.2675 6.38424 11.1571 6.27303C9.64907 4.74703 7.90707 4.71803 6.51307 5.53003C5.06907 6.37203 3.95307 8.15803 4.00207 10.35C4.05807 12.861 6.04207 15.544 10.7021 18.312C11.1101 18.555 11.5361 18.866 12.0001 18.995C12.4641 18.866 12.8901 18.555 13.2981 18.312C17.9581 15.544 19.9421 12.862 19.9981 10.349C20.0481 8.15903 18.9311 6.37203 17.4871 5.53003Z"
              fill="#00485E"
            />
          </g>
          <defs>
            <clipPath id="clip0_334_1076">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg></a>
        <a href="#"><svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
        >
          <path
            d="M11.4286 23.4286H14.8571M2 10.3486C2.00092 8.71682 2.39006 7.10869 3.13526 5.65704C3.88046 4.20539 4.96035 2.95186 6.28571 2M24.2857 10.3486C24.2848 8.71682 23.8957 7.10869 23.1505 5.65704C22.4052 4.20539 21.3254 2.95186 20 2M20 10.5714C20 8.7528 19.2776 7.00866 17.9916 5.7227C16.7056 4.43673 14.9615 3.71429 13.1429 3.71429C11.3242 3.71429 9.58009 4.43673 8.29412 5.7227C7.00816 7.00866 6.28571 8.7528 6.28571 10.5714V16.5714C6.28571 17.2534 6.0148 17.9075 5.53256 18.3897C5.05032 18.8719 4.39627 19.1429 3.71429 19.1429H22.5714C21.8894 19.1429 21.2354 18.8719 20.7532 18.3897C20.2709 17.9075 20 17.2534 20 16.5714V10.5714Z"
            stroke="#00485E"
            stroke-width="2.28571"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg></a>
        <a href="#"><img src={avatar} alt="avatar" /></a>
      </div>
    </div>
  );
};

export default Navbar;
