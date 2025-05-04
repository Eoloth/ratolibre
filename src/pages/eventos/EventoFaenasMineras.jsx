import React from 'react';
import EventoBase from '../../components/EventoBase';

const EventoFaenasMineras = () => {
  const parrafos = [
    'Las faenas mineras en el norte del país implican estrictos protocolos de seguridad, tanto operativos como logísticos. El acceso a las instalaciones está regulado y se requiere personal altamente calificado.',
    <>
      <strong>Aldo Olivero Soto</strong> fue parte del equipo de supervisión en faenas seleccionadas, velando por la seguridad en zonas de carga y tránsito de vehículos pesados. Su experiencia fue clave para el cumplimiento de normativas.
    </>,
    'El trabajo en estas faenas es fundamental para garantizar la seguridad de los trabajadores y el correcto funcionamiento de las operaciones mineras.',
    'La coordinación del equipo de seguridad fue esencial para el éxito de las operaciones, permitiendo que las actividades se desarrollaran sin contratiempos.',
  ];

  return (
    <EventoBase
      titulo="Operativo en Faenas Mineras"
      imagen="/images/minera.jpg"
      alt="Aldo Olivero Soto - Faenas Mineras"
      parrafos={parrafos}
      fecha="2022-09-05"
      lugar="Faenas mineras del norte de Chile"
      personaEvento="Faena minera"
    />
  );
};

export default EventoFaenasMineras;
