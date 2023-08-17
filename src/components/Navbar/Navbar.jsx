import React from 'react';
import { Link } from 'react-scroll'; // Importa el componente Link de react-scroll
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link to="about-me" smooth={true} duration={500}>Sobre mí</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Habilidades</Link>
                </li>
                <li>
                    <Link to="certificates" smooth={true} duration={500}>Certificados</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
