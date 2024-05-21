import React, { useState } from "react";
import { motion , AnimatePresence} from "framer-motion";
import Tag from "../Tag.jsx"
import "./style.css";
import { GoArrowLeft } from "react-icons/go";


const Overlay = ({ isOpen, onClose, children, data}) => {
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the parent (card) element
    onClose();
  };

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <motion.div className="overlay-frame"
        key="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0,transition: {duration: 0.1}}}
        transition={{type: 'ease', duration:0.3}}
              >
            <motion.div
              key="box"
              className="overlay"
              initial={{ y: "20px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "20px", opacity: 0,transition: {duration: 0.1}}}
              transition={{type: 'spring', bounce: 0.4, duration:0.9}}
            >
              <div className="overlay-content" onClick={handleClick}>
                <div className="alumni-social-nav">
                  <GoArrowLeft onClick= {onClose} style={{
                    color: "#be2d2d"}} size= {20} className=""/>

                  <ul>
                    <a href='#'> social 1</a>
                    <a href='#'> social 1</a>
                    <a href='#'> social 1</a>
                  </ul>
                  
                </div>

                <div className="expanded-card-banner">
                  <div className="card-profile-mask-expanded">
                      <img className="card-profile-picture-expanded" src={data.imgSrc} alt ={data.imgAlt}></img>
                  </div>
                  <div className="card-details-exp">
                    <h2 className="card-name">{data.name}</h2>
                    <p className="darkgray-text"> {data.role}</p>
                    <p className="darkgray-text"> {data.workHistory}</p>
                    <div className="card-skills-expanded">
                      {data.skills.map( (skill, index) => {
                          return(
                              <Tag key= {index} category={skill} isRed ={false}/>
                              )
                          })}
                    </div> 
                  </div>
                </div>
                <div className="about-resource-section">
                    <div className="about-section">
                          <div className="about-header expanded-left-padding">
                            <h2 className="exp-big-header">About</h2>
                          </div>
                          <div className="about-content expanded-left-padding content-padding">
                            <p className= "about-me content-padding">While volunteering for FROSH, an event for first-years, I was approached by a fellow videographer about a freelance opportunity.
                            You never know what you might get from even a small interaction. </p>
                            <h3>PREVIOUSLY WORKED:</h3> 
                            <ul>
                              <li>item1 </li>
                              <li>item2 </li>
                              <li>item3 </li>
                            </ul>
                            <h3>FAVOURITE CLASSES</h3> 
                            <ul>
                              <li>item1 </li>
                              <li>item2 </li>
                              <li>item3 </li>
                            </ul>
                            <h3>SIAT JOURNEY TL;DR</h3> 
                            <ul>
                              <li>item1 </li>
                              <li>item2 </li>
                              <li>item3 </li>
                            </ul>
                          </div>
                    </div>
                    <div className="resource-section ">
                          <div className="resource-header expanded-left-padding">
                            <h2 className="exp-big-header">Resource</h2>
                          </div>
                          <div className="resource-content-expanded-card expanded-left-padding content-padding">
                            <h3>INSPIRATION</h3> 
                            <ul>
                              <li>item1 </li>
                              <li>item2 </li>
                              <li>item3 </li>
                            </ul>
                            <h3>RECOMMENDED SOFTWARE</h3> 
                            <ul>
                              <li>item1 </li>
                              <li>item2 </li>
                              <li>item3 </li>
                            </ul>
                            <h3>OPPORTUNITIES</h3> 
                            <ul>
                              <li>item1 </li>
                              <li>item2 </li>
                              <li>item3 </li>
                            </ul>
                          </div>
                    </div>
                  </div>
                {/* <button onClick={onClose}>Close</button> */}
              </div>
            </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default Overlay;