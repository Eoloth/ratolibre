import React from 'react';
import { Link } from 'react-router-dom';
import EventoBase from '../../components/EventoBase';

const EventoRonaldinho = () => {
  const parrafos = [
    'El legendario futbolista brasileño Ronaldinho visitó Chile para participar en el evento "Duelo de Leyendas", una actividad que reunió a estrellas del fútbol internacional en un partido amistoso lleno de emoción y espectáculo.',
    'Aldo Olivero Soto fue parte del equipo de seguridad del evento, brindando apoyo estratégico en la zona de camarines y controlando el acceso de medios de comunicación y público autorizado.'
  ];

  return (
    <EventoBase
      titulo="Show de Ronaldinho en Chile"
      imagen="/images/ronaldinho.jpg"
      alt="Ronaldinho en Chile"
      parrafos={parrafos}
    >


    </EventoBase>
  );
};

export default EventoRonaldinho;
