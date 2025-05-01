import React from 'react';
import EventoBase from '../../components/EventoBase';


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
    <EventoBase
      titulo="Operativo en Dimeiggs"
      imagen="/images/Dimeiggs.jpg"
      alt="Dimeiggs"
      parrafos={parrafos}
    >

    </EventoBase>
  );
};

export default EventoDimeiggs;
