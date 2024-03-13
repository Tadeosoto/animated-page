import React from "react";
import "./whatsapp.scss";
import { WhatsappLogo } from "@phosphor-icons/react";
import { px } from "framer-motion";

const WhatsApp = () => {
  return (
    <div className="whatsapp-container">
      <a className="whatsapp-btn" href="https://wa.me/523312393317" alt="">
        <WhatsappLogo size={48} />
      </a>
      <span>Contactanos!</span>
    </div>
  );
};

export default WhatsApp;
