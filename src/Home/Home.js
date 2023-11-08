import "./Home.css"
import React from "react";

import CustomButton from "../components/CustomButton";
import Partnership from "../components/Partnership";

import avatar from "../img/Unta.jpeg"
import fptLogo from "../img/FPT Logo.png"
import samsungLogo from "../img/Samsung-Logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import { useAppState } from "../AppProvider";

function Home() {

    const { updatePage } = useAppState();

    const handleButtonClick = () => {
        console.log('Button Clicked')
        updatePage('Skills');
    };


    return (
        <div className="home-container">
            <div className="home-content">
                <div className="description">
                    <h1 style={{ color: "#fff", marginBottom: "10px" }}>HOÀNG GIA MINH</h1>
                    <p>Full Stack Developer</p>
                    <p>Web Applications</p>
                    <p>Android Applications</p>
                    <Link
                        //onClick={() => {}}
                        to="/skill"
                    >
                        <CustomButton
                            variant="common"
                            size="large"
                            onClick={handleButtonClick}
                        >Let's get started</CustomButton>
                    </Link>
                </div>
                <div className="avatar-container">
                    <img className="avatar" src={avatar} alt="Ava"></img>
                </div>
                <div className="bottom-container">
                    <p style={{ color: "#fff" }}>Worked with</p>
                    <div className="list-partnership">
                        <Partnership url={fptLogo}></Partnership>
                        <Partnership url={samsungLogo}></Partnership>
                    </div>
                </div>
            </div>
            <div className="home-content-mobile">
                <p>My name is Minh</p>
                <h1>I'm a Developer</h1>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/minh-hoang-03b554223/"><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: '#fff' }} /></a>
                    <a href="https://github.com/unt4m1nh"><FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: '#fff' }} /></a>
                    <a href="https://github.com/unt4m1nh"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{ color: '#fff' }} /></a>
                </div>
                <Link
                    //onClick={() => {}}
                    to="/skill"
                >
                    <CustomButton
                        variant="common"
                        size="large"
                        onClick={handleButtonClick}
                    >Let's get started</CustomButton>
                </Link>
            </div>
        </div>
    )
}

export default Home;