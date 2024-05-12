import React from "react";
import "./style.css";
import { motion } from 'framer-motion';
import { useState } from "react";
import Overlay from "./Overlay.jsx"
import Tag from "../Tag.jsx"
import RightArrow from "../../assets/rightArrow.svg"
import { BsArrowRight  } from "react-icons/bs";

export const Card = ({imgSrc,
                    imgAlt,
                    name,
                    role,
                    workHistory,
                    skills
}) => {
    const [flip, setFlip] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [arrow, setArrow] = useState(RightArrow);

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
      };

    return (
        <>
        <Overlay isOpen={isOpen} onClose={toggleOverlay}> 
            <h2>Content in Overlay</h2>
        </Overlay>

        {/* <div className="card-pp-div"> */}
        <div className="pp-container">
            <div className="card-profile-mask">
                <img className="card-profile-picture" src={imgSrc} alt ={imgAlt}></img>
            </div>
        </div>
        {/* </div> */}
        <div className="card-content">
            <h2 className="card-name">{name}</h2>
            <p className="darkgray-text"> {role}</p>
            <p className="darkgray-text"> {workHistory}</p>
            <div className="card-foot">
                {skills.map( (skill, index) => {
                    return(
                        <Tag key= {index} category={skill} isRed ={false}/>
                        )
                    })}
                <div className="learn-more">
                    <a onClick={toggleOverlay}> <p className= "lightgray-text learn-more">View resources</p></a>
                    <BsArrowRight style={{
      color: "#3a3a3a"
    }}/>
                </div>
            </div> 
        </div>    
        </>
    );
};

export default Card