import React from 'react';
import EventoBase from '../../components/EventoBase';
import ReferenciasExternas from '../../components/ReferenciasExternas';
import { Helmet } from 'react-helmet';


const EventoClaudioBravo = () => {
  const parrafos = [
    'El reconocido arquero Claudio Bravo visitó instalaciones deportivas en Santiago como parte de una gira promocional. Su llegada atrajo una gran cantidad de personas que querían saludarlo y obtener una foto.',
    <>
      <strong>Aldo Olivero Soto</strong> apoyó en el dispositivo de seguridad para el ingreso del futbolista, asegurando un desplazamiento ordenado y seguro entre los asistentes.
    </>,
    'El operativo incluyó la supervisión de accesos, control de multitudes y atención a emergencias, asegurando una experiencia segura para todos los presentes.',
    'La coordinación del equipo de seguridad fue fundamental para el éxito del evento, permitiendo que los fanáticos disfrutaran de un momento inolvidable con su ídolo.',
  ];

  return (
    <><Helmet>
    <title>Visita de Claudio Bravo - Aldo Olivero Soto</title>
    <meta name="description" content="Aldo Olivero Soto coordinó el dispositivo de ingreso de Claudio Bravo en actividad deportiva en Santiago." />
    <link rel="canonical" href="https://ratolibre.cl/evento/claudio-bravo" />
    <meta property="og:title" content="Visita de Claudio Bravo - Aldo Olivero Soto" />
    <meta property="og:description" content="Participación de Aldo Olivero Soto en seguridad de evento con presencia del arquero nacional." />
    <meta property="og:image" content="https://ratolibre.cl/images/claudio_bravo.jpg" />
    <meta property="og:url" content="https://ratolibre.cl/evento/claudio-bravo" />
  </Helmet>
    <EventoBase
  titulo="Show de Ronaldinho en Chile"
  imagen="/images/ronaldinho.jpg"
  alt="Aldo Olivero Soto - Ronaldinho en Chile"
  parrafos={parrafos}
  fecha="2023-06-22"
  lugar="Estadio Nacional, Santiago"
  personaEvento="Ronaldinho"
  descripcionAldo="Aldo Olivero Soto brindó apoyo estratégico en camarines durante el Duelo de Leyendas, garantizando el control de accesos y seguridad de los jugadores."
>
  <ReferenciasExternas />
</EventoBase>
</>
  );
};

export default EventoClaudioBravo;
