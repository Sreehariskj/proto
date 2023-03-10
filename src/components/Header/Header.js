import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img src={Logo} className="header-logo" />
      </div>
      <div></div>
    </div>
  );
};

export default Header;
