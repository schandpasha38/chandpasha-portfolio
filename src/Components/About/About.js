import React from 'react';
import './About.scss';
import gitIcon from './assets/svgicons/github.svg'
import linkedInIcon from './assets/svgicons/linkedin.svg'
import twitterIcon from './assets/svgicons/twitter.svg'
import eMialIcon from './assets/svgicons/email.svg'

function About() {
    return (
        <section className="about-section">
            <div className="about-section-container">
                <div className="about-headline">
                    <h2>About Me</h2>
                </div>
                <section className="about-text-container">
                    <div className="about-text">
                        <p>My name is Chand Pasha I'm a 30 years old Front End Developer based in Bangalore. I describe myself as a developer who loves coding, open source, and the web platform.</p>
                        <p>In my spare time I like to create and to open source projects. That helps me to learn a lots of new stuff, grow as a developer and support other open source projects. I love travelling and discovering new places.</p>
                    </div>
                    <div className="about-social">
                        <li><a href="https://www.github.com/schandpasha38" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={gitIcon} alt="" /></a></li>
                        <li><a href="https://www.linkedin.com/in/chand-pasha-b6433889" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={linkedInIcon} alt="" /></a></li>
                        <li><a href="https://www.twitter.com/itschandpasha" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={twitterIcon} alt="" /></a></li>
                        <li><a href="mailto:schandpasha38@gmail.com" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={eMialIcon} alt="" /></a></li>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;