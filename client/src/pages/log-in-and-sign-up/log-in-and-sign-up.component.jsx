import React, { useState } from "react";

import useForm from "../../customHooks/useForm";

import "./log-in-and-sign-up.component.styles.scss";

const LogInAndSignUp = () => {
  const handleFunc = event => {
    event.preventDefault();
    console.log("CLICKED");
  };

  const [inputValues, handleChanges, handleSubmit] = useForm(handleFunc);

  return (
    <div className="page-container">
      <div className="log-in-sign-in-container">
        <form className="log-in-container" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChanges}
            type="text"
            value={inputValues.username || ""}
          />
          <input
            name="password"
            placeholder="Password"
            onChange={handleChanges}
            type="password"
            value={inputValues.password || ""}
          />
          <button type="submit">Login</button>
        </form>

        <form className="sign-in-container">
          <h2>Sign Up</h2>
          <input
            name="name"
            placeholder="Name"
            onChange={handleChanges}
            type="text"
            value={inputValues.name || ""}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChanges}
            type="email"
            value={inputValues.email || ""}
          />
          <input
            name="usernameTwo"
            placeholder="Username"
            onChange={handleChanges}
            type="text"
            value={inputValues.usernameTwo || ""}
          />
          <input
            name="passwordTwo"
            placeholder="Password"
            onChange={handleChanges}
            type="password"
            value={inputValues.passwordTwo || ""}
          />
          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChanges}
            type="password"
            value={inputValues.confirmPassword || ""}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LogInAndSignUp;
