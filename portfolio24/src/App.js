import Career from "./sections/work/Career.js";
import Splash from "./sections/splash/Splash.js";
import NavBar from "./NavBar/NavBar.js";
import { useRef } from "react";
import "./App.css";
import EmailFixed from "./fixed/email/EmailFixed.js";
import IconsFied from "./fixed/Icons/IconsFixed.js";
import Projects from "./sections/projects/Projects.js";

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
            <EmailFixed />
            <IconsFied />
            <Splash splashRef={splashRef} />
            <Career careerRef={careerRef} />
            <Projects projectsRef={projectsRef} />
        </div>
    );
}

export default App;
