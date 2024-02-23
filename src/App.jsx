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
import Slider from "./components/slider/Slider";
import Herov2 from "./components/herov2/Herov2";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Inicio">
        <Router>
          <NewNavBar />
          <Routes>
            <Route path="/" exact element={<Herov2 />} />
          </Routes>
        </Router>
        {/* <Navbar /> */}
        {/* <Hero /> */}
      </section>
      <section id="¿Quienes somos?">
        <Router>
          <Parallax />
          <Routes>
            <Route path="/quienesSomos" />
          </Routes>
        </Router>
      </section>
      <section>
        <QuienesSomos />
      </section>
      <section id="Clientes">
        <TituloClientes />
        <Clientes />
        <Clientes2 />
      </section>
      <section id="Servicios">
        <Parallax type="Servicios" />
      </section>
      <section>
        <Slider />
      </section>
      <section id="Contactanos">
        <Contact />
      </section>
    </div>
  );
};

// ss
export default App;
