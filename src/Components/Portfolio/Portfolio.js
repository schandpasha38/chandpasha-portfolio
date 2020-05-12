import React from 'react';
import './Portfolio.scss';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';
import PortfolioItems from './PortfolioItems';

function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Portfolio | Chand Pasha | Front-End Developer in Bangalore</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header />
            <section className="portfolio-section">
                <div className="portfolio-wrapper">


                    <div className="portfolio-title-wrap">
                        <p className="discription">Below is some of the work i have done</p>
                        <h2 className="portfolio-head-title"><span className="underscore">Po</span>rtfolio</h2>
                    </div>


                    <PortfolioItems />

                    
                </div>
            </section>
        </>
    );
};

export default Portfolio;