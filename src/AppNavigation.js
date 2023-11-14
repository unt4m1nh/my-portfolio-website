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
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useAppState } from "./AppProvider";

function AppNaviagation() {
    const { curPage, updatePage } = useAppState();
    const [isClicked, setIsClicked] = useState(false);
    console.log(curPage);
    return (
        <div className="container">
            <div id="navbar-none-mobile" className="navbar">
                <ul className="navbar--list">
                    <li><Link className="routes"
                        onClick={() => { updatePage('Home') }}
                        style={{
                            textDecoration: curPage === 'Home' ? 'underline' : 'none',
                            color: curPage === 'Home' ? '#fff' : '#9C9C9C',
                            fontSize: curPage === 'Home' ? 18 : 14
                        }} to="/">Home</Link></li>
                    <li><Link className="routes"
                        onClick={() => { updatePage('Skills') }}
                        style={{
                            textDecoration: curPage === 'Skills' ? 'underline' : 'none',
                            color: curPage === 'Skills' ? '#fff' : '#9C9C9C',
                            fontSize: curPage === 'Skills' ? 18 : 14
                        }} to="/skill">Skills</Link></li>
                    <li><Link className="routes"
                        onClick={() => { updatePage('Projects') }}
                        style={{
                            textDecoration: curPage === 'Projects' ? 'underline' : 'none',
                            color: curPage === 'Projects' ? '#fff' : '#9C9C9C',
                            fontSize: curPage === 'Projects' ? 18 : 14
                        }} to="/project">Projects</Link></li>
                    <li><Link className="routes"
                        onClick={() => { updatePage('Contact') }}
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
            <div id="navbar-mobile" className="navbar">

                {
                    isClicked ? (
                        <div className="menu-btn" onClick={() => { setIsClicked(false) }}>
                            <FontAwesomeIcon icon={faXmark} size="xl" style={{ color: '#fff' }} />
                        </div>
                    ) : (
                        <div className="menu-btn" onClick={() => { setIsClicked(true) }}>
                            <FontAwesomeIcon icon={faBars} size="xl" style={{ color: '#fff' }} />
                        </div>
                    )
                }
            </div>
            {
                isClicked && (
                    <div className="dropdown">
                        <ul className="navbar--list">
                            <li><Link className="routes"
                                onClick={() => {
                                    updatePage('Home');
                                    setIsClicked(false);
                                }}
                                style={{
                                    textDecoration: curPage === 'Home' ? 'underline' : 'none',
                                    color: curPage === 'Home' ? '#fff' : '#9C9C9C',
                                    fontSize: curPage === 'Home' ? 18 : 14
                                }} to="/">Home</Link></li>
                            <li><Link className="routes"
                                onClick={() => {
                                    updatePage('Skills');
                                    setIsClicked(false);
                                }}
                                style={{
                                    textDecoration: curPage === 'Skills' ? 'underline' : 'none',
                                    color: curPage === 'Skills' ? '#fff' : '#9C9C9C',
                                    fontSize: curPage === 'Skills' ? 18 : 14
                                }} to="/skill">Skills</Link></li>
                            <li><Link className="routes"
                                onClick={() => {
                                    updatePage('Projects');
                                    setIsClicked(false);
                                }}
                                style={{
                                    textDecoration: curPage === 'Projects' ? 'underline' : 'none',
                                    color: curPage === 'Projects' ? '#fff' : '#9C9C9C',
                                    fontSize: curPage === 'Projects' ? 18 : 14
                                }} to="/project">Projects</Link></li>
                            <li><Link className="routes"
                                onClick={() => {
                                    updatePage('Contact');
                                    setIsClicked(false);
                                }}
                                style={{
                                    textDecoration: curPage === 'Contact' ? 'underline' : 'none',
                                    color: curPage === 'Contact' ? '#fff' : '#9C9C9C',
                                    fontSize: curPage === 'Contact' ? 18 : 14
                                }} to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                )
            }
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skill" element={<Skills />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default AppNaviagation;