import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const BasicsOfMotion = () =>{

    const [isVisisble, setIsVisisble] = useState(false)

    return(
        <div
        style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
            gap: "0.8rem",
        }}
        >
            <motion.button className="example-button" 
            onClick = {() => setIsVisisble(!isVisisble)}
            layout > Animate me</motion.button>

            <AnimatePresence mode="popLayout" >
                {isVisisble && (
                <motion.div
                initial= {{
                    rotate: '0deg',
                    scale: 0,
                    y: 0,
                }}
                animate= {{
                    rotate: '180deg',
                    scale: 1,
                    y: [0, 150, -160, -150, 0],
                }}
                exit = {{
                    rotate: "0deg",
                    scale: 0,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    times:[0.2,0.3,0.1,0.5,0.9]
                }}
                style= {{
                    width: 150,
                    height: 150,
                    background: "black",
                }}
                >
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BasicsOfMotion;