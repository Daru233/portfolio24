import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Career.css";

function Career({ careerRef }) {
    const CORE_TEAM = "core";
    const DATA_TEAM = "data";
    const CREDITS_TEAM = "credits";
    const INTERNSHIP = "internship";
    const [toRender, setToRender] = useState(CORE_TEAM);
    let render;

    const textRef = useRef(null);
    const isInView = useInView(textRef);
    const titleControls = useAnimation();
    const highlightControls = useAnimation();
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("show");
            highlightControls.start("show");
            titleControls.start("show");
        }
        return () => {};
    }, [isInView]);

    switch (toRender) {
        case CORE_TEAM:
            render = CoreTeam();
            break;

        case DATA_TEAM:
            render = DataTeam();
            break;

        case CREDITS_TEAM:
            render = CreditsTeam();
            break;

        case INTERNSHIP:
            render = Internship();
            break;

        default:
            break;
    }

    return (
        <div className="Career" ref={careerRef}>
            <div className="flex-container-career">
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 90 },
                        show: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={highlightControls}
                    transition={{ duration: 0.5 }}
                >
                    Software Engineer @CME Group
                    <motion.div
                        variants={{
                            hidden: { left: 0 },
                            show: { left: "100%" },
                        }}
                        initial="hidden"
                        animate={highlightControls}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        style={{
                            position: "absolute",
                            top: 1,
                            bottom: 1,
                            left: 0,
                            right: 0,
                            zIndex: 20,
                            background: "white",
                        }}
                    />
                </motion.h1>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        show: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="career-layout"
                    ref={textRef}
                >
                    <div className="career-text-selector">
                        <ul className="career-ul">
                            <motion.li
                                variants={{
                                    start: { opacity: 0, y: 90 },
                                    end: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                initial="start"
                                whileInView="end"
                                viewport={{ once: true }}
                                className="career-li"
                            >
                                <button
                                    className="career-button"
                                    onClick={() => {
                                        setToRender(CORE_TEAM);
                                    }}
                                >
                                    CORE Team
                                </button>
                            </motion.li>

                            <motion.li
                                variants={{
                                    start: { opacity: 0, y: 90 },
                                    end: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                initial="start"
                                whileInView="end"
                                viewport={{ once: true }}
                                className="career-li"
                            >
                                <button
                                    className="career-button"
                                    onClick={() => {
                                        setToRender(DATA_TEAM);
                                    }}
                                >
                                    Data Team
                                </button>
                            </motion.li>

                            <motion.li
                                variants={{
                                    start: { opacity: 0, y: 90 },
                                    end: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5, delay: 0.45 }}
                                initial="start"
                                whileInView="end"
                                viewport={{ once: true }}
                                className="career-li"
                            >
                                <button
                                    className="career-button"
                                    onClick={() => {
                                        setToRender(CREDITS_TEAM);
                                    }}
                                >
                                    Credits Team
                                </button>
                            </motion.li>

                            <motion.li
                                variants={{
                                    start: { opacity: 0, y: 90 },
                                    end: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                initial="start"
                                whileInView="end"
                                viewport={{ once: true }}
                                className="career-li"
                            >
                                <button
                                    className="career-button"
                                    onClick={() => {
                                        setToRender(INTERNSHIP);
                                    }}
                                >
                                    Internship Experience
                                </button>
                            </motion.li>
                        </ul>
                    </div>

                    <div className="career-text-area">
                        {render}
                        <motion.div
                            variants={{
                                hidden: { left: 0 },
                                show: { left: "100%" },
                            }}
                            initial="hidden"
                            animate={highlightControls}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            style={{
                                position: "absolute",
                                top: 1,
                                bottom: 1,
                                left: 0,
                                right: 0,
                                zIndex: 20,
                                background: "white",
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function CoreTeam() {
    return (
        <p>
            Migrated an admin panel from ExtJS to React. Managed state using
            Redux and components were unit tested using Jest. Used internal CME
            CSS library for styling components. Collaborated with the UX team
            for the design of the new admin panel.
        </p>
    );
}

function DataTeam() {
    return (
        <p>
            Worked in the data team to migrate and transform data from an AWS s3
            bucket and output the result to GCP BigQuery. The data was
            transformed and enriched using Apache Spark through Java.
            Development of the solution was done by using a subset of the data
            to make sure that the transformations performed on the data were
            correct before running it on 10 billion records.
        </p>
    );
}

function CreditsTeam() {
    return (
        <p>
            Worked closely with the trading engine - using with Java, Spring,
            Kafka and the application operates on the Actor Model. Implemented
            an evaluation component which used the builder design pattern and
            interfaces. Code is tested using JUnit, Cucumber tests and Live
            tests which mock out a partial application to application exchange
            of data. Code was thoroughly reviewed as the application must be
            performant.
        </p>
    );
}

function Internship() {
    return (
        <p>
            INTERNSHIP ASDFSADF SDFDF F trSDFSDFading engine - using with Java,
            Spring, Kafka and the application operates on the Actor Model.
            Implemented an evaluation compocumber tests and Live tests which
            mock out a partial application to application exchange of data. Code
            was thoroughly reviewed as the application must be performant.
        </p>
    );
}

export default Career;
