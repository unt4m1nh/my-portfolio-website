import React from "react";

import "./Skills.css"

import cpp from "../img/cpp.jpg"
import web from "../img/web.jpg"
import mobile from "../img/mobile.jpg"

function Skills() {
    return (
        <div className="skills-container">
            <div className="heading">
                <h1>My Skills</h1>
                <p>
                    Building websites, web applications and more ...
                </p>
            </div>
            <div className="work">
                <div className="work-info">
                    <h2>Developing Website</h2>
                    <p className="work-description">
                        Manage to use various kind of frameworks for full-stack
                        development: React, Nodejs, Express
                    </p>
                </div>
                <div className="work-img">
                    <img src={web} alt="work-img"></img>
                </div>
            </div>
            <div className="work">
                <div className="work-img">
                    <img src={mobile} alt="work-img"></img>
                </div>
                <div className="work-info">
                    <h2>Developing mobile applications</h2>
                    <p className="work-description">
                        Developing Mobile Apps based on React Native / Android Java
                    </p>
                </div>
            </div>
            <div className="work">
                <div className="work-info">
                    <h2>Designing database</h2>
                    <p className="work-description">
                        Design SQL / Non-SQL databases for storing users data.
                    </p>
                </div>
                <div className="work-img">
                    <img src={cpp} alt="work-img"></img>
                </div>
            </div>
        </div>
    )
}

export default Skills