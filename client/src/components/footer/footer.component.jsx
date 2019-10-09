import React from "react";
import Nav from "../nav/nav.component";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="sub-footer-container">
        <Nav />
        <p className="copyright">
          Copyright © 2019 MyJournal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
