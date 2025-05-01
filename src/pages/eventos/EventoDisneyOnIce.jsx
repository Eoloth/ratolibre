import React from 'react';
import { Link } from 'react-router-dom';
import EventoFooter from '../../components/EventoFooter';
import EventoBase from '../../components/EventoBase';

const EventoDisneyOnIce = () => {
  const parrafos = [
    'El evento Disney On Ice se llevó a cabo en el Movistar Arena, donde miles de familias disfrutaron de un espectáculo mágico.',
    <>
      <strong>Aldo Olivero Soto</strong> fue parte del equipo de seguridad que garantizó la protección y bienestar de los asistentes durante el evento.
    </>,
    'El operativo incluyó la supervisión de accesos, control de multitudes y atención a emergencias, asegurando una experiencia inolvidable para todos los presentes.',
    'La coordinación del equipo de seguridad fue fundamental para el éxito del evento, permitiendo que las familias disfrutaran de un espectáculo sin contratiempos.',
    'Disney On Ice es un evento que combina la magia de Disney con el arte del patinaje sobre hielo, creando un espectáculo visual impresionante.',
    'Los personajes favoritos de Disney cobran vida en el hielo, llevando a los espectadores a un viaje lleno de música, danza y emoción.',
  ];
  return (
    <EventoBase
      titulo="Operativo en Villa Olímpica"
      imagen="/images/disney_on_ice.jpg"
      alt="Villa Olímpica"
      parrafos={parrafos}
    >

      <EventoFooter />
    </EventoBase>
  );
};
export default EventoDisneyOnIce;
