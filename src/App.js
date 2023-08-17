import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'; 

function App() {
    const [showArrow, setShowArrow] = useState(true);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setShowArrow(false);
        } else {
            setShowArrow(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="app-container">
            <Navbar />
            <AboutMe />
            <Skills />
            <Certificates />
            <Contact />
            <Footer />
            <div className={`floating-arrow-container ${showArrow ? '' : 'hide-arrow'}`}>
                <div className="circle">
                    <div
                        className="floating-arrow"
                        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                    >
                        ▼
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
