import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contacto</h2>
            <div className="contact-icons">
                <a href="https://www.instagram.com/msolciiss/" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <div className="icon-background"></div>
                    <div className="hover-background"></div>
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/maria-sol-sanabria-051961205/" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <div className="icon-background"></div>
                    <div className="hover-background"></div>
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
                <a href="mailto:msolcis18@gmail.com" className="icon-link">
                    <div className="icon-background"></div>
                    <div className="hover-background"></div>
                    <FontAwesomeIcon icon={faGoogle} className="icon" />
                </a>
            </div>
        </section>
    );
};

export default Contact;
