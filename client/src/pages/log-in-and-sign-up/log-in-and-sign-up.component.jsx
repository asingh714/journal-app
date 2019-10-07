import React from "react";
import { connect } from "react-redux";

import { loginUser } from "../../redux/actions/user.actions";
import useForm from "../../customHooks/useForm";

import "./log-in-and-sign-up.component.styles.scss";

const LogInAndSignUp = ({ loginUser, history }) => {
  const handleLogin = event => {
    if (event) event.preventDefault();
    loginUser(loginInput);
    history.push('/journal');
  };

  const handleSignin = event => {
    if (event) event.preventDefault();
    console.log("Clicked");
  };

  const [loginInput, handleLoginChanges, handleLoginSubmit] = useForm(
    handleLogin
  );
  const [signinInput, handleSigninChanges, handleSigninSubmit] = useForm(
    handleSignin
  );

  return (
    <div className="page-container">
      <div className="log-in-sign-in-container">
        <form className="log-in-container" onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <input
            name="username"
            placeholder="Username"
            onChange={handleLoginChanges}
            type="text"
            value={loginInput.username || ""}
          />
          <input
            name="password"
            placeholder="Password"
            onChange={handleLoginChanges}
            type="password"
            value={loginInput.password || ""}
          />
          <button type="submit">Login</button>
        </form>

        <form className="sign-in-container" onSubmit={handleSigninSubmit}>
          <h2>Sign Up</h2>
          <input
            name="name"
            placeholder="Name"
            onChange={handleSigninChanges}
            type="text"
            value={signinInput.name || ""}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleSigninChanges}
            type="email"
            value={signinInput.email || ""}
          />
          <input
            name="username"
            placeholder="Username"
            onChange={handleSigninChanges}
            type="text"
            value={signinInput.username || ""}
          />
          <input
            name="password"
            placeholder="Password"
            onChange={handleSigninChanges}
            type="password"
            value={signinInput.password || ""}
          />
          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleSigninChanges}
            type="password"
            value={signinInput.confirmPassword || ""}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default connect(
  null,
  { loginUser }
)(LogInAndSignUp);
