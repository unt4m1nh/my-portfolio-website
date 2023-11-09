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
            <div className="content">
                <div className="heading">
                    <h1>Projects</h1>
                </div>
                <div className="projects-list">
                    <div class="rounded-button"
                        onClick={() => {
                            if(currentIndex <= 0) {
                                setCurrentIndex(2)
                            } else {
                                setCurrentIndex(currentIndex - 1)
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <Work
                        id="work1"
                        workName={workData[currentIndex % 4].workName}
                        workDescription={workData[currentIndex % 4].workDescription}
                        workImageUrl={workData[currentIndex % 4].workImageUrl}
                        githubUrl={workData[currentIndex % 4].githubUrl}
                    />
                    <Work
                        id="work2"
                        workName={workData[(currentIndex + 1) % 4].workName}
                        workDescription={workData[(currentIndex + 1) % 4].workDescription}
                        workImageUrl={workData[(currentIndex + 1) % 4].workImageUrl}
                        githubUrl={workData[(currentIndex + 1) % 4].githubUrl}
                    />
                    <div class="rounded-button"
                        onClick={() => {

                            setCurrentIndex(currentIndex + 1);

                        }}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
            <div className="content-mobile">
                <div className="heading">
                    <h1>Projects</h1>
                </div>
                <div className="projects-list">
                    <Work
                        id="work1"
                        workName={workData[currentIndex % 4].workName}
                        workDescription={workData[currentIndex % 4].workDescription}
                        workImageUrl={workData[currentIndex % 4].workImageUrl}
                        githubUrl={workData[currentIndex % 4].githubUrl}
                    />
                    <div class="rounded-button left"
                        onClick={() => {
                            if(currentIndex <= 0) {
                                setCurrentIndex(2)
                            } else {
                                setCurrentIndex(currentIndex - 1)
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div class="rounded-button right"
                        onClick={() => {

                            setCurrentIndex(currentIndex + 1);

                        }}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Projects