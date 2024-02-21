import React from "react";
import { animate, motion, useInView } from "framer-motion";
import "./quienessomos.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const QuienesSomos = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="quienesSomos"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Constituida
          <br /> como:
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.jpg" alt="" />
          <h1>
            CONSORCIO{" "}
            <motion.b whileHover={{ color: "#f5522d" }}>CONSTRUCTOR</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#f5522d" }}>PROFESIONAL </motion.b>
            S.A. DE C.V.(CCP)
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Identidad</h2>
          <p>
            Somos una empresa con sede en Jalisco dedicada a la realización de
            proyectos y ejecución de obras electromecánicas y civiles en todo
            México. Contamos con un equipo experimentado y comprometido que
            brinda servicios de calidad, utilizando recursos técnicos,
            tecnológicos y humanos para satisfacer las necesidades de nuestros
            clientes.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MISIÓN</h2>
          <p>
            Empresa dedicada a proyectos y obras electromecánicas y civiles a
            nivel local, regional y nacional, con altos estándares de eficiencia
            y calidad para satisfacer necesidades del sector público y privado
            en construcción."
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>VISIÓN</h2>
          <p>
            Ser la empresa lider en el mercado, construyendo con calidad y
            profesionalismo que contribuya al desarrollo productivo de la
            organización y la sociedad.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>NUESTROS VALORES</h2>
          <li>Experiencia</li>
          <li>Servicio</li>
          <li>Calidad</li>
          <li>Integridad</li>
          <li>Innovación </li>
          <li>Compromiso</li>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default QuienesSomos;
