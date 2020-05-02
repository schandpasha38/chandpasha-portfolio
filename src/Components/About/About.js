import React from 'react';
import './About.scss';
import Header from '../Header/Header';
import AboutChandPic from './assets/AboutChandPic.png'
import { Helmet } from "react-helmet";
import gitIcon from './assets/svgicons/github.svg';
import linkedInIcon from './assets/svgicons/linkedin.svg';
import twitterIcon from './assets/svgicons/twitter.svg';
import eMialIcon from './assets/svgicons/email.svg';
import { HTML, CSS, SASS, BOOTSTRAP, JAVASCRIPT, JQUERY, REACT, NODEJS } from './assets/UITools/index'


function About() {
    return (
        <>
            <Helmet>
                <title>About | Chand Pasha | Front-End Developer in Bengaluru</title>
                <meta name="description" content="Chand Pasha is a Front End Developer based in Bengaluru" />
            </Helmet>
            <Header />
            <section className="about-section">
                <div className="about-wrapper">
                    <div className="about-headline">
                        <h2>About Me</h2>
                    </div>
                    <div className="about-section-container">
                        <section className="about-text-container">
                            <div className="about-text">
                                <p>My name is Chand Pasha I'm a 30 years old Freelance Front-end developer  based in Bengaluru. I describe myself as a developer who loves web technologies.</p>
                                <p>Before I got into software, I worked for a ECommerce company for almost five years building websites with HTML, CSS, and JavaScript In my spare time While working full time, I was learning and growing my skills as a Front-End developer.</p>
                                <h3>This are some Tech i use</h3>
                                HTML, CSS, Sass, Bootstrap, Javascript (ES5, ES6), jQuery, React, Node.js, GIT, Express, MongoDB
                            </div>
                        </section>
                        <section className="about-pic-container">
                            <img src={AboutChandPic} alt="" />
                            <div className="about-social">
                                <li><a href="https://www.github.com/schandpasha38" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={gitIcon} alt="" /></a></li>
                                <li><a href="https://www.linkedin.com/in/chand-pasha-b6433889" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={linkedInIcon} alt="" /></a></li>
                                <li><a href="https://www.twitter.com/itschandpasha" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={twitterIcon} alt="" /></a></li>
                                <li><a href="mailto:schandpasha38@gmail.com" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={eMialIcon} alt="" /></a></li>
                            </div>
                        </section>
                    </div>

                    <div className="about-section-toolsused">
                        <ul>
                            <li><img src={HTML} alt=""/></li>
                            <li><img src={CSS} alt=""/></li>
                            <li><img src={SASS} alt=""/></li>
                            <li><img src={BOOTSTRAP} alt=""/></li>
                            <li><img src={JAVASCRIPT} alt=""/></li>
                            <li><img src={JQUERY} alt=""/></li>
                            <li><img src={REACT} alt=""/></li>
                            <li><img src={NODEJS} alt=""/></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;