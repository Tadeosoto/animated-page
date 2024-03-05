import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4> For business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health plan</p>
            </a>
            <a href="/individual">
              <p>individual</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/respurce">
              <p>Resource center</p>
            </a>
            <h4>Resourcesss</h4>
            <a href="/respurce">
              <p>la cosa esta</p>
            </a>
            <h4>Resourceeeeees</h4>
            <a href="/respurce">
              <p>la cosa esta x2</p>
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
