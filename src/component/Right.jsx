import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HttpClient from "../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RightTop from "./../images/topright.png";
import Logo from "./../images/Logo.png";
import Google from "./../images/google.png";
import SubLogo from "./../images/sublogo.png";
import ButtomRight from "./../images/buttom.png";

const Right = () => {
  const navigate = useNavigate();
  const [mobileValue, setMobileValue] = useState("");

  const handleChangeMobileNumber = (e) => {
    if (e.target.value.match("^[0-9 ]*$") != null) {
      setMobileValue(e.target.value);
    }
  };
  const changeToOtp = async () => {
    // reactLocalStorage.set("userMobileNumber", mobileValue);
    // navigate("/mobile-otp");
    let data = new FormData();
    data.append("channel", "Bonanza");
    data.append("mobile", mobileValue);
    data.append("user_id", 29);
    console.log("sendData", data);
    let result = await HttpClient.fileUplode(
      "/kyc-journey/step-1",
      "POST",
      data
    );
    // console.log("result of submit mobile",result);
    if (result && result.success) {
      reactLocalStorage.set("userMobileNumber", result.data.mobile);
      toast.success(result.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/mobile-otp");
      }, 2000);
    } else {
      toast.error("Error", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="right-div">
      <ToastContainer />
      <div className="top-right">
        <img src={Logo} alt="Logo" />
        {/* <img src={SubLogo} alt="SubLogo" className="right-img" /> */}
        <p className="sub-heading">
          A Trading and Investment Ecosystem built for your Success
        </p>
      </div>
      <div className="down-right">
        <p className="logo-text">Let's get started!</p>
        <div className="btn-input">
          <input
            type="text"
            className="input"
            placeholder="Enter Mobile Number"
            maxLength={10}
            value={mobileValue}
            onChange={handleChangeMobileNumber}
          />
          {mobileValue == "" ? (
            <button className="btn">Get OTP</button>
          ) : (
            <button className="btn" onClick={changeToOtp}>
              Get OTP
            </button>
          )}
        </div>
        {/* <h2 className="hr-lines">OR</h2> */}
        <h2 className="hr-lines">
          <span>OR</span>
        </h2>
        <button type="submit" className="sign-btn">
            <span className="btn-icon"><img src={Google} alt="Google" /></span>
            <span className="btn-text">Sign in with Google</span>
        </button>
      </div>
      {/* <img src={ButtomRight} alt="ButtomRight" className="buttom-img" /> */}
    </div>
  );
};

export default Right;
