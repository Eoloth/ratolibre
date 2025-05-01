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
      imagen="/images/villa_olimpica.jpg"
      alt="Villa Olímpica"
      parrafos={parrafos}
    >
      <p className="text-gray-700 dark:text-gray-200">
        Puedes ver el perfil completo de{' '}
        <Link to="/personas/aldo-olivero-soto" className="text-blue-700 underline dark:text-blue-400">
          Aldo Olivero Soto
        </Link>.
      </p>
      <EventoFooter />
    </EventoBase>
  );
};
export default EventoDisneyOnIce;
