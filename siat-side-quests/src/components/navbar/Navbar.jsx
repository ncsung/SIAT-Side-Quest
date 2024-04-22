import React from "react";
import "./style.css";

export const Navbar = () => {
  return (
    <div className="nav-frame">
      <a href="#introduction" className="nav-item">
          <p className ="nav-item-number">01</p>
          <p className="red-text">Introduction</p>
      </a>
      <a href="#alums" className="nav-item">
        
          <p className = "nav-item-number">02 </p>
          <p className="red-text">Alumni & Students</p>
    
      </a>
      <a href="#inspiration" className="nav-item">
        
          <p className = "nav-item-number">03</p>
          <p className="red-text"> Inspiration </p>
        
      </a>
      <a href="#tutorials" className="nav-item">
        
          <p className = "nav-item-number">04</p>
          <p className="red-text"> Tutorials</p>
      
      </a>
      <a href="#readings" className="nav-item">
       
          <p className = "nav-item-number">05</p>
          <p className="red-text"> Readings</p>
        
      </a>
      <a href="#software" className="nav-item">
        
          <p className = "nav-item-number">06</p>
          <p className="red-text">Software</p>
       
      </a>   
    </div>
  );
};

export default Navbar