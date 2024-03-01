import React from "react";
import "./Work.css";
import CreditTeam from "./CrediTeam";
import CoreTeam from "./CoreTeam";
import DataTeam from "./DataTeam";
import Internship from "./Internship";

export default function Work() {
    return (
        <div className="work-grid-container">
            <h1 className="bento-title">Software Engineer @CME Group</h1>
            <div className="box credits-team bento-box-item">
                <CreditTeam />
            </div>
            <div className="box core-team bento-box-item">
                <CoreTeam />
            </div>
            <div className="box data-team bento-box-item">
                <DataTeam />
            </div>
            <div className="box internship bento-box-item">
                <Internship />
            </div>
        </div>
    );
}
