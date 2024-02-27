import React from "react";
import { SiAmazonaws } from "react-icons/si";
import { BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";
import "./CurrentWork.css";

export default function DataTeam({ dataTeamRef }) {
    return (
        <div ref={dataTeamRef} className="career-container data-team">
            <h2>Data Team @CME</h2>
            <p>- worked with Spark via Java</p>
            <p>
                - Transofrmed 7 billion records and migrated them from AWS to
                GCP
            </p>
        </div>
    );
}
