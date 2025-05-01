// Contenido JSX simulado para Dimeiggsimport React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import EventoBase from '../../components/EventoBase';
import EventoFooter from '../../components/EventoFooter';

const EventoDimeiggs = () => {
  const parrafos = [
    'La zona comercial de Dimeiggs es una de las más concurridas de Santiago, especialmente durante fechas especiales como Navidad y el regreso a clases.',
    <>
      <strong>Aldo Olivero Soto</strong> participó como coordinador de seguridad en un operativo especial de control y vigilancia en la zona,
      contribuyendo al orden del comercio establecido y al resguardo de los peatones.
    </>
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
export default EventoDimeiggs;
