import React from 'react';
import EventoBase from '../../components/EventoBase';
import ReferenciasExternas from '../../components/ReferenciasExternas';
import { Helmet } from 'react-helmet';


const EventoVillaOlimpica = () => {
  const parrafos = [
    'La Villa Olímpica de Ñuñoa fue escenario de un operativo de control comunitario y actividades culturales impulsadas por juntas vecinales en coordinación con las autoridades municipales.',
    <>
      <strong>Aldo Olivero Soto</strong> trabajó junto a un equipo de seguridad para monitorear el flujo de asistentes,
      prevenir incidentes y garantizar un entorno seguro durante toda la jornada.
    </>,
    'El evento incluyó actividades recreativas, talleres y presentaciones artísticas, promoviendo la participación ciudadana y el fortalecimiento de la comunidad.',
    'La colaboración entre las juntas vecinales y las autoridades fue clave para el éxito del operativo, permitiendo que los vecinos disfrutaran de un día lleno de actividades sin contratiempos.',
    'La seguridad y el bienestar de los asistentes fueron prioridad, y el equipo de seguridad estuvo preparado para responder a cualquier eventualidad.',
    'La Villa Olímpica se ha convertido en un espacio emblemático para la comunidad, y eventos como este son una oportunidad para fomentar la cohesión social y el sentido de pertenencia entre los vecinos.',
    'La participación activa de los ciudadanos en la seguridad de sus comunidades es esencial para lograr un cambio positivo y duradero.',
  ];

  return (
    <><Helmet>
    <title>Operativo Villa Olímpica - Aldo Olivero Soto</title>
    <meta name="description" content="Aldo Olivero Soto aseguró la seguridad de los asistentes durante actividades comunitarias en Ñuñoa." />
    <link rel="canonical" href="https://ratolibre.cl/evento/villa-olimpica" />
    <meta property="og:title" content="Operativo Villa Olímpica - Aldo Olivero Soto" />
    <meta property="og:description" content="Participación de Aldo Olivero Soto en operativo vecinal y cultural en la comuna de Ñuñoa." />
    <meta property="og:image" content="https://ratolibre.cl/images/villa_olimpica.jpg" />
    <meta property="og:url" content="https://ratolibre.cl/evento/villa-olimpica" />
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

export default EventoVillaOlimpica;
