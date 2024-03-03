import React, { useRef, useEffect } from "react";

import { motion, useInView, useAnimation, delay } from "framer-motion";
import "./Work.css";
import CreditTeam from "./CrediTeam";
import CoreTeam from "./CoreTeam";
import DataTeam from "./DataTeam";
import Internship from "./Internship";

export default function Work() {

    const creditTeamRef = useRef(null);
    const isCreditsTeamInView = useInView(creditTeamRef, { once: true });
    const creditsTeamAnimationControls = useAnimation();

    useEffect(() => {
        if (isCreditsTeamInView) {
            creditsTeamAnimationControls.start("visible");
        }
    }, [isCreditsTeamInView]);

    const rightVar = {
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
        <div className="work-grid-container">
            <h1 className="bento-title">Software Engineer @CME Group</h1>
            <motion.div
                variants={rightVar}
                initial="hidden"
                animate={creditsTeamAnimationControls}
                transition={transitionConfig}
                ref={creditTeamRef}
                className="box credits-team bento-box-item">
                <CreditTeam />
            </motion.div>

            <motion.div
                variants={rightVar}
                initial="hidden"
                animate={creditsTeamAnimationControls}
                transition={transitionConfig}
                ref={creditTeamRef}
                className="box core-team bento-box-item">
                <CoreTeam />
            </motion.div>

            <motion.div
                variants={rightVar}
                initial="hidden"
                animate={creditsTeamAnimationControls}
                transition={transitionConfig}
                ref={creditTeamRef}
                className="box data-team bento-box-item">
                <DataTeam />
            </motion.div>

            <motion.div
                variants={rightVar}
                initial="hidden"
                animate={creditsTeamAnimationControls}
                transition={transitionConfig}
                ref={creditTeamRef}
                className="box internship bento-box-item">
                <Internship />
            </motion.div>
        </div>
    );
}
