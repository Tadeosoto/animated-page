import "./app.scss";
import { AnimatePresence } from "framer-motion";
import NewNavBar from "./components/NewNavbar/NewNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Clientes from "./components/clientes/Clientes";
import Clientes2 from "./components/clientes/Clientes2";
import TituloClientes from "./components/clientes/TituloClientes";
import Contact from "./components/contact/Contact";

import Cursor from "./components/cursor/Cursor";

import Navbar from "./components/navbar/Navbar";

import Parallax from "./components/parallax/Parallax";
import QuienesSomos from "./components/quienessomos/QuienesSomos";

import Herov2 from "./components/herov2/Herov2";
import Cards from "./components/cards/Cards";
import Experiencia from "./components/experiencia/Experiencia";
import Clients from "./components/clientes/Clients";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <div>
        <Cursor />
        <Router>
          <section id="Inicio">
            <NewNavBar />
            <AnimatePresence mode="wiat">
              <Routes>
                <Route path="/contactanos" exact element={<Contact />} />
                <Route path="/" exact element={<Herov2 />} />
                <Route path="/servicios" exact element={<Cards />} />
                <Route path="/clientes" exact element={<Clients />} />
                <Route path="/experiencia" exact element={<Experiencia />} />
              </Routes>
            </AnimatePresence>
          </section>
          {/* <footer>
              <Footer />
            </footer> */}
        </Router>
      </div>
    </>
  );
};

// ss
export default App;
