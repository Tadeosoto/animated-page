import "./app.scss";

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

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section id="¿Quienes somos?">
        <Parallax type="Quienes somos" />
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
