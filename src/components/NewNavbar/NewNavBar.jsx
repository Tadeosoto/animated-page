import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ButtonContact/Button";
import "./Newnavbar.scss";
import { motion } from "framer-motion";

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

  let menuRef = useRef();

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setClick(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="new-navbar">
        <div className="navbar-container" ref={menuRef}>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="hero.png" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <motion.i
              whileTap={{ scale: 0.8 }}
              className={click ? "ph-bold ph-x" : "ph-bold ph-list"}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/experiencia"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Experiencia
              </Link>
            </li>
            <li>
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
            <li className="nav-contactanos">
              <Link
                to="/contactanos"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contactanos
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
