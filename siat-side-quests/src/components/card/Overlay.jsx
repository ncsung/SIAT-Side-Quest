import React, { useState } from "react";
import { motion , AnimatePresence} from "framer-motion";
import "./style.css";


const Overlay = ({ isOpen, onClose, children }) => {
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
                {children}
                <button onClick={onClose}>Close</button>
            </div>
            </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default Overlay;