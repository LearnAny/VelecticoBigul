import React from "react";
import Left from "../component/Left";
import RightOtp from "../component/RightOtp";

const MobileOtp = () => {
  return (
    <div className="wrapper">
      <Left imageProps="mobileotp"/>
      <RightOtp />
    </div>
  );
};

export default MobileOtp;
