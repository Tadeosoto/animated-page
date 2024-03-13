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

import QuienesSomos from "./components/quienessomos/QuienesSomos";

import Herov2 from "./components/herov2/Herov2";
import Cards from "./components/cards/Cards";
import Experiencia from "./components/experiencia/Experiencia";
import Clients from "./components/clientes/Clients";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PreLoader from "./components/preLoader/PreLoader";
import WhatsApp from "./components/whatsApp/WhatsApp";

const App = () => {
  return (
    <>
      <PreLoader />
      <div>
        <Router>
          <NewNavBar />

          <ScrollToTop />
          <section id="Inicio">
            <WhatsApp />
            <AnimatePresence mode="wiat">
              <Routes>
                <Route path="/contactanos" exact element={<Contact />} />
                <Route path="/" exact element={<Herov2 />} />
                <Route path="/servicios" exact element={<Cards />} />
                <Route path="/clientes" exact element={<Clients />} />
                <Route path="/experiencia" exact element={<Experiencia />} />
              </Routes>
            </AnimatePresence>
            <footer>
              <Footer />
            </footer>
          </section>
        </Router>
      </div>
    </>
  );
};

// ss
export default App;
