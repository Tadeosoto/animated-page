import "./parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "Servicios"
            ? "linear-gradient(180deg, #111132 #0c0c1d)"
            : "linear-gradient(180deg, #111132 #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }} variants={variants}>
        {type === "quienessomos" ? "¿Quienes somos?" : "Servicios"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "Servicios" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </motion.div>
  );
};

export default Parallax;
