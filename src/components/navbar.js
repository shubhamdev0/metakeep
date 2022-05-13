import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { resetUserSession } from "../service/AuthService";
import "../styles/navbar.scss";

function Navbar(props) {
  const location = useLocation();
  const logoutHandler = () => {
    resetUserSession();
    props.history.push("login");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler" data-toggle="open-navbar1">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <NavLink to="/">
              <h4>
                Meta<span>Keep</span>
              </h4>
            </NavLink>
          </div>

          <div className="navbar-menu" id="open-navbar1">
            <ul className="navbar-nav">
              <li>
                <NavLink exact className="active" to="/">
                  Home
                </NavLink>
              </li>
              {location.pathname === "/create-application" ? (
                <>
                  <li>
                    <a href={"login"} onClick={logoutHandler}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink activeClassName="active" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
