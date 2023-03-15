import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HttpClient from "../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./ModalNotification";
import TopEmail from "./../images/topemail.png";
import SmallLogo from "./../images/smalllogo.png";

const RightEmail = () => {
  const userMobileNumber = reactLocalStorage.get("userMobileNumber");
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const handleChangeMobileNumber = (e) => {
    setEmailValue(e.target.value);
  };
  const sendEmailToVerify = async () => {
    reactLocalStorage.set("userEmail", emailValue);
    // setIsModal(!isModal);
    let data = new FormData();
    data.append("mobile", userMobileNumber);
    data.append("email", emailValue);
    let result = await HttpClient.fileUplode("/send-email-otp", "POST", data);
    // console.log("result of email", result);
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
    navigate("/email-otp");
  };
  return (
    <>
      <div className="right-div">
      <ToastContainer />
        <div className="top-right-otp">
          <img src={SmallLogo} alt="SmallLogo" className="right-img" />
          <p className="small-logo-text">Email Verification</p>
        </div>
        <div className="text-otp">Email Address</div>
        <div className="text-otp-sub">
          Enter your Email. We will send you a link which you can verify even
          later!
        </div>
        <div className="down-right-opt">
          <input
            type="email"
            className="input e-input"
            placeholder="Enter Email Address"
            value={emailValue}
            onChange={handleChangeMobileNumber}
          />
          <div className="otp-box"></div>
          {emailValue == "" ? (
            <button className="btn-opt">Send Link</button>
          ) : (
            <button className="btn-opt-active" onClick={sendEmailToVerify}>
              Send Link
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
        <Modal isOpen={isModal} callBack={callBack} imageType="email" />
      </div>
    </>
  );
};

export default RightEmail;
