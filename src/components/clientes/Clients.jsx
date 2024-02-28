import React from "react";
import TituloClientes from "./TituloClientes";
import Clientes from "./Clientes";
import Clientes2 from "./Clientes2";
import transition from "../../transition";

const Clients = () => {
  return (
    <div>
      <TituloClientes />
      <Clientes />
      <Clientes2 />
    </div>
  );
};

export default transition(Clients);
