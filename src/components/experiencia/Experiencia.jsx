import React from "react";
import "./experiencia.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Hammer,
  Lightbulb,
  Lightning,
  LineSegment,
  Wrench,
} from "@phosphor-icons/react";

const Experiencia = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<Hammer size={56} />}
          date="2013 / / Apatzingan, Michoacán"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <h4>Obra civil y Electromecánica</h4>
          <p>
            Construcción de la obra civil y electromecánica de la S.E Apatzingan
            I-1A -3F-115 KV a la LT Uruapan Pot.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<Lightbulb size={56} />}
          date="2012 / / Compostela, Nayarit"
        >
          <h3>Caminos y puentes Federales CAPUFE</h3>
          <h4>Sistema de Alumbrado Público</h4>
          <p>
            Cambio de sistema de alumbrado público a solar de la Plaza de cobro
            53 Compostela Municipio de Tlajomulco de Zúñiga
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          date="2009 / / Tlajomulco de Zúñiga, Jal."
          icon={<Lightning size={56} />}
        >
          <h3>Municipio de Tlajomulco de Zúñiga</h3>
          <h4>Obra civil y Electromecánica</h4>
          <p>
            Electrificación en media, baja tensión y alumbrado público en
            colonias como San Juan Evangelista y San Agustín
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          date="2008 / / Ciudad Guzmán , Jalisco"
          icon={<LineSegment size={56} />}
        >
          <h3>Comisión Federal de Electricidad</h3>
          <h4>Línea eléctrica de Transmisión subterránea </h4>
          <p>Línea de Transmisión Subterránea 0.4km-1c-115 Kv-1600Kcm XLP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          date="2008 / / Tlaquepaque, Jalisco"
          icon={<LineSegment size={56} />}
        >
          <h3>Grupo Constructor Aguivasa S.A. de C.V</h3>
          <h4>
            Linea eléctrica de transmisión aereo-subterránea y Subestación
            eléctrica de potencia. Viniteck
          </h4>
          <p>Lí­nea de transmisión aérea 0.55Km-1c-69kv.-477Kcm. ACSR</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          date="2007"
          icon={<Wrench size={56} />}
        >
          <h3>Administración Portuaria Integral de Manzanillo S.A. de C.V.</h3>
          <h4>Mantenimiento eléctrico General</h4>
          <p>
            Mantenimiento eléctrico a la red de Media y Baja Tensión, Líneas y
            Subestaciones.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          date="2005 / / Zapotlanejo, Jalisco"
          icon={<Hammer size={56} />}
        >
          <h3>Control y Montajes Industriales Cymi, S.A.</h3>
          <h4>Subestación Zapotlanejo</h4>
          <p>
            Montaje electromecánico del equipo primario, buses aereos, Red de
            Tierras, Alumbrado, Tableros y servicios propios de la Subestación
            Zapotlanejo Bco. 1. 400/230 Kv.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experiencia;
