import React from 'react';
import gitIcon from './assets/svgicons/github.svg';
import linkedInIcon from './assets/svgicons/linkedin.svg';
import twitterIcon from './assets/svgicons/twitter.svg';
import eMialIcon from './assets/svgicons/email.svg';

function SocialButtons() {
    return (
        <>
            <li><a href="https://www.github.com/schandpasha38" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={gitIcon} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/chand-pasha-b6433889" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={linkedInIcon} alt="" /></a></li>
            <li><a href="https://www.twitter.com/itschandpasha" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={twitterIcon} alt="" /></a></li>
            <li><a href="mailto:schandpasha38@gmail.com" target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={eMialIcon} alt="" /></a></li>
        </>
    )
}

export default SocialButtons;