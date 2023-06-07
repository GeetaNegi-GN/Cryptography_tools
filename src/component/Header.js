import React from "react";
import Home from "./Home";
import Tools from "./Tools";
import Feedback from "./Feedback";

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
            <a href="/tools">Tools</a>
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
