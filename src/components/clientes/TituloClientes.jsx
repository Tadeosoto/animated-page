import React from "react";
import { motion } from "framer-motion";
import "./tituloclientes.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const TituloClientes = () => {
  return (
    <motion.div
      className="tituloClientes"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="titleContainer">
        <div className="title">
          <h1 className="renglon1">
            <b></b> Algunos de nuestros{" "}
            <motion.b whileHover={{ color: "#f5522d" }}>clientes</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1 className="renglon2">en el sector público</h1>
        </div>
        <div className="title">
          <h1> y privado:</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TituloClientes;
