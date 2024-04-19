import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";


const Overlay = ({ isOpen, onClose, children }) => {
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the parent (card) element
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="overlay-frame">
            <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ y: "-10px", opacity: 1 }}
            transition={{type: 'spring', bounce: 0.3, duration:0.6}}
            exit={{ opacity: 0 }
            }
            >
            <div className="overlay-content" onClick={handleClick}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
            </motion.div>
        </div>
      )}
    </>
  );
};

export default Overlay;