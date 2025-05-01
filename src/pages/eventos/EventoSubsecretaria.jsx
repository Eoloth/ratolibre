import React from 'react';
import { Link } from 'react-router-dom';
import EventoBase from '../../components/EventoBase';
import EventoFooter from '../../components/EventoFooter';

const EventoSubsecretaria = () => {
  const parrafos = [
    'En el marco de una ceremonia oficial organizada por la Subsecretaría del Interior, diversas autoridades se reunieron en Santiago para abordar temas de seguridad ciudadana y cohesión comunitaria.',
    <>
      <strong>Aldo Olivero Soto</strong> fue asignado como supervisor de seguridad en el perímetro del evento,
      brindando apoyo a las comitivas oficiales y regulando accesos vehiculares durante el despliegue de las actividades.
    </>
  ];
  return (
    <EventoBase
      titulo="Operativo en Villa Olímpica"
      imagen="/images/subsecretaria.jpg"
      alt="Villa Olímpica"
      parrafos={parrafos}
    >

      <EventoFooter />
    </EventoBase>
  );
};

export default EventoSubsecretaria;
