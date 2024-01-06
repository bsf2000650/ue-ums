import React from "react";
import "./SignUp.css";
import {FaGenderless, FaLock, FaPhone, FaUser } from 'react-icons/fa';
import {IoMdCalendar} from 'react-icons/io'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <div className="mainWrapper"></div>
      <div className="mainWrapper1">
        <div className="leftDiv">
          <p className="element">University of</p>
          <p className="element">Education</p>
          <p className="element1">Truth, the ultimate virture</p>
        </div>
        <div className="signUpDetailsDiv">
            <form action="your_server_endpoint" method="post">
              <div className="names">
             
              </div>
              <label htmlFor="firstName">
                <FaUser className="reactIcons" />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </label>

              <label htmlFor="lastName">
                <FaUser className="reactIcons" />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </label>

              <div className="names">
             
              </div>
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
             

              <label htmlFor="dob">
                <IoMdCalendar className="reactIcons" />
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  placeholder="Date of Birth"
                  required
                />
              </label>

              <label htmlFor="gender">
                <FaGenderless className="reactIcons" />
                <select id="gender" name="gender" required>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <button type="submit">Sign Up</button>
              <p>
                Already have an <Link to="/login">Account</Link>
              </p>
            </form>
          </div>
        </div>
    </>
  );
};

export default SignUp;
