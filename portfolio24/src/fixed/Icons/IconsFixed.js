import { IconContext } from "react-icons";
import { SiLinkedin, SiVsco, SiSpotify, SiGithub } from "react-icons/si";
import "./IconsFixed.css";

function IconsFied() {
    const linkedInLink = "https://www.linkedin.com/in/michael-malto233";
    const githubLink = "https://github.com/Daru233";
    const spotifyLink =
        "https://open.spotify.com/user/oomichaeoo?si=e2fcbc8ec40947e7";

    const vscoLink = "";

    return (
        <div className="IconsFixed">
            <IconContext.Provider
                value={{
                    color: "white",
                    className: "global-class-name",
                    size: "1.5em",
                }}
            >
                <ul className="icon-Ul">
                    <li
                        className="icon-li"
                        onClick={() => {
                            window.open(linkedInLink);
                        }}
                    >
                        <SiLinkedin className="icon" />
                    </li>
                    <li
                        className="icon-li"
                        onClick={() => {
                            window.open(githubLink);
                        }}
                    >
                        <SiGithub className="icon" />
                    </li>
                    <li className="icon-li">
                        <SiSpotify
                            className="icon"
                            onClick={() => {
                                window.open(spotifyLink);
                            }}
                        />
                    </li>
                    <li className="icon-li">
                        <SiVsco
                            className="icon"
                            onClick={() => {
                                window.open(vscoLink);
                            }}
                        />
                    </li>
                </ul>
            </IconContext.Provider>
        </div>
    );
}

export default IconsFied;
