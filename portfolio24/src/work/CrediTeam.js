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
import "./Work.css";

export default function CreditTeam() {
    return (
        <div className="bento-content credit-team">
            <p> Worked closely with </p>
            <h1>TRADING ENGINE</h1>
            <p> Java, Spring, Kafka, Protobuf</p>
        </div>
    );
}
