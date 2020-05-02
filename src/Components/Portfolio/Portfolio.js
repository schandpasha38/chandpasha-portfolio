import React from 'react';
import './Portfolio.scss';
import Header from '../Header/Header'
import { Helmet } from 'react-helmet';

function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Portfolio | Chand Pasha | Front-End Developer in Bangalore</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header />
            <section className="Portfolio-section">
                <h1>This is Portfolio</h1>
            </section>
        </>
    );
};

export default Portfolio;