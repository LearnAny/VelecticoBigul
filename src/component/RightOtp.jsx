import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HttpClient from "../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import Modal from "./ModalNotification";
import TopOtp from "./../images/topotp.png";
import SmallLogo from "./../images/smalllogo.png";

const RightOtp = () => {
  const userMobileNumber = reactLocalStorage.get("userMobileNumber");
  // console.log(userMobileNumber);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResendOtp = () => {
    setTimer(10);
   // resendOtp();
  };


  const mystyle = {
    width: "63.45px",
    height: "84.6px",
    margin: "5px",
    textAlign: "center",
    fontSize: "18px",
    background: "#ffffff",
    border: "1px solid rgba(35, 31, 32, 0.25)",
    borderRadius: "5px",
  };

  const changeOtpToVerify = async () => {
    // console.log("otp", otp );
    // setIsModal(!isModal);
    // let otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    let data = new FormData();
    data.append("mobile", userMobileNumber);
    data.append("mobile_otp", otp);
    let result = await HttpClient.fileUplode(
      "/verify-mobile-otp",
      "POST",
      data
    );
    console.log("result of otp", result);
    if (result && result.success) {
      setTimeout(() => {
        setIsModal(!isModal);
      }, 1000);
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
  const callBack = (val, val1) => {
    setIsModal(val);
    navigate("/email-verify");
  };
  return (
    <>
      <div className="right-div">
        <ToastContainer />
        <div className="top-right-otp">
          <img src={SmallLogo} alt="SmallLogo" className="right-img" />
          <p className="small-logo-text">Mobile Verification</p>
        </div>
        <div className="text-otp">Verification</div>
        <div className="down-right-opt">
          <div className="otp-text">
            <p>Enter the 6 digit OTP sent to </p>
            <span>+91 {userMobileNumber}</span>
          </div>
          <p style={{ textAlign: "center" }}>
            <a href="http://" className="number">
              Edit Mobile Number
            </a>
          </p>
          <div className="otp-box">
            <OTPInput
              value={otp}
              onChange={setOtp}
              autoFocus
              // inputStyles={mystyle}
              className={'otp-input'}
              OTPLength={6}
              otpType="number"
             
            />
          </div>
          <div className="timer">
            {
              timer > 0 ?  <p className="time">00 : {timer}</p>
              :
              null
            }
           
            <a className={timer === 0 ? "timer-text enabled" : "timer-text disabled" } 
            onClick={timer === 0 ? handleResendOtp : null}>Resend OTP</a>
          </div>
          {otp.length < 5 ? (
            <button className="btn-opt">Verify Mobile Number</button>
          ) : (
            <button className="btn-opt-active" onClick={changeOtpToVerify}>
              Verify Mobile Number
            </button>
          )}
          <p className="back">Back</p>
        </div>
      </div>
      <div
        className={isModal ? "modal fade show" : "modal fade"}
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: isModal ? "block" : "none" }}
      >
        <Modal isOpen={isModal} callBack={callBack} imageType="otp" />
      </div>
    </>
  );
};

export default RightOtp;