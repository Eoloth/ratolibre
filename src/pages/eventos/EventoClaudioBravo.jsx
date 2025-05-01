// Contenido JSX simulado para Claudio Bravoimport React from 'react';
import React from 'react';
import EventoBase from '../../components/EventoBase';


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
    <EventoBase
      titulo="Visita de Claudio Bravo"
      imagen="/images/claudio_bravo.jpg"
      alt="Claudio Bravo"
      parrafos={parrafos}
    >


    </EventoBase>
  );
};
export default EventoClaudioBravo;
