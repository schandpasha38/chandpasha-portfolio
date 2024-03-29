import React from 'react';
import './About.css';
import Header from '../Header/Header';
import { Helmet } from "react-helmet";
import AboutChandPic from './assets/AboutChandPic.jpg';
import * as UiTools from './assets/UITools/index';
import SocialButtons from '../SocialButtons/SocialButtons';
import Workexperiance from './experiance';
import Education from './Education';
import ChandResume from './assets/Resume/Chand Pasha.pdf'

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


                    <div className="about-aboutme">
                        <div className="about-headline">
                            <p className="about-discription">Get to know me</p>
                            <h2 className="about-title"><span className="underscore">Ab</span>out Me</h2>
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
                                    <a className="download-cv" href={ChandResume} target="_blank" rel="noopener noreferrer">Download CV</a>
                                    <div className="about-social">
                                        <SocialButtons />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>


                    <div className="about-skills">
                        <div className="about-headline">
                            <p className="about-discription">languages and tools i know and use</p>
                            <h2 className="about-title"><span className="underscore">Sk</span>ills</h2>
                        </div>
                        <div className="about-section-container">
                            <ul>
                                <li><img src={UiTools.HTML} alt="html logo" /></li>
                                <li><img src={UiTools.CSS} alt="css  logo" /></li>
                                <li><img src={UiTools.JAVASCRIPT} alt="javascript logo" /></li>
                                <li><img src={UiTools.REACT} alt="react logo" /></li>
                                <li><img src={UiTools.NODEJS} alt="nodejs logo" /></li>
                                <li><img src={UiTools.JQUERY} alt="jquery logo" /></li>
                                <li><img src={UiTools.SASS} alt="sass logo" /></li>
                                <li><img src={UiTools.BOOTSTRAP} alt="bootstrap logo" /></li>
                                <li><img src={UiTools.GIT} alt="git logo" /></li>
                            </ul>
                        </div>
                    </div>


                    <div className="about-experience">
                        <div className="about-headline">
                            <h2 className="about-title"><span className="underscore">Ex</span>perience</h2>
                        </div>
                        <div className="about-section-container">
                            <div className="job-container">
                                <div className="job-inner">
                                    <Workexperiance />
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="about-education">
                        <div className="about-headline">
                            <h2 className="about-title"><span className="underscore">Ed</span>ucation</h2>
                        </div>
                        <div className="about-section-container">
                            <div className="education-container">
                                <div className="education-inner">
                                    <Education />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};

export default About;