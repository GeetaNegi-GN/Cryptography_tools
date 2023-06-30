import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="right-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/feedback">Feedback</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
