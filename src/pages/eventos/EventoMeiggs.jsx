import React from 'react';
import EventoBase from '../../components/EventoBase';


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
      titulo="Operativo de Seguridad en Meiggs"
      imagen="/images/meiggs.jpg"
      alt="Aldo Olivero Soto - Operativo de Seguridad en Meiggs"
      parrafos={parrafos}
    >


    </EventoBase>
  );
};
export default EventoMeiggs;
