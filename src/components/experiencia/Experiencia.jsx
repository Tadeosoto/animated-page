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
import transition from "../../transition";

const Experiencia = () => {
  return (
    <div className="experience">
      <h1 className="title">
        Contamos con más de 20 años de experiencia en el sector.
      </h1>
      <VerticalTimeline lineColor="#fff">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Wrench size={56} />}
          date="2024 / / Bugambilias, Jalisco"
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            S.E. Bugambilias- Ampl-5 A-23KV- Instalación de tablero Metal-Clad
          </p>
          {/* <h4>Obra Electromecánica</h4> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Hammer size={56} />}
          date="2024 / / Tepic, Jalisco"
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>Construcción de la obra electromecánica de la S.E. Jauja BCO. 1</p>
          <h4>Obra Electromecánica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Hammer size={56} />}
          date="2024 / / Tapalpa, Jalisco"
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            Construcción de la obra electromecánica de la S.E. Tapalpa BCO. 1
          </p>
          <h4>Obra Electromecánica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Lightning size={56} />}
          date="2023 / / Los Altos, Jalisco"
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            Alimentadores tipo convencional de 13.8 KV en la Division Jalisco
            III. (Zona De los Altos )
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Hammer size={56} />}
          date="2023 / / Tepic, Jalisco"
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            Construcción de Obra Civil y Electromécanica para la Instalación de
            Telecomunicaciones en el ambito de la División Jalisco, paquete 3
          </p>
          <h4>Obra Civil y Electromécanica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Lightning size={56} />}
          date="2022 / / Zona Metropolitana,
          Altos y Chapala, Jal."
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            Instalación de equipos para Red Eléctrica Inteligente (REI) en las
            Subestaciónes de la ZTJO II
          </p>
          <h4>Obra Electromécanica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Wrench size={56} />}
          date="2021 / / Atequiza, Jalisco"
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            Reposicion de tapas de trinchera, en Bahías de 400 Kv., y 230kv en
            la S.E. Atequiza (ATQ) de la zona de Transmisión zona Jalisco
            Oriente.
          </p>
          <h4>Mantenimiento</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Hammer size={56} />}
          date="2020 / / Zapopan, Jalisco"
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            Cimentaciones para cambio de interruptor GUN-92020-T- 2 y Reposición
            de Tapas para Trinchera en Bahía de 230 kv y 69 kv en la subestación
            Guadalajara Norte (GUN)de la Zona de Transmisión Jalisco Oriente.
          </p>
          <h4>Obra Civil y Electromécanica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<LineSegment size={56} />}
          date="2019 / / Abasolo,
          Guanajuato."
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            Sustitución de 0.35 km de cable de potencia de 800 mm2 XLP-AL y
            todos los empalmes de la LT Santa Cruz-Pisa Daido 69kv-1C-1.9 KM.
          </p>
          <h4>Obra Electromécanica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Lightbulb size={56} />}
          date="2018 / / Tlajomulco de
          Zúñiga, Jalisco."
          dateClassName="date"
        >
          <h3>GRUPO CONSTRUCTOR AGUIVASA-GRUPO GUMA</h3>
          <p>
            Instalaciones Eléctricas y Canalizaciones Especiales para toda la
            nueva Agencia Naosa VW Santa Anita.
          </p>
          <h4>Obra Electromécanica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Lightbulb size={56} />}
          date="2017 / / El Salto, Jalisco."
          dateClassName="date"
        >
          <h3>INDUSTRIAS GUTIERREZ SA DE CV</h3>
          <p>
            Obra de Media Tensión y Tierras Físicas para el proyecto Planta de
            tanques El Salto ubicado en Carretera El Salto.
          </p>
          <h4>Obra Electromécanica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Lightning size={56} />}
          date="2016 / / Guadalajara, Jalisco."
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            Construcción de circuito Mitdown 1.8 km. De línea de media tensión
            en AL-XLP- cal. 500 ASCR No. 6, de S.E. México
          </p>
          <h4>Obra Electromécanica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Wrench size={56} />}
          date="2015 / / Manzanillo, Colima."
          dateClassName="date"
        >
          <h3>ADMINISTRACIÓN PORTUARÍA INTEGRAL DE MANZANILLO SA CV</h3>
          <p>
            Mantenimiento a plantas de emergencia de los edificios e
            instalaciones de la API en el Puerto Interior de San Pedrito en
            Manzanillo, Colima.
          </p>
          <h4>Mantenimiento</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Wrench size={56} />}
          date="2014 / / Guadalajara, Jalisco"
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            S.E. Alameda instalación Torre auto soportada para antena de
            comunicación y actividades de adecuación.
          </p>
          <h4>Obra Electromécanica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Hammer size={56} />}
          date="2013 / / Apatzingan, Michoacán"
          dateClassName="date"
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>
            Construcción de la obra civil y electromecánica de la S.E Apatzingan
            I-1A -3F-115 KV a la LT Uruapan potencia
          </p>
          <h4>Obra civil y Electromecánica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          icon={<Lightbulb size={56} />}
          date="2012 / / Compostela, Nayarit"
          dateClassName="date"
        >
          <h3>Caminos y puentes Federales CAPUFE</h3>
          <p>
            Cambio de sistema de alumbrado público a solar de la Plaza de cobro
            53 Compostela Municipio de Nayarit
          </p>
          <h4>Sistema de Alumbrado Público</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          date="2009 / / Tlajomulco de Zúñiga, Jal."
          dateClassName="date"
          icon={<Lightning size={56} />}
        >
          <h3>Municipio de Tlajomulco de Zúñiga</h3>
          <p>
            Electrificación en media, baja tensión y alumbrado público en
            colonias como San Juan Evangelista y San Agustín
          </p>
          <h4>Obra civil y Electromecánica</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          date="2008 / / Ciudad Guzmán , Jalisco"
          dateClassName="date"
          icon={<LineSegment size={56} />}
        >
          <h3>Comisión Federal de Electricidad</h3>
          <p>Línea de Transmisión Subterránea 0.4km-1c-115 Kv-1600Kcm XLP</p>
          <h4>Línea eléctrica de Transmisión subterránea </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          date="2008 / / Tlaquepaque, Jalisco"
          icon={<LineSegment size={56} />}
          dateClassName="date"
        >
          <h3>Grupo Constructor Aguivasa S.A. de C.V</h3>
          <p>Lí­nea de transmisión aérea 0.55Km-1c-69kv.-477Kcm. ACSR</p>
          <h4>
            Linea eléctrica de transmisión aereo-subterránea y Subestación
            eléctrica de potencia. Viniteck
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          date="2007"
          icon={<Wrench size={56} />}
          dateClassName="date"
        >
          <h3>Administración Portuaria Integral de Manzanillo S.A. de C.V.</h3>
          <p>
            Mantenimiento eléctrico a la red de Media y Baja Tensión, Líneas y
            Subestaciones.
          </p>
          <h4>Mantenimiento eléctrico General</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#e95e11", color: "#fff" }}
          date="2005 / / Zapotlanejo, Jalisco"
          dateClassName="date"
          icon={<Hammer size={56} />}
        >
          <h3>Control y Montajes Industriales Cymi, S.A.</h3>
          <p>
            Montaje electromecánico del equipo primario, buses aereos, Red de
            Tierras, Alumbrado, Tableros y servicios propios de la Subestación
            Zapotlanejo Bco. 1. 400/230 Kv.
          </p>
          <h4>Subestación Zapotlanejo</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default transition(Experiencia);
