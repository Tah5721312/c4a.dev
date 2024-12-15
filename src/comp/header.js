/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className="myheader">
      {user && <h3>tahhhhh</h3>}
      <header className="hide-when-mobile ali">
        <h1>
        
          <Link to="/">c4a.dev</Link>
        
        </h1>
      
      
      
        {/* <button
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="theme-btn"
        >
          {theme}
        </button> */}

        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-moon"
        ></i>
        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-sun"
        ></i>

        <ul className="flex">
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signin">
                Sign-in
              </NavLink>
            </li>
          )}
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signup">
                Sign-up
              </NavLink>
            </li>
          )}
                {user && (
            <li onClick={() => {
              signOut(auth).then(() => {
              console.log("Sign-out successful"); // Sign-out successful.
              navigate("/signin");

              }).catch((error) => {
                // An error happened.
              });
              
            }} className="main-list">
              <button className="main-link signout">
                Sign-out
              </button>
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/about">
                About
              </NavLink>
              {/* <ul className="sub-ul">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">Crash Course</a>
                </li>
                <li>
                  <a href="">learn in 1h</a>
                </li>
              </ul> */}
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Profile">
                Profile
              </NavLink>
              
            </li>
          )}
        </ul>
      </header>

      {/***********
        when-mobile 
        *******/}

      <header className="show-when-mobile ali">
  
        <ul className="flex">
        {/* <h1>c4a.dev</h1> */}

          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signin">
                Sign-in
              </NavLink>
            </li>
          )}
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signup">
                Sign-up
              </NavLink>
            </li>
          )}
                {user && (
            <li onClick={() => {
              signOut(auth).then(() => {
              console.log("Sign-out successful"); // Sign-out successful.
              navigate("/signin");

              }).catch((error) => {
                // An error happened.
              });
              
            }} className="main-list">
              <button className="main-link signout">
                Sign-out
              </button>
            </li>
          )}

        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-moon"
        ></i>
        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-sun"
        ></i>

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/about">
                About
              </NavLink>
              {/* <ul className="sub-ul">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">Crash Course</a>
                </li>
                <li>
                  <a href="">learn in 1h</a>
                </li>
              </ul> */}
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Profile">
                Profile
              </NavLink>
              
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
