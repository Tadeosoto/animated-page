import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ButtonContact/Button";
import "./Newnavbar.scss";

const NewNavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="new-navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="hero.png" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "ph-bold ph-x" : "ph-bold ph-list"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="¿Quienes somos?"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ¿Quienes somos?
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/" className="nav-item" onClick={closeMobileMenu}>
                <img src="hero.png" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/clientes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/servicios"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Servicios
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline">CONTACTANOS</Button>}
        </div>
      </nav>
    </>
  );
};

export default NewNavBar;
