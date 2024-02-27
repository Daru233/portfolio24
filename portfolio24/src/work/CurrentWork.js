import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
    SiLinkedin,
    SiVsco,
    SiSpotify,
    SiGithub,
    SiApachekafka,
} from "react-icons/si";
import { BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";
import "./CurrentWork.css";

export default function CurrentWork() {
    return (
        <div className="career-container credits-team">
            <p> Worked closely with </p>
            <h1>TRADING ENGINE</h1>

            <p> Java, Spring, Kafka, Protobuf</p>
        </div>
    );
}
