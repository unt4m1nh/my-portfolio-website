import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
    return (
        <div className="container">
            <div className="navbar">
                <ul className="navbar--list">
                    <li><Link className="routes" style={{textDecoration: 'none', color: '#9C9C9C'}} to="/">Home</Link></li>
                    <li><Link className="routes" style={{textDecoration: 'none', color: '#9C9C9C'}} to="/skill">Skills</Link></li>
                    <li><Link className="routes" style={{textDecoration: 'none', color: '#9C9C9C'}} to="/project">Projects</Link></li>
                    <li><Link className="routes" style={{textDecoration: 'none', color: '#9C9C9C'}} to="/contact">Contact</Link></li>
                </ul>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/minh-hoang-03b554223/"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#9C9C9C' }} /></a>
                    <a href="https://github.com/unt4m1nh"><FontAwesomeIcon icon={faGithub} style={{ color: '#9C9C9C' }} /></a>
                    <a href="https://github.com/unt4m1nh"><FontAwesomeIcon icon={faInstagram} style={{ color: '#9C9C9C' }} /></a>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/skill" element={<Skills/>} />
                <Route path="/project" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </div>
    )
}

export default App;