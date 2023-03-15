import React from "react";
import ModalMobile from "./../images/modalmobile.png";
import ModalEmail from "./../images/modalemail.png";
import EmailOtp from "./../images/emailotp.png"

const ModalNotification = ({callBack,imageType}) => {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-header">
        {imageType === "otp" ? (
            <p className="modal-text-header">Mobile Number Verified</p>
          ) : imageType === "otpEmail" ? (
            <p className="modal-text-header">Email Verified</p>
          ) :
          (
            <p className="modal-text-header">Email Link Sent</p>
          )}
          
          <button
            type="button"
            data-dismiss="modal"
            aria-label="Close"
            className="modal-btn-close"
            onClick={() => callBack(false)}
          >
            <span aria-hidden="true" className="modal-close">×</span>
          </button>
        </div>
        <div className="modal-body-inside">
          {imageType == "otp" ? (
            <img src={ModalMobile} alt="ModalMobile" className="modal-img" />
          ) : imageType === "otpEmail" ? (
            <img src={EmailOtp} alt="EmailOtp" className="modal-img" />
          ) : (
            <img src={ModalEmail} alt="ModalEmail" className="modal-img" />
          )}
        
        </div>
      </div>
    </div>
  );
};

export default ModalNotification;
