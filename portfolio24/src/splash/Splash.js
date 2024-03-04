import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Splash.css";

export default function Splash() {
    const hiVar = {
        hidden: {
            opacity: 0,
            y: 75,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const rightVar = {
        hidden: {
            opacity: 0,
            x: -75,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    const improvementVar = {
        hidden: {
            opacity: 0,
            y: 75,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className="splash-grid-container">

            <div className="left-side">
                <motion.p
                    variants={hiVar}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <mark className="hi">Hi, I'm Michael</mark>
                </motion.p>

                <motion.h1
                    variants={hiVar}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3, delay: 0.5 }}
                >
                    DARIUS
                </motion.h1>

                <motion.p
                    variants={improvementVar}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 2, delay: 2.2 }}
                >
                    <hr className="line" />
                    Striving for improvement
                </motion.p>
            </div>
            <div className="right-side">
                <motion.h2
                    variants={rightVar}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.2, delay: 0.9 }}
                    className="right-side-h2-shadows"
                >
                    DESIGN
                </motion.h2>
                <motion.h2
                    variants={rightVar}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.2, delay: 1.2 }}
                    className="right-side-h2-shadows"
                >
                    DEVELOP
                </motion.h2>
                <motion.h2
                    variants={rightVar}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.2, delay: 1.5 }}
                    className="right-side-h2-shadows"
                >
                    DEPLOY
                </motion.h2>
                <motion.h2
                    variants={rightVar}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.2, delay: 1.8 }}
                    className="solutions-text"
                >
                    <mark className="hi">SOLUTIONS</mark>
                </motion.h2>
            </div>
        </div>
    );
}