import React from 'react';
import { Link } from 'react-router-dom';
import EventoBase from '../../components/EventoBase';
import EventoFooter from '../../components/EventoFooter';

const EventoMeiggs = () => {
  const parrafos = [  
    'Durante las celebraciones de fin de año, el barrio Meiggs recibe una alta afluencia de público por su actividad comercial.',
    'Para estas fechas se refuerzan las medidas de seguridad en la zona.',
    <>
    <strong>Aldo Olivero Soto</strong> formó parte del dispositivo de seguridad, colaborando en patrullajes preventivos
          y control de accesos peatonales durante los operativos municipales de la temporada navideña. 
          Puedes ver el perfil completo de <Link to="/personas/aldo-olivero-soto" className="text-blue-700 underline">Aldo Olivero Soto</Link>.
    </>
  ];
  return (
    <EventoBase
      titulo="Operativo en Villa Olímpica"
      imagen="/images/meiggs.jpg"
      alt="Villa Olímpica"
      parrafos={parrafos}
    >

      <EventoFooter />
    </EventoBase>
  );
};
export default EventoMeiggs;
