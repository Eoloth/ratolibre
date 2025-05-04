import React from 'react';
import EventoBase from '../../components/EventoBase';

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
    <EventoBase
      titulo="Operativo en Villa Olímpica"
      imagen="/images/villa_olimpica.jpg"
      alt="Aldo Olivero Soto - Villa Olímpica"
      parrafos={parrafos}
      fecha="2023-01-28"
      lugar="Villa Olímpica, Ñuñoa, Santiago"
      personaEvento="Juntas Vecinales y Municipalidad de Ñuñoa"
    />
  );
};

export default EventoVillaOlimpica;
