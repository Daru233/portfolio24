import React from "react";
import { SiLinkedin, SiGithub, SiSpotify } from "react-icons/si";
import "./AboutMe.css";

export default function AboutMe() {
    const me = "./myLinkedInPic.png";

    return (
        <div className="about-grid-container">
            <h1 className="bento-title">About Me</h1>
            <div className="box education bento-box-item">
                <div className="bento-content">
                    <p>Graduated with </p>
                    <h1>First Class Honors</h1>
                    <p>At Universtiy of Ulster</p>
                </div>
            </div>

            <div className="box about-me-img bento-box-item">
                <img src={me} />
            </div>
            <div className="box linkedIn bento-box-item">
                <SiLinkedin className="socials" />
            </div>
            <div className="box github bento-box-item">
                <SiGithub className="socials" />
            </div>
            <div className="box spotify bento-box-item">
                <SiSpotify className="socials" />
            </div>
        </div>
    );
}
