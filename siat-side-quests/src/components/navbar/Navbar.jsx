import React from "react";
import "./style.css";

export const Navbar = () => {
  return (
    <div className="nav-frame">
      <div className="nav-item">
        <a href="#">01</a>
        <p className="red-text">Introduction</p>
      </div>
      <div className="nav-item">
        <a href="#">02</a>
        <p className="red-text">Alumni & Students</p>
      </div>
      <div className="nav-item">
        <a href="#">03</a>
        <p className="red-text">Tutorials</p>
      </div>
      <div className="nav-item">
        <a href="#">04</a>
        <p className="red-text">Readings</p>
      </div>
      <div className="nav-item">
        <a href="#">05</a>
        <p className="red-text">Software</p>
      </div>
      <div className="nav-item">
        <a href="#">06</a>
        <p className="red-text">Opportunities</p>
      </div>     
    </div>
  );
};

export default Navbar