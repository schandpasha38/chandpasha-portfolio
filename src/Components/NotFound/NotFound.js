import React from 'react';
import './NotFound.scss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
        <Header />
        <section className="notfound-section">
            <h1>This page was Notfound</h1>
            <Link to="/">Go Home</Link>
        </section>
        </>
    );
};

export default NotFound;