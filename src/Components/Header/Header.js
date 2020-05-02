import React from 'react';
import './Header.scss'
import ChandPic from './assets/ChandPic.jpg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <a href="/">
                        <img className="header-logo-pic" src={ChandPic} alt="Chand Profile" />
                    </a>
                </div>
                <div className="header-nav">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;