import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { logoutUser } from "../../redux/actions/user.actions";

import "./nav.styles.scss";

const Nav = ({ entries, logoutUser, ...props }) => {
  const logout = () => {
    logoutUser();
    props.history.push("/");
  };

  
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      {entries.length ? <NavLink to="/journal">Journal</NavLink> : null}
      <NavLink to="/signin" onClick={entries.length ? logout : null}>
        {entries.length ? "Sign Out" : "Login / Sign Up"}
      </NavLink>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    entries: state.entries.entries
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Nav)
);
