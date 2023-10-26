import "./Home.css"
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import CustomButton from "../components/CustomButton";
import Partnership from "../components/Partnership";

import avatar from "../img/Unta.jpeg"
import fptLogo from "../img/FPT Logo.png"
import samsungLogo from "../img/Samsung-Logo.png"

function Home () {
    return (
        <div className="container">
            <div className="navbar">
                <ul className="navbar--list">
                    <li>Home</li>
                    <li>My skills</li>
                    <li>Projects</li>
                    <li>Contact me</li>
                </ul>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faLinkedin} style={{color: '#9C9C9C' }} />
                    <FontAwesomeIcon icon={faGithub} style={{color: '#9C9C9C'}} />
                    <FontAwesomeIcon icon={faInstagram} style={{color: '#9C9C9C'}}/>
                </div>
            </div>
            <div className="home-content">
                <div className="description">
                    <h1 style={{color: "#fff", marginBottom: "10px"}}>HOÀNG GIA MINH</h1>
                    <p>Full Stack Developer</p>
                    <p>Web Applications</p>
                    <p>Android Applications</p>
                    <CustomButton size="large" variant="common" >Let's get started</CustomButton>
                </div>
                <div className="avatar-container">
                    <img className="avatar" src={avatar} alt="Ava"></img>
                </div>
                <div className="bottom-container">
                    <p style={{color: "#fff"}}>Worked with</p>
                    <div className="list-partnership">
                        <Partnership url={fptLogo}></Partnership>
                        <Partnership url={samsungLogo}></Partnership>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;