import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { logoutUser } from "../../redux/actions/user.actions";

import "./nav.styles.scss";

const Nav = ({ entries, logoutUser, isLoggedIn, ...props }) => {
  const logout = () => {
    logoutUser();
    props.history.push("/");
  };

  
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      {isLoggedIn ? <NavLink to="/journal">Journal</NavLink> : null}
      <NavLink to="/signin" onClick={isLoggedIn ? logout : null}>
        {isLoggedIn ? "Sign Out" : "Login / Sign Up"}
      </NavLink>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    entries: state.entries.entries,
    isLoggedIn: state.user.isLoggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Nav)
);
