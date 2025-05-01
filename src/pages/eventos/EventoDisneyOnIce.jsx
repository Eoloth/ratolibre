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
