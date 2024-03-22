import React from "react";
import CardItem from "./CardItem";
import "./cards.scss";
import transition from "../../transition";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Nuestros Servicios</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.pexels.com/photos/207541/pexels-photo-207541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              text="Líneas de Transmisión, Subtransmisión y Distribución"
              label="Obra Civil y Electromécanica"
              path="/servicios"
            />
            <CardItem
              src="./subestacionElectrica.jpg"
              text="Subestaciones Eléctricas"
              label="Obra Civil y Electromécanica"
              path="/servicios"
            />
            <CardItem
              src="https://images.pexels.com/photos/6862189/pexels-photo-6862189.jpeg"
              text="Redes Eléctricas Aéreas y Subterráneas en Alta, Media y Baja Tensión"
              label="Obra Civil y Electromécanica"
              path="/servicios"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./torreTC.jpg"
              text="Torres de telecomunicaciones"
              label="Obra Civil y Electromécanica"
              path="/servicios"
            />
            <CardItem
              src="./focos.jpg"
              text="Instalaciones eléctricas de baja tensión"
              label="Obra civil"
              path="/servicios"
            />
            <CardItem
              src="./tablero2.jpg"
              text="Tableros de Distribución y Control"
              label="Obra Electromécanica"
              path="/servicios"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./sistemaTierra.jpg"
              text="Sistemas de Tierras y Pararrayos"
              label="Obra Civil y Electromécanica"
              path="/servicios"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1673268256087-7383f2ab84a2"
              text="Alumbrado"
              label="Obra Civil"
              path="/servicios"
            />
            <CardItem
              src="./vozyDatos.jpg"
              text="Instalaciones de voz y datos"
              label="Conectividad"
              path="/servicios"
            />
            <CardItem
              src="https://images.pexels.com/photos/3760532/pexels-photo-3760532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              text="Servicios Generales de Ingenería, Construcción y Proyectos ejecutivos de Obra eléctrica"
              label="Planeación"
              path="/servicios"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default transition(Cards);
