import React, { useEffect } from "react";
import "./home.scss";
import profitVector from "../../assets/profits.svg";
import home from "../../assets/home.svg";
import whyApp from "../../assets/why-app.svg";
import howWorks from "../../assets/how-work.svg";
import howGet from "../../assets/how-get.svg";
import pay from "../../assets/pay.svg";

const Home = () => {
  useEffect(() => {
    const visaBtn = document.getElementById("visa");
    const fawryBtn = document.getElementById("fawry");

    const visaInfo = document.querySelector(".visa-info");
    const fawryInfo = document.querySelector(".fawry-info");

    visaBtn.onclick = () => {
      fawryInfo.style.display = "none";
      visaInfo.style.display = "block";
    };

    fawryBtn.onclick = () => {
      fawryInfo.style.display = "block";
      visaInfo.style.display = "none";
    };

    let submitBtn = document.querySelector(".submit-btn");
    submitBtn.onclick = (event) => {
      // Clear previous error messages
      document.getElementById("nameError").textContent = "";
      document.getElementById("phoneNumberError").textContent = "";
      document.getElementById("cardNameError").textContent = "";
      document.getElementById("cardNumberError").textContent = "";
      document.getElementById("expiryDateError").textContent = "";
      document.getElementById("cvvError").textContent = "";

      // Get form values
      const name = document.getElementById("name").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
      const cardName = document.getElementById("cardName").value;
      const cardNumber = document.getElementById("cardNumber").value;
      const expiryDate = document.getElementById("expiryDate").value;
      const cvv = document.getElementById("cvv").value;

      let isValid = true;

      // Name validation
      if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
      }

      // Phone number validation
      const phonePattern = /^[0-9]{10}$/;
      if (phoneNumber.trim() === "") {
        document.getElementById("phoneNumberError").textContent ="Phone number is required";
        isValid = false;
      } else if (!phonePattern.test(phoneNumber)) {
        document.getElementById("phoneNumberError").textContent ="Invalid phone number";
        isValid = false;
      }

      // Cardholder name validation
      const cardNamePattern = /^[a-zA-Z ]+$/;
      if (cardName.trim() === "") {
        document.getElementById("cardNameError").textContent ="Cardholder name is required";
        isValid = false;
      } else if (!cardNamePattern.test(cardName)) {
        document.getElementById("cardNameError").textContent ="Invalid cardholder name";
        isValid = false;
      }

      // Card number validation
      const cardNumberPattern = /^[0-9]{16}$/;
      if (cardNumber.trim() === "") {
        document.getElementById("cardNumberError").textContent ="Card number is required";
        isValid = false;
      } else if (!cardNumberPattern.test(cardNumber)) {
        document.getElementById("cardNumberError").textContent ="Invalid card number";
        isValid = false;
      }

      // Expiry date validation
      const expiryDatePattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
      if (expiryDate.trim() === "") {
        document.getElementById("expiryDateError").textContent ="Expiry date is required";
        isValid = false;
      } else if (!expiryDatePattern.test(expiryDate)) {
        document.getElementById("expiryDateError").textContent ="Invalid expiry date";
        isValid = false;
      }

      // CVV validation
      const cvvPattern = /^[0-9]{3,4}$/;
      if (cvv.trim() === "") {
        document.getElementById("cvvError").textContent = "CVV is required";
        isValid = false;
      } else if (!cvvPattern.test(cvv)) {
        document.getElementById("cvvError").textContent = "Invalid CVV";
        isValid = false;
      }

      if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    };
  }, []);
  return (
    <div className="home-page">
      <div className="welcome-sec">
        <svg
          viewBox="0 0 1728 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M869.012 0H0V1029H1728V923.773H1320.01C1113.77 923.773 925.357 806.839 833.815 622.023C772.409 498.048 760.681 355.299 801.03 222.964L869.012 0Z"
            fill="#009589"
          />
        </svg>

        <div className="content">
          <div className="cont">
            <div className="left">
              <h1>Welcome</h1>
              <p>
                Now, you can exploit your surplus food to achieve the largest
                possible profit by producing biogas that is used for heat,
                operating the stove, and producing electricity and fertilizer
                needed to nourish the soil, which preserves the environment.
              </p>
              <button>Learn More</button>
            </div>
            <div className="right">
              <img src={home} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="profit-sec section__margin">
        <div className="flex-profit-section">
          <div className="left">
            <h2 class="ribbon">Profits From BIOVOLTEX</h2>
            <ol>
              <li>
                Dispose of leftover food by recycling it, which preserves the
                environment .
              </li>
              <li>
                The rest of the food inside the device is converted into biogas
                that can be used to ignite the stove.
              </li>
              <li>
                Biogas can be used to generate electricity, which helps overcome
                the power outage crisis.
              </li>
              <li>
                The final product of recycling leftover food is organic
                fertilizer, which is an essential source of food for the soil.
              </li>
            </ol>
          </div>
          <div className="right">
            <img src={profitVector} alt="profit Vector" />
          </div>
        </div>
      </div>
      <section className="section__margin">
        <div className="row">
          <div className="col">
            <h3>Why the App !</h3>
            <p>
              The App allows controlling the gas outlet opening to the stove or
              generator. You can also sell the fertilizer resulting from the
              process of converting food into gas.
            </p>
            <img src={whyApp} alt="" />
          </div>
          <div className="col">
            <h3>How it Works !</h3>
            <p>
              Our device works based on an Application to control the device.
            </p>
            <img src={howWorks} alt="" />
            <span>
              Download The App. <a href="hr">Click Here &gt;</a>
            </span>
          </div>
          <div className="col">
            <h3>How to Get ?!</h3>
            <p>
              Enter your data and paying for it, you will receive a confirmation
              message for the purchase and it will reach you within a week. At
              that time , you can operate the device easily by following the
              operating instructions.
            </p>
            <img src={howGet} alt="" />
          </div>
        </div>
      </section>
      <div className="numbers">
        <h2>Latest News</h2>
        <div className="row">
          <div className="col">
            <span>
              6,887,999 <span>D/Year</span>
            </span>
            <h3>Number of devices sold</h3>
          </div>
          <div className="col">
            <span>
              13333 <span>L/Year</span>
            </span>
            <h3>Gas Production Rate</h3>
          </div>
        </div>
      </div>
      <div className="paying">
        <form action="">
          <p>We are pleased to have you join US.</p>
          <div className="row">
            <div className=".left">
              <label htmlFor="name">Your Name : </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Full Name"
              />
              <span id="nameError" class="error"></span>
              <label htmlFor="phone-num">Phone Number : </label>
              <input
                type="text"
                id="phoneNumber"
                name="phone-num"
                placeholder="+0201XXXXXXXXX"
              />
              <span id="phoneNumberError" class="error"></span>
            </div>
            <div className="right">
              <img src={pay} alt="" />
            </div>
          </div>
          <p>
            In order to provide the best service we provide you with two payment
            methods , Please choose one :{" "}
          </p>
          <div className="radio-btn">
            <div>
              <input
                type="radio"
                id="visa"
                name="options"
                value="visa"
                checked
              />
              <label for="visa">Visa</label>
            </div>

            <div>
              <input
                type="radio"
                id="fawry"
                name="options"
                value="fawry"
              ></input>
              <label for="fawry">Fawry</label>
            </div>
          </div>
          <div className="visa-info">
            <label htmlFor="card-name">Name on Card : </label>
            <input
              type="text"
              id="cardName"
              name="card-name"
              placeholder="Write the name on the card here"
            />
            <span id="cardNameError" class="error"></span>
            <label htmlFor="card-num">Card Number : </label>
            <input
              type="text"
              id="cardNumber"
              name="card-num"
              placeholder="Enter the card number"
            />
            <span id="cardNumberError" class="error"></span>

            <div className="visa-row">
              <div>
                <label htmlFor="expiry-date">Expiry Date : </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiry-date"
                  placeholder="month/year"
                />
                <span id="expiryDateError" class="error"></span>
              </div>
              <div>
                <label htmlFor="cvv">CVV : </label>
                <input type="text" id="cvv" name="cvv" placeholder="123" />
                <span id="cvvError" class="error"></span>
              </div>
            </div>
          </div>
          <div className="fawry-info">
            <label htmlFor="total">Please go to FAWRY outlet to pay : </label>
            <input
              type="text"
              id="total"
              name="total"
              placeholder="The total amount is  1200$"
              disabled
            />

            <label htmlFor="transfer-num">
              Please transfer the amount to the following number :{" "}
            </label>
            <input
              type="text"
              id="transfer-num"
              name="transfer-num"
              placeholder="01276721733"
              disabled
            />
          </div>
          <button className="back-btn">Back</button>
          <button className="submit-btn">Confirm Payment 1200$</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
