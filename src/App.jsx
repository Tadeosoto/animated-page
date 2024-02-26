import "./app.scss";
import NewNavBar from "./components/NewNavbar/NewNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Clientes from "./components/clientes/Clientes";
import Clientes2 from "./components/clientes/Clientes2";
import TituloClientes from "./components/clientes/TituloClientes";
import Contact from "./components/contact/Contact";

import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

import Parallax from "./components/parallax/Parallax";
import QuienesSomos from "./components/quienessomos/QuienesSomos";

import Herov2 from "./components/herov2/Herov2";
import Cards from "./components/cards/Cards";

const App = () => {
  return (
    <div>
      <Cursor />
      <Router>
        <section id="Inicio">
          <NewNavBar />
          <Routes>
            <Route path="/" exact element={<Herov2 />} />
            <Route path="/servicios" exact element={<Cards />} />
            <Route
              path="/clientes"
              exact
              element={
                <>
                  <TituloClientes />
                  <Clientes />
                  <Clientes2 />
                </>
              }
            />
          </Routes>
        </section>
      </Router>
    </div>
  );
};

// ss
export default App;
