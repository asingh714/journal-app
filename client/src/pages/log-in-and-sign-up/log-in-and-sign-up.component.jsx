import React from "react";
import { connect } from "react-redux";

import { loginUser, registerUser } from "../../redux/actions/user.actions";
import useForm from "../../customHooks/useForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import "./log-in-and-sign-up.component.styles.scss";

const LogInAndSignUp = ({ loginUser, registerUser, history }) => {
  const handleLogin = event => {
    if (event) event.preventDefault();
    loginUser(loginInput);
    history.push("/journal");
  };

  const handleSignin = event => {
    if (event) event.preventDefault();
    registerUser(signinInput)
    history.push("/journal");
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
        <form className="log-in-container">
          <h2 className="header">Login</h2>
          <FormInput
            name="username"
            placeholder="Username"
            handleChange={handleLoginChanges}
            type="text"
            value={loginInput.username || ""}
            isShort
          />
          <FormInput
            name="password"
            placeholder="Password"
            handleChange={handleLoginChanges}
            type="password"
            value={loginInput.password || ""}
            isShort
          />
        <CustomButton isWideButton onClick={handleLoginSubmit}>Login</CustomButton>
        </form>

        <form className="sign-in-container" >
          <h2 className="header">Sign Up</h2>
          <FormInput
            name="name"
            placeholder="Name"
            handleChange={handleSigninChanges}
            type="text"
            value={signinInput.name || ""}
          />
          <FormInput
            name="email"
            placeholder="Email"
            handleChange={handleSigninChanges}
            type="email"
            value={signinInput.email || ""}
          />
          <FormInput
            name="username"
            placeholder="Username"
            handleChange={handleSigninChanges}
            type="text"
            value={signinInput.username || ""}
          />
          <FormInput
            name="password"
            placeholder="Password"
            handleChange={handleSigninChanges}
            type="password"
            value={signinInput.password || ""}
          />
          <CustomButton isWideButton onClick={handleSigninSubmit}>Submit</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default connect(
  null,
  { loginUser, registerUser }
)(LogInAndSignUp);
