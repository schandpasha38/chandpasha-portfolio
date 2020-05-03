import React from 'react';
import './About.scss';
import Header from '../Header/Header';
import AboutChandPic from './assets/AboutChandPic.jpg'
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
                        <p className="about-discription">Get to know me</p>
                        <h2 className="about-title">About Me</h2>
                    </div>

                    <div className="about-section-container">
                        <section className="about-pic-container">
                            <img className="about-pic-pic" src={AboutChandPic} alt="" />
                        </section>
                        <section className="about-text-container">
                            <div className="about-text-head">
                                <h6 className="about-text-title">I'm Chand Pasha, Freelance Front-end developer </h6>
                                <div className="about-text-discription">
                                    <p>I am Freelance Front-end developer based in Bengaluru. I describe myself as a developer who loves web technologies.</p>
                                    <p>Before I got into software, I worked for a ECommerce company for almost five years building websites with HTML, CSS, and JavaScript In my spare time While working full time, I was learning and growing my skills as a Front-End developer.</p>
                                </div>
                            </div>
                            <div className="about-text-details">
                                <div className="about-text-info-row">
                                    <div className="single-info"><span>Name:</span><p>Chand Pasha</p></div>
                                    <div className="single-info"><span>Email:</span><p><a href="mailto:schandpasha38@gmail.com" target="_blank" rel="noopener noreferrer">schandpasha38@gmail.com</a></p></div>
                                </div>
                                <div className="about-text-info-row">
                                    <div className="single-info"><span>Age:</span><p>30</p></div>
                                    <div className="single-info"><span>From:</span><p>Bengaluru</p></div>
                                </div>
                            </div>
                            <div className="about-text-social">
                                <a className="download-cv" href="/">Download CV</a>
                                <div className="about-social">
                                    <li><a href="https://www.github.com/schandpasha38" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={gitIcon} alt="" /></a></li>
                                    <li><a href="https://www.linkedin.com/in/chand-pasha-b6433889" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={linkedInIcon} alt="" /></a></li>
                                    <li><a href="https://www.twitter.com/itschandpasha" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={twitterIcon} alt="" /></a></li>
                                    <li><a href="mailto:schandpasha38@gmail.com" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={eMialIcon} alt="" /></a></li>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="about-section-toolsused">
                        <ul>
                            <li><img src={HTML} alt="" /></li>
                            <li><img src={CSS} alt="" /></li>
                            <li><img src={SASS} alt="" /></li>
                            <li><img src={BOOTSTRAP} alt="" /></li>
                            <li><img src={JAVASCRIPT} alt="" /></li>
                            <li><img src={JQUERY} alt="" /></li>
                            <li><img src={REACT} alt="" /></li>
                            <li><img src={NODEJS} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;