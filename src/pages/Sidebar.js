import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="right-menu">
        <li className="sidebar-list">
          <a href="/">Home</a>
        </li>
        <li className="sidebar-list">
          <a href="/feedback">Feedback</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
