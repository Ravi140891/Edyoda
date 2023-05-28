import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <div className="logo">
          <img src="./assets/EDYODA.png" alt="Edyoda logo" />
        </div>
        <div className="courses">
          <p>Courses</p>
          <div className="icons">
            <i className="fa fa-angle-down"></i>
          </div>
        </div>
        <div className="courses">
          <p>Programs</p>
          <div className="icons">
            <i className="fa fa-angle-down"></i>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="icon">
          <i className="fa fa-search"></i>
        </div>
        <div className="login">
          <p>Log in</p>
        </div>
        <button className="join-now">JOIN NOW</button>
      </div>
    </nav>
  );
};

export default Navbar;
