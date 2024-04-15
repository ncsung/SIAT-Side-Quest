import React from "react";
import "./style.css";
import { motion } from 'framer-motion';
import { useState } from "react";

export const Card = () => {
    const [flip, setFlip] = useState(true);
  return (
    <motion.div className="card-box"
    onClick= {() => setFlip((prevState) => !prevState)}
    transition={{type: "sping", duration:0.3}}
    animate={{ rotateY: flip ? 0 : 180}}
    >

        <h3> David </h3>
        <ul className="card-tags">
            <li>Tags</li>
        </ul>
        <h4>Favourite Classes</h4>
        <p>IAT 438, IAT 333, italiadesign</p>
        <h4>Business of Design</h4>
        <p>00000</p>
        <h4>Degree</h4>
        <p>B.A. with Concentration in Design </p>
        <a href=""> davidwaizel.ca </a>

    </motion.div>
  );
};

export default Card