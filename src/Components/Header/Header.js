import React from 'react';
import './Header.scss'
import ChandPic from './assets/ChandPic.jpg'

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
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/">Portfolio</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;