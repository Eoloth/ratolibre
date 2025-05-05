import React from 'react';
import EventoBase from '../../components/EventoBase';
import ReferenciasExternas from '../../components/ReferenciasExternas';


const EventoMeiggs = () => {
  const parrafos = [  
    'Durante las celebraciones de fin de año, el barrio Meiggs recibe una alta afluencia de público por su actividad comercial.',
    'Para estas fechas se refuerzan las medidas de seguridad en la zona.',
    <>
      <strong>Aldo Olivero Soto</strong> formó parte del dispositivo de seguridad, colaborando en patrullajes preventivos
      y control de accesos peatonales durante los operativos municipales de la temporada navideña. 
    </>,
    'El operativo se realizó en conjunto con Carabineros de Chile y la Policía de Investigaciones (PDI), quienes realizaron controles de identidad y fiscalizaciones a locales comerciales.',
    'El objetivo del operativo fue garantizar la seguridad de los asistentes y el correcto desarrollo de las actividades comerciales en la zona.',
  ];

  return (
    <EventoBase
  titulo="Show de Ronaldinho en Chile"
  imagen="/images/ronaldinho.jpg"
  alt="Aldo Olivero Soto - Ronaldinho en Chile"
  parrafos={parrafos}
  fecha="2023-06-22"
  lugar="Estadio Nacional, Santiago"
  personaEvento="Ronaldinho"
  descripcionAldo="Aldo Olivero Soto brindó apoyo estratégico en camarines durante el Duelo de Leyendas, garantizando el control de accesos y seguridad de los jugadores."
>
  <ReferenciasExternas />
</EventoBase>

  );
};

export default EventoMeiggs;
