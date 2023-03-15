import React from 'react';
import Left from '../component/Left';
import RightEmail from "../component/RightEmail";

const EmailVerification = () => {
  return (
    <div className='wrapper'>
        <Left imageProps="emailVerify"/>
        <RightEmail />
    </div>
  )
}

export default EmailVerification