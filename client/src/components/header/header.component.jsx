import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "../nav/nav.component"
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
        <Nav />
      </div>
    </header>
  );
};

export default Header;
