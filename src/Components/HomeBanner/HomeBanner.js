import React from 'react';
import Typewriter from 'typewriter-effect';
import './HomeBanner.css';
import HeroChandPic from './assets/HeroChandPic.png';
import SocialButtons from '../SocialButtons/SocialButtons';
import { Link } from 'react-router-dom'

function HomeBanner() {
    return (
        <section className="homeBanner-section">
            <div className="homeBanner-container">
                <div className="homeBanner-left-text">
                    <h3>HEY THERE !</h3>
                    <h1>Hi, I'm Chand Pasha</h1>
                    <h1 id="title-for-mob">{"<Chand Pasha />"}</h1>
                    <h5><Typewriter
                        options={{
                            strings: ['Front End Developer in Bengaluru', 'Freelance in Bengaluru'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h5>
                    <h5 id="typing-for-mob"><Typewriter
                        options={{
                            strings: ['I\'m Front End Developer', 'I\'m Freelance Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h5>
                    <Link id="primary_btn" to="/about"><span>View My Resume</span></Link>
                </div>
                <div className="homeBanner-left-img">
                    <img src={HeroChandPic} alt="" />
                </div>
            </div>
            <div className="homebanner-social">
                <SocialButtons />
            </div>
        </section>
    );
};

export default HomeBanner;