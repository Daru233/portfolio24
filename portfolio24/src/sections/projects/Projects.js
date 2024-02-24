import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Projects.css";

function Projects({ projectsRef }) {
    const mainControls = useAnimation();
    const textRef = useRef(null);

    const isInView = useInView(textRef);

    useEffect(() => {
        if (isInView) {
            mainControls.start("show");
        }
        return () => {};
    }, [isInView]);

    return (
        <div className="Projects" ref={projectsRef}>
            <div className="ProjectCanvas">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        show: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    ref={textRef}
                    viewport={{ once: false }}
                    className="ProjectFadeIn"
                >
                    <h1>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </h1>
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;
