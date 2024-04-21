import React from "react";
import "./style.css";
import { motion } from 'framer-motion';
import { useState } from "react";
import Overlay from "./Overlay.jsx"
import davidImg from "/davidProfile.png"
import Tag from "../Tag.jsx"
export const Card = ({imgSrc,
                    imgAlt,
                    name,
                    role,
                    workHistory,
                    skills
}) => {
    const [flip, setFlip] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
      };

    return (
        <>
        <Overlay isOpen={isOpen} onClose={toggleOverlay}> 
            <h2>Content in Overlay</h2>
        </Overlay>
            <div className="card-pp-div">
                <div className="card-profile-mask">
                    <img className="card-profile-picture" src={imgSrc} alt ={imgAlt}></img>
                </div>
            </div>
            <div className="card-content">
                <h2 className="cardName">{name}</h2>
                <p className="red-text"> {role}</p>
                <p className="red-text"> {workHistory}</p>
            </div>
            <div className="card-foot">
                {skills.map( (skill, index) => {
                    return(
                        <Tag key= {index} category={skill}/>
                    )
                })}
                <a onClick={toggleOverlay}> learn more</a>
            </div>     
        </>
    );
};

export default Card