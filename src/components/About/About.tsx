import React from "react";
import "./about.scss";
import Reveal from "./Reveal";

const About = () => {
  return (
    <div>
      <div className="title-container">
        <h1>¿QUIENES SOMOS?</h1>
      </div>

      <div className="about-section">
        <div className="identidad-container">
          <img src="./identidad.jpg" alt="" />

          <div className="title-box">
            <Reveal>
              <h2>CONSORCIO CONSTRUCTOR PROFESIONAL</h2>
            </Reveal>
            <Reveal>
              <p>
                Somos una empresa que realiza proyectos y obras electromecánicas
                y civiles en todo México con equipo experto y comprometido para
                satisfacer las necesidades de nuestros clientes.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mision-container">
          <div className="text-box">
            <Reveal>
              <h2>MISIÓN</h2>
            </Reveal>
            <Reveal>
              <p>
                Empresa especializada en proyectos y obras electromecánicas y
                civiles a nivel local, regional y nacional, con altos estándares
                de calidad y eficiencia para satisfacer las necesidades tanto
                del sector público como del privado en construcción.
              </p>
            </Reveal>
          </div>
          <div className="text-box">
            <Reveal>
              <h2>VISIÓN</h2>
            </Reveal>
            <Reveal>
              <p>
                Ser la empresa lider en el mercado, construyendo con calidad y
                profesionalismo que contribuya al desarrollo productivo de la
                organización y la sociedad.
              </p>
            </Reveal>
          </div>
          <div className="text-box">
            <Reveal>
              <h2> NUESTROS VALORES</h2>
            </Reveal>
            <Reveal>
              <li>Experiencia</li>
            </Reveal>
            <Reveal>
              <li>Servicio</li>
            </Reveal>
            <Reveal>
              <li>Calidad</li>
            </Reveal>
            <Reveal>
              <li>Integridad</li>
            </Reveal>
            <Reveal>
              <li>Innovación </li>
            </Reveal>
            <Reveal>
              <li>Compromiso</li>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
