import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HttpClient from "../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./ModalNotification";
import TopOtp from "./../images/topotp.png";
import SmallLogo from "./../images/smalllogo.png";

const RightOtp = () => {
  const userMobileNumber = reactLocalStorage.get("userMobileNumber");
  // console.log(userMobileNumber);
  const navigate = useNavigate();
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const changeOtpToVerify = async () => {
    // console.log("otp", otp1 + otp2 + otp3 + otp4 + otp5 + otp6);
    // setIsModal(!isModal);
    let otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
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
            <span>+91{" "}{userMobileNumber}</span>
          </div>
          <p style={{textAlign: "center"}}>
            <a href="http://" className="number">
              Edit Mobile Number
            </a>
          </p>
          <div className="otp-box">
            <input
              type="text"
              className="otp-input"
              value={otp1}
              maxLength={1}
              onChange={(val) => {
                // setOtp1(val.target.value)
                if (val.target.value.match("^[0-9 ]*$") != null) {
                  setOtp1(val.target.value);
                }
              }}
            />
            <input
              type="text"
              className="otp-input"
              value={otp2}
              maxLength={1}
              onChange={(val) => {
                // setOtp1(val.target.value)
                if (val.target.value.match("^[0-9 ]*$") != null) {
                  setOtp2(val.target.value);
                }
              }}
            />
            <input
              type="text"
              className="otp-input"
              value={otp3}
              maxLength={1}
              onChange={(val) => {
                // setOtp1(val.target.value)
                if (val.target.value.match("^[0-9 ]*$") != null) {
                  setOtp3(val.target.value);
                }
              }}
            />
            <input
              type="text"
              className="otp-input"
              value={otp4}
              maxLength={1}
              onChange={(val) => {
                // setOtp1(val.target.value)
                if (val.target.value.match("^[0-9 ]*$") != null) {
                  setOtp4(val.target.value);
                }
              }}
            />
            <input
              type="text"
              className="otp-input"
              value={otp5}
              maxLength={1}
              onChange={(val) => {
                // setOtp1(val.target.value)
                if (val.target.value.match("^[0-9 ]*$") != null) {
                  setOtp5(val.target.value);
                }
              }}
            />
            <input
              type="text"
              className="otp-input"
              value={otp6}
              maxLength={1}
              onChange={(val) => {
                // setOtp1(val.target.value)
                if (val.target.value.match("^[0-9 ]*$") != null) {
                  setOtp6(val.target.value);
                  setIsActiveButton(true);
                }
              }}
            />
          </div>
          <div className="timer">
            <p className="time">00 : 30</p>
            <p className="timer-text">Resend OTP</p>
          </div>
          {!isActiveButton ? (
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
