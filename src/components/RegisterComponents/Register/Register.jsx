import React from "react";
import "./Register.css";
import { Login } from "../Login/Login";
const Register = () => {
  return (
    <div className="register-main-card">
      <div className="register-second-main-card">
        <div className="register-left-side">
          <img src="/images/register-image-2.png" alt="register" />
        </div>
        <div className="register-right-side">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Register;
