import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./Projects.css"

import Work from "../components/Work";

//import avatar from "../img/Unta.jpeg"
import { workData } from "./data";

function Projects() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="projects-container">
            <div className="heading">
                <h1>Projects</h1>
                <p>
                    Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="projects-list">
                <div class="rounded-button"
                    onClick={() => {
                        if(currentIndex > 0) {
                            setCurrentIndex(currentIndex-1);
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <Work workName={workData[currentIndex].workName} workDescription={workData[currentIndex].workDescription} workImageUrl={workData[currentIndex].workImageUrl} />
                <Work workName={workData[currentIndex+1].workName} workDescription={workData[currentIndex+1].workDescription} workImageUrl={workData[currentIndex+1].workImageUrl} />
                <div class="rounded-button"
                     onClick={() => {
                        if(currentIndex < 2) {
                            setCurrentIndex(currentIndex+1);
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    )
}

export default Projects