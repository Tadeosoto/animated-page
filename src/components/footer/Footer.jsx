import React from "react";
import "./footer.css";
import { Button } from "../ButtonContact/Button";
import { motion } from "framer-motion";
import { MapPin } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4> Nos puedes visitar en:</h4>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.google.com/maps/dir/20.6667776,-103.4289152/Av+Jes%C3%BAs+Reyes+Heroles+2376,+Dr+Valent%C3%ADn+G%C3%B3mez+Farias,+44967+Guadalajara,+Jal./@20.6587913,-103.4179072,13z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8428ada26dcdccf5:0x75318f5d4058d3cd!2m2!1d-103.3826808!2d20.6238437?entry=ttu"
            >
              <p>
                <MapPin size={14} />
                Jesús Reyes Heroles No. 2376, Col. Patria. Guadalajara, Jalisco.
                C.P. 44967 México
              </p>
            </motion.a>
          </div>
          <div className="sb__footer-links_div">
            <p>¿interesado en nuestros servicios?</p>

            <Button>Contactanos</Button>
          </div>
          <div className="sb__footer-links_div">
            <h4>Teléfonos: </h4>
            <a href="tel:+523312022030">
              <p>(33) 1202-2030</p>
            </a>
            <a href="tel:+523312022031">
              <p>(33) 1202-2031</p>
            </a>
            <h4>Fax:</h4>
            <a href="/respurce">
              <p>(33) 3854-0677</p>
            </a>
          </div>
        </div>

        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              {new Date().getFullYear()} Consorcio Constructor Profesional.
              Todos los derechos reservados.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terminos y condiciones</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Privacidad</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>seguridad</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Declaracion de cookies</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
