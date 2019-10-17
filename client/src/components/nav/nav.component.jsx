import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom'

import { logoutUser } from "../../redux/actions/user.actions";

import "./nav.styles.scss";

const Nav = ({ isLoggedIn, logoutUser, ...props }) => {

  const logout = () => {
    logoutUser();
    props.history.push("/");
  };

  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/journal">Journal</NavLink>
      <NavLink to="/signin" onClick={isLoggedIn ? logout : null}>
        {isLoggedIn ? "Sign Out" : "Login / Sign Up"}
      </NavLink>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default withRouter(connect(
  mapStateToProps,
  { logoutUser }
)(Nav));
