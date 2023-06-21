import React from "react";

const Header = () => {
  return (
    <div className="navBar">
      <div className="logo">CryptTools</div>
      <div className="menu">
        <ul className="menu-btn">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/TextForm">TextUtils</a>
          </li>
          <li>
            <a href="/psdGenerator">Password Generator</a>
          </li>
          <li>
            <a href="/psdManager">Password Manager</a>
          </li>
          <li>
            <a href="/feedback">Feedback</a>
          </li>
        </ul>
      </div>
      <div className="profile">Login</div>
    </div>
  );
};

export default Header;
