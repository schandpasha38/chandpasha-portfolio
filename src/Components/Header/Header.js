import React, { useState } from 'react';
import './Header.scss'
import ChandPic from './assets/ChandPic.jpg'
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [toggleClass, setToggleClass] = useState('');
    const [ariaexpanded, setariaexpanded] = useState(false);

    const toggleMenu = () => {
        if (toggleClass === '' && ariaexpanded === false) {
            setToggleClass(' open')
            setariaexpanded(true)
        } else {
            setToggleClass('')
            setariaexpanded(false)
        }
    }
    return (
        <header>
            <div className="header-container">
                <Link className="logo" to="/">Chand Pasha</Link>
                <div onClick={toggleMenu} className="hamburger" aria-expanded={ariaexpanded}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className={`header-inner-container${toggleClass}`}>
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
            </div>
        </header>
    );
};

export default Header;