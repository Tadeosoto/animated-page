import React, { useEffect } from "react";
import { preLoaderAnim } from "../../animations";
import "./preloader.scss";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>CONSORCIO</span>
        <span>CONSTRUCTOR</span>
        <span>PROFESIONAL</span>
      </div>
    </div>
  );
};

export default PreLoader;
