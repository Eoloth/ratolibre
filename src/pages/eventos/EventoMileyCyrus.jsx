// Contenido JSX simulado para Miley Cyrus// src/pages/eventos/EventoMileyCyrus.jsx
import React from 'react';
import EventoBase from '../../components/EventoBase';

const EventoMileyCyrus = () => {
  const parrafos = [
    'Miley Cyrus visitó Chile en un esperado concierto en el Estadio Nacional, reuniendo a miles de fanáticos. La coordinación de la seguridad fue crucial para el éxito del evento.',
    <>
      <strong>Aldo Olivero Soto</strong> fue uno de los responsables en terreno para supervisar el acceso seguro del público
            y resguardar las zonas de backstage durante la presentación.{" "}
            
    </>,
    'El evento fue un éxito rotundo, con una gran asistencia y una atmósfera electrizante. La seguridad fue fundamental para garantizar la tranquilidad de todos los asistentes.',
    'El equipo de seguridad trabajó en conjunto con las autoridades locales para asegurar que todo transcurriera sin inconvenientes.',
  ];


  return (
    <EventoBase
      titulo="Concierto de Miley Cyrus en Chile"
      imagen="/images/miley_cirus.jpg"
      alt="Aldo Olivero Soto - Miley Cyrus en Chile"
      parrafos={parrafos}
    >


    </EventoBase>
  );
};
export default EventoMileyCyrus;
