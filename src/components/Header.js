import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // get the online status
  const onLineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL} alt="logo" className="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/" className="link-without-underline">
                OnLine Status {onLineStatus ? "🟢" : "🔴"}
              </Link>
            </li>
            <li>
              <Link to="/" className="link-without-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-without-underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-without-underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/grocery" className="link-without-underline">
                Grocery
              </Link>
            </li>
            <li>
              <Link to="/" className="link-without-underline">
                Cart
              </Link>
            </li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
