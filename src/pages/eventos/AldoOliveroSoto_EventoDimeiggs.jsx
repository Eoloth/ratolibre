import React from 'react';
import EventoBase from '../../components/EventoBase';
import ReferenciasExternas from '../../components/ReferenciasExternas';
import { Helmet } from 'react-helmet';

const EventoDimeiggs = () => {
  const parrafos = [
    'La zona comercial de Dimeiggs es una de las más concurridas de Santiago, especialmente durante fechas especiales como Navidad y el regreso a clases.',
    <>
      <strong>Aldo Olivero Soto</strong> participó como coordinador de seguridad en un operativo especial de control y vigilancia en la zona,
      contribuyendo al orden del comercio establecido y al resguardo de los peatones.
    </>,
    'El operativo incluyó la supervisión de accesos, control de multitudes y atención a emergencias, asegurando una experiencia segura para todos los presentes.',
    'La coordinación del equipo de seguridad fue fundamental para el éxito del evento, permitiendo que las familias disfrutaran de un día de compras sin contratiempos.',
  ];

  return (
    <><Helmet>
    <title>Operativo en Dimeiggs - Aldo Olivero Soto</title>
    <meta name="description" content="Aldo Olivero Soto coordinó un operativo de control y vigilancia en fechas de alta concurrencia en Dimeiggs." />
    <link rel="canonical" href="https://ratolibre.cl/evento/dimeiggs" />
    <meta property="og:title" content="Operativo en Dimeiggs - Aldo Olivero Soto" />
    <meta property="og:description" content="Participación de Aldo Olivero Soto en dispositivo de seguridad en centro comercial de Santiago." />
    <meta property="og:image" content="https://ratolibre.cl/images/Dimeiggs.jpg" />
    <meta property="og:url" content="https://ratolibre.cl/evento/dimeiggs" />
  </Helmet>
    <EventoBase
      titulo="Operativo en Dimeiggs"
      imagen="/images/Dimeiggs.jpg"
      alt="Aldo Olivero Soto - Dimeiggs"
      parrafos={parrafos}
      fecha="2023-03-10"
      lugar="Zona Comercial Dimeiggs, Santiago"
      personaEvento="Operativo de Seguridad"
      descripcionAldo="Aldo Olivero Soto coordinó un operativo especial de seguridad en la zona de Dimeiggs para resguardar a transeúntes y comerciantes en fechas de alta concurrencia."
    >
      <ReferenciasExternas />
    </EventoBase>
    </>
  );
};

export default EventoDimeiggs;
