import "./hero.scss";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="torresHero"
        // variants={textVariants}
        // initial="initial"
        // animate="animate"
      ></motion.div>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>
            ¡Construyamos un futuro más brillante juntos!
          </motion.h1>
          <motion.h2 variants={textVariants}>
            CONSORCIO CONSTRUCTOR PROFESIONAL S.A. DE C.V.(CCP)
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.a variants={textVariants} href="#Contactanos">
              Contactar ahora!
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="imageContainer"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        {/* <img src="/hero.png" alt="" /> */}
      </motion.div>
    </div>
  );
};

export default Hero;
