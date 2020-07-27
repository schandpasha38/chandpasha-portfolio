import React from 'react';
import './NotFound.css';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 Error</title>
            </Helmet>
            <Header />
            <section className="notfound-section">
                <div className="notfound-container">
                    <h1>OOPS!</h1>
                    <h3>LOOKS LIKE YOU GOT LOST</h3>
                    <p>The page you are looking for not found. Go Home by <Link to="/">Clicking Here</Link></p>
                </div>
            </section>
        </>
    );
};

export default NotFound;