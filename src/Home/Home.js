import "./Home.css"
import React from "react";

import CustomButton from "../components/CustomButton";
import Partnership from "../components/Partnership";

import avatar from "../img/Unta.jpeg"
import fptLogo from "../img/FPT Logo.png"
import samsungLogo from "../img/Samsung-Logo.png"

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="description">
                    <h1 style={{ color: "#fff", marginBottom: "10px" }}>HOÀNG GIA MINH</h1>
                    <p>Full Stack Developer</p>
                    <p>Web Applications</p>
                    <p>Android Applications</p>
                    <CustomButton
                        variant="common"
                        size="large"
                        onClick={() => console.log('Button Clicked')}
                    >Let's get started</CustomButton>
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
        </div>
    )
}

export default Home;