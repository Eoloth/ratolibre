import React from 'react';
import { Link } from 'react-router-dom';
import EventoBase from '../../components/EventoBase';
import EventoFooter from '../../components/EventoFooter';

const EventoVillaOlimpica = () => {
  const parrafos = [
    'La Villa Olímpica de Ñuñoa fue escenario de un operativo de control comunitario y actividades culturales impulsadas por juntas vecinales en coordinación con las autoridades municipales.',
    <>
      <strong>Aldo Olivero Soto</strong> trabajó junto a un equipo de seguridad para monitorear el flujo de asistentes,
      prevenir incidentes y garantizar un entorno seguro durante toda la jornada.
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

export default EventoVillaOlimpica;
