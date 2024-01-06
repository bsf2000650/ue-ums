import React from "react";
// import "./SignUp.css";
import './Login.css'
import {FaGenderless, FaLock, FaPhone, FaUser } from 'react-icons/fa';
import {IoMdCalendar} from 'react-icons/io'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="loginMainWrapper"></div>
      <div  className="loginMainWrapper1">
        <div className="leftDiv">
          <p className="element">University of Education</p>
          <p className="element1">Truth, the ultimate virture</p>
        </div>
        <div  className="loginDetailsDiv">
            <form action="your_server_endpoint" method="post">
              <label htmlFor="emailOrPhone">
                <FaPhone className="reactIcons" />
                <input
                  type="text"
                  id="emailOrPhone"
                  name="emailOrPhone"
                  placeholder="Email or Phone Number"
                  required
                />
              </label>

              <label htmlFor="password">
                <FaLock className="reactIcons" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </label>
              <button type="submit">Login</button>
              <p>Forgot Account</p>
              <p>Forgot Password</p>
              <Link to='/'>Register/SignUp</Link>
            </form>
          </div>
        </div>
    </>
  );
};

export default Login;
