// Skills.js
import React from 'react';
import './Skills.css';

const skillsData = [
  {
    title: 'Comunicación Oral',
    description: 'Capacidad para expresarme claramente y de forma convincente con el fin de que las demás personas entiendan mis argumentos como propios'
  },
  {
    title: 'Comunicación Escrita',
    description: 'Capacidad para expresar las ideas de forma gramaticalmente correctas.'
  },
  {
    title: 'Adaptabilidad',
    description: 'Tengo la capacidad para permanecer eficaz dentro de un medio cambiante, así como también a la hora de enfrentarme a nuevas tareas y retos.'
  },

  {
    title: 'Atención al Cliente',
    description: 'Se detectar las expectativas del cliente, asumiendo compromiso en la identificación de cualquier problema y proporcionando las soluciones más idóneas para satisfacer sus necesidades'
  },
  {
    title: 'Compromiso',
    description: 'Soy una persona comprometida a la hora de asumir un rol.'
  },
  {
    title: 'Tolerancia al Estrés',
    description: 'Puedo mantener mi carácter firme ante la acumulación de tareas o responsabilidades, siendo mis respuestas controladas frente a un exceso de ellas'
  },
  {
    title: 'Escucha',
    description: 'Tengo la capacidad de detectar la información importante en la comunicación oral, recurriendo si fuera necesario a preguntas y a los diferentes tipos de comunicación'
  },
  {
    title: 'Sociable',
    description: 'Soy una persona que suele mezclarse fácilmente con las personas, siempre demostrándome abierta y participativa'
  },
  {
    title: 'Trabajo en Equipo',
    description: 'Estoy dispuesta a participar como miembro integrado en un grupo para obtener un beneficio como resultado de la tarea a realizar, independientemente de los intereses personales'
  }
  // ... Añade el resto de habilidades aquí
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
