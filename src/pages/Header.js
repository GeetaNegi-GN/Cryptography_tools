import React from "react";

const Header = () => {
  return (
    <>
      <div className="navBar">
        <div className="logo">Web-ToolKit</div>
        <div className="right"></div>
        <div className="menu">
          <ul className="menu-btn">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/TextForm">TextUtils</a>
            </li>
            <li>
              <a href="/psdGen">Generator</a>
            </li>
            <li>
              <a href="/crypt">Encoder/Decoder</a>
            </li>
            {/* <li>
              <a href="/psdManager">Password Manager</a>
            </li> */}

            <li>
              <a href="/feedback">Feedback</a>
            </li>
          </ul>
        </div>
        {/* <div className="profile">Login</div> */}
      </div>
    </>
  );
};

export default Header;
