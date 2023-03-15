import React from "react";
// import LeftImg from "../../images/left.png";
import LeftImg from "./../images/left.png";
import LeftImgOtp from "./../images/leftotp.png";
import EmailVerifyImg from "./../images/emailverify.png";


const Left = ({ imageProps }) => {
  return (
    <div className="left-div">
      {imageProps == "mobileotp" ? (
        <img src={LeftImgOtp} alt="LeftImg" className="left-img" />
      ) : imageProps == "emailVerify" ? (
        <img src={EmailVerifyImg} alt="LeftImg" className="left-img" />
      ) : (
        <img src={LeftImg} alt="LeftImg" className="left-img" />
      )}
      {/* <img  src={LeftImg} alt="LeftImg" className='left-img'/> */}
    </div>
  );
};

export default Left;
