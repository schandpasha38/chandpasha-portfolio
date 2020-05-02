import React from 'react';
import './Header.scss'
import ChandPic from './assets/ChandPic.jpg'
import { NavLink } from 'react-router-dom';

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
                            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink exact to="/about">About</NavLink></li>
                            <li><NavLink exact to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink exact to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;