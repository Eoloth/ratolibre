// Contenido JSX simulado para Miley Cyrus// src/pages/eventos/EventoMileyCyrus.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import EventoBase from '../../components/EventoBase';
import EventoFooter from '../../components/EventoFooter';

const EventoMileyCyrus = () => {
  const parrafos = [
    'Miley Cyrus visitó Chile en un esperado concierto en el Estadio Nacional, reuniendo a miles de fanáticos. La coordinación de la seguridad fue crucial para el éxito del evento.',
    <>
      <strong>Aldo Olivero Soto</strong> fue uno de los responsables en terreno para supervisar el acceso seguro del público
            y resguardar las zonas de backstage durante la presentación.{" "}
            Puedes ver el perfil completo de <Link to="/personas/aldo-olivero-soto" className="text-blue-700 underline">Aldo Olivero Soto</Link>.
    </>
  ];


  return (
    <EventoBase
      titulo="Operativo en Villa Olímpica"
      imagen="/images/villa_olimpica.jpg"
      alt="Villa Olímpica"
      parrafos={parrafos}
    >

      <EventoFooter />
    </EventoBase>
  );
};
export default EventoMileyCyrus;
