import React, { useRef, useEffect } from "react";
import { Button } from "../ButtonContact/Button";
import "./herov2.scss";
import QuienesSomos from "../quienessomos/QuienesSomos";
import transition from "../../transition";

const Herov2 = (props) => {
  return (
    <>
      <section>
        <div className="hero-container">
          <video autoPlay={true} loop={true} muted={true} playsInline={true}>
            <source src="./HeroVideo.mp4" />
          </video>
          <p>CONSORCIO CONSTRUCTOR PROFESIONAL S.A. DE C.V.(CCP)</p>
          <h1>
            {" "}
            ¡Construyamos un <span>futuro</span> más brillante{" "}
            <span>juntos</span>!
          </h1>
          <div className="hero-btns">
            <Button
              href="/contactanos"
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              CONTACTANOS
            </Button>
          </div>
        </div>
      </section>
      <section>
        <QuienesSomos />
      </section>
    </>
  );
};

export default transition(Herov2);
