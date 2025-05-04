import React from 'react';
import EventoBase from '../../components/EventoBase';

const EventoRonaldinho = () => {
  const parrafos = [
    'El legendario futbolista brasileño Ronaldinho visitó Chile para participar en el evento "Duelo de Leyendas", una actividad que reunió a estrellas del fútbol internacional en un partido amistoso lleno de emoción y espectáculo.',
    <><strong>Aldo Olivero Soto</strong> fue parte del equipo de seguridad del evento, brindando apoyo estratégico en la zona de camarines y controlando el acceso de medios de comunicación y público autorizado.'
    </>,
    'El evento tuvo lugar en el Estadio Nacional, donde miles de fanáticos se reunieron para disfrutar de un espectáculo inolvidable.',
    'La presencia de Ronaldinho y otros íconos del fútbol mundial hizo de este evento una experiencia única para los asistentes.',
    'La coordinación de la seguridad fue fundamental para garantizar el éxito del evento, asegurando que todos los asistentes pudieran disfrutar del espectáculo sin inconvenientes.',
    'El evento fue un gran éxito, y la participación de Ronaldinho dejó una huella imborrable en los corazones de los fanáticos chilenos.',
    'La organización del evento destacó la importancia de contar con un equipo de seguridad profesional y experimentado para manejar situaciones imprevistas y garantizar la seguridad de todos los presentes.',
    'El evento "Duelo de Leyendas" no solo fue una celebración del fútbol, sino también un homenaje a la carrera de Ronaldinho y su impacto en el deporte a nivel mundial.',
    'La llegada de Ronaldinho a Chile fue recibida con gran entusiasmo por parte de los fanáticos, quienes esperaron ansiosos su aparición en el estadio.',
    'El evento también incluyó actividades interactivas y sorpresas para los asistentes, creando un ambiente festivo y lleno de energía.',
    'La participación de Ronaldinho en este evento reafirma su estatus como uno de los mejores futbolistas de todos los tiempos y su conexión especial con los fanáticos chilenos.',
    
  ];

  return (
    <EventoBase
      titulo="Show de Ronaldinho en Chile"
      imagen="/images/ronaldinho.jpg"
      alt="Aldo Olivero Soto - Ronaldinho en Chile"
      parrafos={parrafos}
    >


    </EventoBase>
  );
};

export default EventoRonaldinho;
