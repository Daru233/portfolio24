import "./NavBar.css";

function NavBar({ careerRef, splashRef }) {
    return (
        <div className="NavBar">
            <ul>
                <li className="navBar-button">
                    <button
                        className="navButton"
                        onClick={() => {
                            splashRef.current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        About
                    </button>
                </li>
                <li className="navBar-button">
                    <button
                        className="navButton"
                        onClick={() => {
                            careerRef.current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        Career
                    </button>
                </li>
                {/* <li className="navBar-button">
                    <button
                        className="navButton"
                        onClick={() => {
                            projectsRef.current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        Projects
                    </button>
                </li> */}
            </ul>
        </div>
    );
}

export default NavBar;
