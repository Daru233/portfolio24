import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Splash.css";
import "./RightSide.css";
import "./LeftSide.css";

function Splash({ splashRef }) {
    return (
        <div className="Splash" ref={splashRef}>
            <div className="flex-container">
                <div className="leftSide">
                    <img
                        src="./myLinkedInPic.png"
                        alt="logo"
                        className="pictureOfMe"
                    />
                </div>
                <div className="rightSide">
                    <div className="info">
                        <h5 className="HI">Hi, I'm</h5>
                        <h1 className="DARIUS">DARIUS</h1>
                        <p>
                            I graduated with a Bachelor's degree in Computer
                            Engineering from Ulster University in 2022, where I
                            learned the fundamentals of programming, data
                            structures, algorithms, databases, and software
                            engineering.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Splash;
