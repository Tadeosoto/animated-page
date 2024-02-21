import "./catalogo.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Líneas de Transmisión, Subtransmisión y Distribución",
    img: "https://images.pexels.com/photos/207541/pexels-photo-207541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Subestaciones Eléctricas",
    img: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum dolores animi dolore dolor dignissimos porro rerum praesentium aliquam ex. Quisquam quod aliquam ipsa necessitatibus temporibus illum reiciendis earum incidunt!",
  },
  {
    id: 3,
    title:
      "Redes Eléctricas Aéreas y Subterráneas en Alta, Media y Baja Tensión",
    img: "https://images.pexels.com/photos/6862189/pexels-photo-6862189.jpeg",
  },
  {
    id: 4,
    title:
      "Instalaciones eléctricas de baja tensión de tipo residencial, comercial e industrial",
    img: "./focos.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum dolores animi dolore dolor dignissimos porro rerum praesentium aliquam ex. Quisquam quod aliquam ipsa necessitatibus temporibus illum reiciendis earum incidunt!",
  },
  {
    id: 5,
    title: "Tableros de Distribución y Control",
    img: "./tablero.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum dolores animi dolore dolor dignissimos porro rerum praesentium aliquam ex. Quisquam quod aliquam ipsa necessitatibus temporibus illum reiciendis earum incidunt!",
  },
  {
    id: 6,
    title: "Sistemas de Tierras y Pararrayos",
    img: "./pararrayos.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum dolores animi dolore dolor dignissimos porro rerum praesentium aliquam ex. Quisquam quod aliquam ipsa necessitatibus temporibus illum reiciendis earum incidunt!",
  },
  {
    id: 7,
    title: "Alumbrado",
    img: "https://images.unsplash.com/photo-1673268256087-7383f2ab84a2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum dolores animi dolore dolor dignissimos porro rerum praesentium aliquam ex. Quisquam quod aliquam ipsa necessitatibus temporibus illum reiciendis earum incidunt!",
  },
  {
    id: 8,
    title: "Instalaciones de voz y datos",
    img: "https://images.pexels.com/photos/4657256/pexels-photo-4657256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum dolores animi dolore dolor dignissimos porro rerum praesentium aliquam ex. Quisquam quod aliquam ipsa necessitatibus temporibus illum reiciendis earum incidunt!",
  },
  {
    id: 9,
    title:
      "Servicios Generales de Ingenería, Construcción y Proyectos ejecutivos de Obra eléctrica",
    img: "https://images.pexels.com/photos/3760532/pexels-photo-3760532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum dolores animi dolore dolor dignissimos porro rerum praesentium aliquam ex. Quisquam quod aliquam ipsa necessitatibus temporibus illum reiciendis earum incidunt!",
  },
  {
    id: 10,
    title: "Edificación",
    img: "https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum dolores animi dolore dolor dignissimos porro rerum praesentium aliquam ex. Quisquam quod aliquam ipsa necessitatibus temporibus illum reiciendis earum incidunt!",
  },
  {
    id: 11,
    title: "Cimentaciones",
    img: "./cimentacion.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum dolores animi dolore dolor dignissimos porro rerum praesentium aliquam ex. Quisquam quod aliquam ipsa necessitatibus temporibus illum reiciendis earum incidunt!",
  },
  {
    id: 12,
    title: "Estructuras Metálicas y de Concreto",
    img: "./torre.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum dolores animi dolore dolor dignissimos porro rerum praesentium aliquam ex. Quisquam quod aliquam ipsa necessitatibus temporibus illum reiciendis earum incidunt!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Catalogo = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="catalogo" ref={ref}>
      <div className="progress">
        <motion.h1>Obras Electromecanicas y civiles</motion.h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Catalogo;
