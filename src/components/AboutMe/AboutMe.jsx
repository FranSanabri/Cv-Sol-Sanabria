import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id="about-me" className="about-me">
            <h2>Sobre mí</h2>
            <div className="profile-image-container">
                <img className="profile-image" src="https://i.pinimg.com/originals/d7/f0/44/d7f04426f1116d51976ce844369b1963.jpg" alt="Mi foto de perfil" />
            </div>
            <p className="profile-description">Estudiante de Licenciatura en Psicología - IT Recruiter</p>
            <p>
                Soy estudiante de Licenciatura en Psicología en la Universidad Argentina John F. Kennedy, con el 70% de las materias aprobadas.
                Me encantaría insertarme en el mundo laboral ocupando un lugar donde pueda aportar valor, aprender, desarrollarme y ayudar al resto de las personas con las que trabajo.
            </p>
        </section>
    );
};

export default AboutMe;
