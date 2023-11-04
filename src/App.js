import React, { useState } from "react";
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

    const [curPage, setCurPage] = useState('Home');

    return (
        <div className="container">
            <div className="navbar">
                <ul className="navbar--list">
                    <li><Link className="routes"
                        onClick={() => {setCurPage('Home')}}
                        style={{
                            textDecoration: curPage === 'Home' ? 'underline' : 'none',
                            color: curPage === 'Home' ? '#fff' : '#9C9C9C',
                            fontSize: curPage === 'Home' ? 18 : 14
                        }} to="/">Home</Link></li>
                    <li><Link className="routes"
                        onClick={() => {setCurPage('Skills')}}
                        style={{ 
                            textDecoration: curPage === 'Skills' ? 'underline' : 'none', 
                            color: curPage === 'Skills' ? '#fff' : '#9C9C9C',
                            fontSize: curPage === 'Skills' ? 18 : 14
                        }} to="/skill">Skills</Link></li>
                    <li><Link className="routes"
                        onClick={() => {setCurPage('Projects')}}
                        style={{
                            textDecoration: curPage === 'Projects' ? 'underline' : 'none', 
                            color: curPage === 'Projects' ? '#fff' : '#9C9C9C',
                            fontSize: curPage === 'Projects' ? 18 : 14
                        }} to="/project">Projects</Link></li>
                    <li><Link className="routes"
                        onClick={() => {setCurPage('Contact')}}
                        style={{
                            textDecoration: curPage === 'Contact' ? 'underline' : 'none', 
                            color: curPage === 'Contact' ? '#fff' : '#9C9C9C',
                            fontSize: curPage === 'Contact' ? 18 : 14
                        }} to="/contact">Contact</Link></li>
                </ul>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/minh-hoang-03b554223/"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#9C9C9C' }} /></a>
                    <a href="https://github.com/unt4m1nh"><FontAwesomeIcon icon={faGithub} style={{ color: '#9C9C9C' }} /></a>
                    <a href="https://github.com/unt4m1nh"><FontAwesomeIcon icon={faInstagram} style={{ color: '#9C9C9C' }} /></a>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skill" element={<Skills />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App;