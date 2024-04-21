import React from "react";
import "./style.css";

export const Navbar = () => {
  return (
    <div className="nav-frame">
      <div className="nav-item">
        <a href="#">01</a>
        <p>Introduction</p>
      </div>
      <div className="nav-item">
        <a href="#">02</a>
        <p>Alumni & Students</p>
      </div>
      <div className="nav-item">
        <a href="#">03</a>
        <p>Tutorials</p>
      </div>
      <div className="nav-item">
        <a href="#">04</a>
        <p>Readings</p>
      </div>
      <div className="nav-item">
        <a href="#">05</a>
        <p>Software</p>
      </div>
      <div className="nav-item">
        <a href="#">06</a>
        <p>Opportunities</p>
      </div>     
    </div>
  );
};

export default Navbar