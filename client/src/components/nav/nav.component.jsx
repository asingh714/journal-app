import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.styles.scss";

const Nav = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/journal">Journal</NavLink>
      <NavLink to="/signin">Login / Sign Up</NavLink>
    </nav>
  );
};

export default Nav;
