import React from "react";
import { SiAmazonaws } from "react-icons/si";
import { BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";
import "./Work.css";

export default function DataTeam({ dataTeamRef }) {
    return (
        <div ref={dataTeamRef} className="career-container data-team">
            <p> Transofrmed 7 billion records from AWS S3</p>
            <h1>MIGRATED TO</h1>
            <h1>GCP</h1>
            <p>using Apache Spark and Java</p>
        </div>
    );
}
