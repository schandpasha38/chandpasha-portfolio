import React from 'react';
import './Contact.scss';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header'

function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact | Chand Pasha | Front-End Developer in Bangalore</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header />
            <section className="contact-section">
                <h1>This is Contact</h1>
            </section>
        </>
    );
};

export default Contact;