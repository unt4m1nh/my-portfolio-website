import React from "react";

import "./Skills.css"

import cpp from "../img/cpp.jpg"
import web from "../img/web.jpg"
import mobile from "../img/mobile.jpg"

import fw1 from "../img/icons8-react-40.svg"
import fw2 from "../img/icons8-nodejs.svg"
import fw3 from "../img/icons8-express-js.svg"

import fw4 from "../img/icons8-react-native.svg"
import fw5 from "../img/icons8-android.svg"
import fw6 from "../img/icons8-java.svg"

import fw7 from "../img/icons8-mongodb.svg"
import fw8 from "../img/icons8-mysql.svg"

function Skills() {

    return (
        <div className="skills-container">
            <div className="content">
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
                        <div className="frame-work">
                            <img alt="fw1" src={fw1}></img>
                            <img alt="fw2" src={fw2}></img>
                            <img alt="fw3" src={fw3}></img>
                        </div>
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
                        <div className="frame-work">
                            <img alt="fw4" src={fw4}></img>
                            <img alt="fw5" src={fw5}></img>
                            <img alt="fw6" src={fw6}></img>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <div className="work-info">
                        <h2>Designing database</h2>
                        <p className="work-description">
                            Design SQL / Non-SQL databases for storing users data.
                        </p>
                        <div className="frame-work">
                            <img alt="fw7" src={fw7}></img>
                            <img alt="fw8" src={fw8}></img>
                        </div>
                    </div>
                    <div className="work-img">
                        <img src={cpp} alt="work-img"></img>
                    </div>
                </div>
            </div>
            <div className="content-mobile">
                <div className="heading">
                    <h1>My Skills</h1>
                </div>
                <div className="work">
                    <div className="work-img">
                        <img src={web} alt="work-img"></img>
                    </div>
                    <h2>Developing Website</h2>
                    <p className="work-description">
                        Manage to use various kind of frameworks for full-stack
                        development: React, Nodejs, Express
                    </p>
                    <div className="frame-work">
                        <img alt="fw1" src={fw1}></img>
                        <img alt="fw2" src={fw2}></img>
                        <img alt="fw3" src={fw3}></img>
                    </div>
                </div>
                <div className="work">
                    <div className="work-img">
                        <img src={mobile} alt="work-img"></img>
                    </div>
                    <h2>Developing mobile applications</h2>
                    <p className="work-description">
                        Developing Mobile Apps based on React Native / Android Java
                    </p>
                    <div className="frame-work">
                        <img alt="fw4" src={fw4}></img>
                        <img alt="fw5" src={fw5}></img>
                        <img alt="fw6" src={fw6}></img>
                    </div>
                </div>
                <div className="work">
                    <div className="work-img">
                        <img src={cpp} alt="work-img"></img>
                    </div>
                    <h2>Designing database</h2>
                    <p className="work-description">
                        Design SQL / Non-SQL databases for storing users data.
                    </p>
                    <div className="frame-work">
                        <img alt="fw7" src={fw7}></img>
                        <img alt="fw8" src={fw8}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills