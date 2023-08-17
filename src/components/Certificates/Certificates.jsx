import React from 'react';
import './Certificates.css';

const Certificates = () => {
    return (
        <section id="certificates" className="certificates">
            <h2>Certificados</h2>
            <p>Aquí puedes encontrar algunos de mis certificados y logros:</p>
            <div className="certificate-grid">
                <div className="certificate">
                    <img src="https://i.pinimg.com/750x/74/00/91/7400918c3a78a0db46d82925c08976e3.jpg" alt="Certificado 1" />
                    <p>Seleccion de Personal IT</p>
                </div>
                <div className="certificate">
                    <img src="https://i.pinimg.com/750x/db/2c/ac/db2cac08962708fbaa5acdbe413cf886.jpg" alt="Certificado 2" />
                    <p>Integracion Escolar</p>
                </div>
                <div className="certificate">
                    <img src="https://i.pinimg.com/750x/c3/24/b8/c324b8622da904e12552be14bd30214a.jpg" alt="Certificado 3" />
                    <p>Acompañante Terapeutico - Nivel Inicial (85 horas)</p>
                </div>
                <div className="certificate">
                    <img src="https://i.pinimg.com/750x/99/68/47/9968472a9a34827ec224d4172c33298b.jpg" alt="Certificado 4" />
                    <p>Acompañante Terapeutico - Nivel Inicial</p>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
