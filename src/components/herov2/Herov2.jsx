import React, { useRef, useEffect } from "react";
import { Button } from "../ButtonContact/Button";
import "./herov2.scss";

const Herov2 = (props) => {
  return (
    <div className="hero-container">
      <video autoPlay={true} loop={true} muted={true} playsInline={true}>
        <source src="./HeroVideo.mp4" />
      </video>
      <h1>
        {" "}
        ¡Construyamos un <span>futuro</span> más brillante <span>juntos</span>!
      </h1>
      <p>CONSORCIO CONSTRUCTOR PROFESIONAL S.A. DE C.V.(CCP)</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          CONTACTANOS
        </Button>
      </div>
    </div>
  );
};

export default Herov2;
