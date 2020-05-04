import React from 'react';
import Typewriter from 'typewriter-effect';
import './HomeBanner.scss';
import HeroChandPic from './assets/HeroChandPic.png';

function HomeBanner() {
    return (
        <section className="homeBanner-section">
            <div className="homeBanner-container">
                <div className="homeBanner-left-text">
                    <h3>HEY THERE !</h3>
                    <h1>Hi, I'm Chand Pasha</h1>
                    <h5><Typewriter
                        options={{
                            strings: ['Front End Developer in Bengaluru', 'Freelance in Bengaluru'],
                            autoStart: true,
                            loop: true,
                        }}
                    /> <span></span></h5>
                    <a id="primary_btn" href="/portfolio"><span>View My Resume</span></a>
                </div>
                <div className="homeBanner-left-img">
                    <img src={HeroChandPic} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;