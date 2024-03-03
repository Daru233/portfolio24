import React, { useRef, useEffect } from "react";

import { motion, useInView, useAnimation, delay } from "framer-motion";

import "./Projects.css";

export default function Projects() {

    const projectsRef = useRef(null);
    const isProjectsInView = useInView(projectsRef, { once: true });
    const projectsAnimationControls = useAnimation();

    useEffect(() => {
        if (isProjectsInView) {
            projectsAnimationControls.start("visible");
        }
    }, [isProjectsInView]);

    const revealAnimation = {
        hidden: {
            opacity: 0.0,
            y: 120,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const transitionConfig = {
        duration: 0.5, delay: 0.2
    }

    return (
        <div className="project-grid-container">
            <h1 className="bento-title">Projects</h1>
            <motion.div
                variants={revealAnimation}
                initial="hidden"
                animate={projectsAnimationControls}
                transition={transitionConfig}
                ref={projectsRef}
                className="box randofy2 bento-box-item">
                <div className="bento-content">
                    <p>Websites built with</p>
                    <h1>React</h1>
                </div>
            </motion.div>

            <motion.div
                variants={revealAnimation}
                initial="hidden"
                animate={projectsAnimationControls}
                transition={transitionConfig}
                className="box randofy bento-box-item">
                <div className="bento-content">
                    <p>fullstack mobile web app</p>
                    <h1>Randofy</h1>
                    <p>powered by spotify</p>
                </div>
            </motion.div>

            <motion.div
                variants={revealAnimation}
                initial="hidden"
                animate={projectsAnimationControls}
                transition={transitionConfig}
                className="box randofy3 bento-box-item bento-content">
                <div className="bento-content">
                    <p>Azure cloud powered clone of instagram</p>
                    <h1>Gymterest</h1>
                    <p>asdfssdfsfsfsdffadf</p>
                </div>
            </motion.div>

            <motion.div
                variants={revealAnimation}
                initial="hidden"
                animate={projectsAnimationControls}
                transition={transitionConfig}
                className="box randofy4 bento-box-item bento-content">
                <div className="bento-content">
                    <h1>Discord Bots</h1>
                    <p>for friends</p>
                </div>
            </motion.div>
        </div>
    );
}
