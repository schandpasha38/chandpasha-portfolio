import React from 'react';
import './HomeBanner.scss'
import HeroChandPic from './assets/HeroChandPic.png'

function HomeBanner() {
    return (
        <section className="homeBanner-section">
            <div className="homeBanner-container">
                <div className="homeBanner-left-text">
                    <h3>HEY THERE !</h3>
                    <h1>Hi, I'm {`<Chand Pasha />`}</h1>
                    <h5>Front-End Developer in Bangalore</h5>
                    <a className="primary_btn" href="/portfolio"><span>View My Resume</span></a>
                </div>
                <div className="homeBanner-left-img">
                    <div>
                        <img src={HeroChandPic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;