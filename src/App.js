import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MobileVerification from './pages/MobileVerification';
import MobileOtp from "./pages/MobileOtp";
import EmailVerification from "./pages/EmailVerification";
import EmailOtpp from "./pages/EmailOtpp";
import './App.css';

function App() {
  return (
    <>
      {/* <MobileVerification /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MobileVerification />} />
          <Route path="/mobile-otp" element={<MobileOtp />} />
          <Route path="/email-verify" element={<EmailVerification />} />
          <Route path="/email-otp" element={<EmailOtpp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
