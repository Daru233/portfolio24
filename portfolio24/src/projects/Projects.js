import React from "react";
import "./Projects.css";

export default function Projects() {
    return (
        <div className="project-grid-container">
            <h1 className="bento-title">Projects</h1>
            <div className="box randofy2 bento-box-item">
                <div className="bento-content">
                    <p>Websites built with</p>
                    <h1>React</h1>
                </div>
            </div>
            <div className="box randofy bento-box-item">
                <div className="bento-content">
                    <p>fullstack mobile web app</p>
                    <h1>Randofy</h1>
                    <p>powered by spotify</p>
                </div>
            </div>
            <div className="box randofy3 bento-box-item bento-content">
                <div className="bento-content">
                    <p>Azure cloud powered clone of instagram</p>
                    <h1>Gymterest</h1>
                    <p>asdfssdfsfsfsdffadf</p>
                </div>
            </div>
            <div className="box randofy4 bento-box-item bento-content">
                <div className="bento-content">
                    <h1>Discord Bots</h1>
                    <p>for friends</p>
                </div>
            </div>
        </div>
    );
}
