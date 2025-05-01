import React from 'react';
import { Link } from 'react-router-dom';
import EventoBase from '../../components/EventoBase';
import EventoFooter from '../../components/EventoFooter';

const EventoFaenasMineras = () => {
  const parrafos = [
    'Las faenas mineras en el norte del país implican estrictos protocolos de seguridad, tanto operativos como logísticos. El acceso a las instalaciones está regulado y se requiere personal altamente calificado.',
    <>
      <strong>Aldo Olivero Soto</strong> fue parte del equipo de supervisión en faenas seleccionadas, velando por la seguridad en zonas de carga y tránsito de vehículos pesados. Su experiencia fue clave para el cumplimiento de normativas.
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

export default EventoFaenasMineras;
