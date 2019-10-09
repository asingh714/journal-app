import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/Dark_Logo.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <header>
      <div className="yellow-line"></div>
      <div className="logo-nav-container">
        <NavLink exact to="/">
          <img src={logo} alt="MyJournal Logo" className="logo" />
        </NavLink>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/journal">Journal</NavLink>
          <NavLink to="/signin">Login / Sign Up</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
