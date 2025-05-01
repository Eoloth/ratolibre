// Contenido JSX simulado para Claudio Bravoimport React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import EventoBase from '../../components/EventoBase';
import EventoFooter from '../../components/EventoFooter';

const EventoClaudioBravo = () => {
  const parrafos = [
    'El reconocido arquero Claudio Bravo visitó instalaciones deportivas en Santiago como parte de una gira promocional. Su llegada atrajo una gran cantidad de personas que querían saludarlo y obtener una foto.',
    <>
      <strong>Aldo Olivero Soto</strong> apoyó en el dispositivo de seguridad para el ingreso del futbolista, asegurando un desplazamiento ordenado y seguro entre los asistentes.
      Puedes ver el perfil completo de <Link to="/personas/aldo-olivero-soto" className="text-blue-700 underline">Aldo Olivero Soto</Link>.
    </>
  ];
  
  return (
    <EventoBase
      titulo="Operativo en Villa Olímpica"
      imagen="/images/claudio_bravo.jpg"
      alt="Villa Olímpica"
      parrafos={parrafos}
    >

      <EventoFooter />
    </EventoBase>
  );
};
export default EventoClaudioBravo;
