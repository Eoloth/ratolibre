import React from 'react';
import { Link } from 'react-router-dom';
import EventoBase from '../../components/EventoBase';
import EventoFooter from '../../components/EventoFooter';

const EventoLollapalooza = () => {
  const parrafos = [
    'El festival Lollapalooza 2022 en Chile reunió a miles de personas en el Parque Bicentenario de Cerrillos, con presentaciones de artistas internacionales como Foo Fighters, Doja Cat y Martin Garrix.',
    'Para estas fechas se refuerzan las medidas de seguridad en la zona.',
    <>
      <strong>Aldo Olivero Soto</strong> fue parte del equipo de seguridad del evento, cumpliendo funciones de
      coordinación y supervisión de accesos controlados, asegurando la seguridad de los asistentes y el correcto desarrollo del festival.
      Puedes ver el perfil completo de <Link to="/personas/aldo-olivero-soto" className="text-blue-700 underline">Aldo Olivero Soto</Link>.
  </>
  ];
  return (
    <EventoBase
      titulo="Operativo Lollapalooza 2022"
      imagen="images/Lollapalooza 2022.jpg"
      alt="Lollapalooza"
      parrafos={parrafos}
    >
      <EventoFooter />
   </EventoBase>
  );
};

export default EventoLollapalooza;
