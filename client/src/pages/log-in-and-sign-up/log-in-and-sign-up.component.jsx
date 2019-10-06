import React from "react";

import "./log-in-and-sign-up.component.styles.scss";

const LogInAndSignUp = () => {
  return (
    <div className="page-container">
      <div className="log-in-sign-in-container">
        <form className="log-in-container">
          <h2>Login</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>

        <form className="sign-in-container">
          <h2>Sign Up</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LogInAndSignUp;
