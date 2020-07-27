import React from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header'

function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact | Chand Pasha | Front-End Developer in Bangalore</title>
                <meta name="description" content="contact chand pasha a front end developer in bangalore" />
            </Helmet>
            <Header />
            <section className="contact-section">
                <div className="contact-wrapper">

                    <div className="contact-title-wrap">
                        <h2 className="contact-head-title"><span className="underscore">Co</span>ntact</h2>
                        <p className="discription">Are you a business looking for a new website or looking to hire? Feel free to email me or use the contact form below to get in touch. I would love to hear from you!</p>
                    </div>

                    <div className="contact-options">
                        <div className="contact contact-options-email">
                            <h2>Mail Me on below E-Mail ID</h2>
                            <a href="mailto:schandpasha38@gmail.com">schandpasha38@gmail.com</a>
                        </div>
                        <div className="contact contact-options-call">
                            <h2>Call Me on Below Mobile Number</h2>
                            <a href="tel:+919945034448">9945034448</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Contact;