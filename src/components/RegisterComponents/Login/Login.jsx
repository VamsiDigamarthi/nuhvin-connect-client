import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Login.css";
import { FaUserLarge } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/features/tokenSlice";
export const Login = () => {
  const [logInFormData, setLogInFormData] = useState({
    email: "",
    password: "",
  });

  const [IsPasswordVisible, setIsPasswordVisible] = useState(false);
  const onChangeChange = (e) => {
    setLogInFormData({ ...logInFormData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const { loading, token, error } = useSelector((state) => state.token);

  console.log(loading);
  console.log(token);
  console.log(error);

  const LogInFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(logInFormData));
  };

  return (
    <motion.div
      className="LogInForm"
      // initial={{
      //   x: LogInFormAnimations.x,
      //   opacity: LogInFormAnimations.opacity0,
      // }}
      // animate={{
      //   x: LogInFormAnimations.x0,
      //   opacity: LogInFormAnimations.opacity1,
      // }}
      // exit={{
      //   x: LogInFormAnimations.x,
      //   // opacity: LogInFormAnimations.opacity0,
      // }}
      // transition={{
      //   duration: LogInFormAnimations.duration,
      //   // delay: (LogInFormAnimations.duration / 3) * 0,
      // }}
    >
      <form className="LogInForm_Page_Form" onSubmit={LogInFormSubmit}>
        <div className="LogInForm_Page_Input_Field_Container">
          <label htmlFor="email">Email* </label>
          <div className="LogInForm_Page_Input_Field_Section">
            <FaUserLarge size={14} />
            <input
              id="email"
              type="text"
              name="email"
              value={logInFormData.email}
              onChange={onChangeChange}
              placeholder="Enter Email"
            />
          </div>
        </div>

        <div className="LogInForm_Page_Input_Field_Container">
          <label htmlFor="password">Password*</label>
          <div className="LogInForm_Page_Input_Field_Section">
            <MdLock size={20} />
            <input
              id="password"
              type={IsPasswordVisible ? "text" : "password"}
              name="password"
              value={logInFormData.password}
              onChange={onChangeChange}
              placeholder="Enter Password"
            />
            <div
              onClick={() => setIsPasswordVisible(!IsPasswordVisible)}
              className="LogInForm_Page_Input_Field_Password_Visibility_Controller"
            >
              {IsPasswordVisible ? (
                <IoIosEyeOff size={20} />
              ) : (
                <IoIosEye size={20} />
              )}
            </div>
          </div>
        </div>

        <div className="LogInForm_Page_Button_Container">
          <button type="submit">Log In</button>
        </div>
        <div className="dot-have-account">
          <span>
            Forgot User Name/Password <span>Click Here</span>
          </span>

          <span>
            Do not have Account? <span>Register</span>
          </span>
        </div>
      </form>
    </motion.div>
  );
};
