import React from "react";
import "./style.css";
import { motion } from 'framer-motion';
import { useState } from "react";
import Overlay from "./Overlay.jsx"

export const Card = () => {
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
        <div className = "card-frame">
            {/* <motion.div className="card-box"
            onClick= {() => setFlip((prevState) => !prevState)}
            transition={{type: 'spring', bounce: 0.4, duration:0.6}}
            animate={{ rotateY: flip ? 0 : 180}}
            >

            </motion.div>         */}

            <div className="card-box"
            onClick= {toggleOverlay} 
            >
            </div>            
        </div>
        </>
    );
};

export default Card