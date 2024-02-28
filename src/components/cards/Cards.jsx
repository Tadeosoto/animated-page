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
              label="Construccion"
              path="/servicios"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1509390144018-eeaf65052242?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Subestaciones Eléctricas"
              label="Construccion"
              path="/servicios"
            />
            <CardItem
              src="https://images.pexels.com/photos/6862189/pexels-photo-6862189.jpeg"
              text="Redes Eléctricas Aéreas y Subterráneas en Alta, Media y Baja Tensión"
              label="Construccion"
              path="/servicios"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./focos.jpg"
              text="Instalaciones eléctricas de baja tensión de tipo residencial, comercial e industrial"
              label="Construccion"
              path="/servicios"
            />
            <CardItem
              src="./tablero.jpg"
              text="Tableros de Distribución y Control"
              label="Construccion"
              path="/servicios"
            />
            <CardItem
              src="./pararrayos.jpg"
              text="Sistemas de Tierras y Pararrayos"
              label="Construccion"
              path="/servicios"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1673268256087-7383f2ab84a2"
              text="Alumbrado"
              label="Construccion"
              path="/servicios"
            />
            <CardItem
              src="https://images.pexels.com/photos/4657256/pexels-photo-4657256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              text="Instalaciones de voz y datos"
              label="Construccion"
              path="/servicios"
            />
            <CardItem
              src="https://images.pexels.com/photos/3760532/pexels-photo-3760532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              text="Servicios Generales de Ingenería, Construcción y Proyectos ejecutivos de Obra eléctrica"
              label="Construccion"
              path="/servicios"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              text="Edificación"
              label="Construccion"
              path="/servicios"
            />
            <CardItem
              src="./cimentacion.jpg"
              text="Cimentaciones"
              label="Construccion"
              path="/servicios"
            />
            <CardItem
              src="./torre.jpg"
              text="Estructuras Metálicas y de Concreto"
              label="Construccion"
              path="/servicios"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default transition(Cards);
