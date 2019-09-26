import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <div className="options">
      <div className="option">
        <Link to="/shop">SHOP</Link>
      </div>
      <div className="option">
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className="option">
        <Link to="/signin">SIGN IN</Link>
      </div>
    </div>
  </div>
);

export default Header;
