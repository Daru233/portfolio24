import { useRef } from "react";
import NavBar from "./NavBar/NavBar.js";
import IconsFied from "./fixed/Icons/IconsFixed.js";
import "./App.css";

function App() {
    const splashRef = useRef();
    const careerRef = useRef();
    const projectsRef = useRef();

    return (
        <div className="App">
            <NavBar
                careerRef={careerRef}
                splashRef={splashRef}
                projectsRef={projectsRef}
            />
            <IconsFied />
            <main className="grid-container">
                <div className="splash-grid-container">
                    <div className="left-side">
                        <p>Hi, I'm</p>
                        <h1>DARIUS</h1>
                        <h3>Always aiming to improve</h3>
                    </div>
                    <div className="right-side">
                        <h2>DESIGN</h2>
                        <h2>DEVELOP</h2>
                        <h2>DEPLOY</h2>
                        <h2>SOLUTIONS</h2>
                    </div>
                </div>

                <div className="box">
                    <h3>Github</h3>
                    <p>Hi, I'm</p>
                </div>
                <div className="box profile">
                    <h3>About Me</h3>
                    <p>Hi, I'm</p>
                </div>
                <div className="box">
                    <h3>LinkedIn</h3>
                    <p>Hi, I'm</p>
                </div>
                <div className="box">
                    <h3>title</h3>
                    <p>Hi, I'm</p>
                </div>
                <div className="box">
                    <h3>title</h3>
                    <p>Hi, I'm</p>
                </div>
            </main>
        </div>
    );
}

export default App;
