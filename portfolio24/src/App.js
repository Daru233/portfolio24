import { useRef, useEffect } from "react";

import { motion, useInView, useAnimation, delay } from "framer-motion";

import NavBar from "./NavBar/NavBar.js";
import Splash from "./splash/Splash.js";
import Work from "./work/Work.js";
import "./App.css";
import Projects from "./projects/Projects.js";
import AboutMe from "./About/AboutMe.js";

function App() {
    const splashRef = useRef();
    const careerRef = useRef();

    const dataTeamRef = useRef(null);
    const projectsRef = useRef(null);

    const isDataTeamInView = useInView(dataTeamRef, { once: true });
    const isProjectsInView = useInView(projectsRef, { once: true });

    const dataTeamAnimationControls = useAnimation();
    const projectsAnimationControls = useAnimation();

    useEffect(() => {
        if (isDataTeamInView) {
            dataTeamAnimationControls.start("visible");
        }
        if (isProjectsInView) {
            projectsAnimationControls.start("visible");
        }
    }, [isDataTeamInView, isProjectsInView]);

    const boxShowVar = {
        hidden: {
            opacity: 0,
            y: 90,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const boxShowTransition = {
        duration: 0.3,
        delay: 0.25,
    };

    const workTitleVar = {
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
        <div className="App">
            <NavBar careerRef={careerRef} splashRef={splashRef} />
            <main className="grid-container">
                <Splash />
                {/* <h1 className="section-title"></h1> */}
                <Work />
                <Projects />
                <AboutMe />

                {/* <div className="work-title-container section-title">
                    <motion.h1
                        variants={workTitleVar}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.2, delay: 1 }}
                    >
                        Work
                    </motion.h1>
                </div> */}

                {/* 
                <motion.div
                    variants={boxShowVar}
                    initial="hidden"
                    animate={dataTeamAnimationControls}
                    transition={{ delay: 0.2 }}
                    className="box current-work"
                >
                    <CurrentWork />
                </motion.div>

                <motion.div
                    variants={boxShowVar}
                    initial="hidden"
                    animate={dataTeamAnimationControls}
                    transition={{ delay: 0.3 }}
                    className="box core-team"
                >
                    <CoreTeam />
                </motion.div>

                <motion.div
                    variants={boxShowVar}
                    initial="hidden"
                    animate={dataTeamAnimationControls}
                    transition={{ delay: 0.6 }}
                    className="box data-team"
                >
                    <DataTeam dataTeamRef={dataTeamRef} />
                </motion.div>

                <motion.div
                    variants={boxShowVar}
                    initial="hidden"
                    animate={dataTeamAnimationControls}
                    transition={{ delay: 0.7 }}
                    className="box internship"
                >
                    <Internship />
                </motion.div>

                <div className="projects-title-container section-title">
                    <h1>Projects</h1>
                </div>

                <motion.div
                    variants={boxShowVar}
                    initial="hidden"
                    animate={projectsAnimationControls}
                    transition={{ delay: 0.2 }}
                    className="box randofy-img-1"
                >
                    <h1>img1</h1>
                </motion.div>

                <motion.div
                    variants={boxShowVar}
                    initial="hidden"
                    animate={projectsAnimationControls}
                    transition={{ delay: 0.4 }}
                    className="box randofy"
                >
                    <Randofy />
                </motion.div> */}

                {/* <motion.div
                    variants={boxShowVar}
                    initial="hidden"
                    animate={projectsAnimationControls}
                    transition={{ delay: 0.6 }}
                    className="box gymterest-cloud"
                >
                    <h1 ref={projectsRef}>Gymterest Cloud</h1>
                </motion.div>

                <motion.div
                    variants={boxShowVar}
                    initial="hidden"
                    animate={projectsAnimationControls}
                    transition={{ delay: 0.8 }}
                    className="box gymterest-cloud-img-1"
                >
                    <h1>img2 - cloud</h1>
                </motion.div>

                <motion.div
                    variants={boxShowVar}
                    initial="hidden"
                    animate={projectsAnimationControls}
                    transition={{ delay: 1 }}
                    className="box gymterest"
                >
                    <h1>Gymterest</h1>
                </motion.div>

                <motion.div
                    variants={boxShowVar}
                    initial="hidden"
                    animate={projectsAnimationControls}
                    transition={{ delay: 1.2 }}
                    className="box discord-bots"
                >
                    <h1>Discord Bots</h1>
                </motion.div>

                <div className="about-me-title-container section-title">
                    <h1>About Me</h1>
                </div> */}
            </main>
        </div>
    );
}

export default App;
