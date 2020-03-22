import React, { useEffect } from "react";
import { connect } from "react-redux";

import { loginUser, registerUser } from "../../redux/actions/user.actions";
import useLogin from "../../customHooks/useLogin";
import {validateLogin, validateSignUp} from "../../utils/loginFormValidationRules";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import UserImg from "../../assets/User-Image.png";

import "./log-in-and-sign-up.component.styles.scss";

const LogInAndSignUp = ({ loginUser, registerUser, isLoggedIn, history }) => {
  const handleLogin = event => {
    if (event) event.preventDefault();
    loginUser(loginInput);
  };

  const handleSignin = event => {
    if (event) event.preventDefault();
    registerUser(signinInput);
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/journal");
    }
  }, [isLoggedIn, history]);

  const [
    loginInput,
    handleLoginChanges,
    handleLoginSubmit,
    setLoginVals,
    loginErrors
  ] = useLogin(handleLogin, validateLogin);
  const [
    signinInput,
    handleSigninChanges,
    handleSigninSubmit,
    setSignInVals,
    signInErrors
  ] = useLogin(handleSignin, validateSignUp);

  return (
    <div className="page-container">
      <div className="log-in-sign-in-quote-container">
        <div className="form-container">
          <form className="log-in-container">
            <h2 className="header">Login</h2>
            {loginErrors.username && (
              <span className="form-error">{loginErrors.username}</span>
            )}
            <FormInput
              name="username"
              placeholder="Username"
              handleChange={handleLoginChanges}
              type="text"
              value={loginInput.username || ""}
              isShort
            />
            {loginErrors.password && (
              <span className="form-error">{loginErrors.password}</span>
            )}
            <FormInput
              name="password"
              placeholder="Password"
              handleChange={handleLoginChanges}
              type="password"
              value={loginInput.password || ""}
              isShort
            />
            <CustomButton isSuperWide onClick={handleLoginSubmit}>
              Login
            </CustomButton>
          </form>

          <form className="sign-in-container">
            <h2 className="header">Sign Up</h2>

            {signInErrors.name && (
              <span className="form-error">{signInErrors.name}</span>
            )}
            <FormInput
              name="name"
              placeholder="Name"
              handleChange={handleSigninChanges}
              type="text"
              value={signinInput.name || ""}
              isShort
            />
            {signInErrors.email && (
              <span className="form-error">{signInErrors.email}</span>
            )}
            <FormInput
              name="email"
              placeholder="Email"
              handleChange={handleSigninChanges}
              type="email"
              value={signinInput.email || ""}
              isShort
            />
            {signInErrors.username && (
              <span className="form-error">{signInErrors.username}</span>
            )}
            <FormInput
              name="username"
              placeholder="Username"
              handleChange={handleSigninChanges}
              type="text"
              value={signinInput.username || ""}
              isShort
            />
            {signInErrors.username && (
              <span className="form-error">{signInErrors.password}</span>
            )}
            <FormInput
              name="password"
              placeholder="Password"
              handleChange={handleSigninChanges}
              type="password"
              value={signinInput.password || ""}
              isShort
            />
            <CustomButton isSuperWide onClick={handleSigninSubmit}>
              Submit
            </CustomButton>
          </form>
        </div>

        <div className="line"></div>

        <div className="testimonial-quote">
          <span className="quote">
            “The MyJournal app has made me at least 25% happier”
            <br />
            <div className="user-img-container">
              <span className="user">— Luke Williams</span>
              <img src={UserImg} alt="Happy User" />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { loginUser, registerUser }
)(LogInAndSignUp);
