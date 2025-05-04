import React from 'react';
import EventoBase from '../../components/EventoBase';

const EventoLollapalooza = () => {
  const parrafos = [
    'El festival Lollapalooza 2022 en Chile reunió a miles de personas en el Parque Bicentenario de Cerrillos, con presentaciones de artistas internacionales como Foo Fighters, Doja Cat y Martin Garrix.',
    'Para estas fechas se refuerzan las medidas de seguridad en la zona.',
    <>
      <strong>Aldo Olivero Soto</strong> fue parte del equipo de seguridad del evento, cumpliendo funciones de
      coordinación y supervisión de accesos controlados, asegurando la seguridad de los asistentes y el correcto desarrollo del festival.
    </>,
    'El evento se llevó a cabo durante tres días, del 18 al 20 de marzo de 2022, y fue un éxito rotundo, con una gran afluencia de público y una atmósfera vibrante.',
    'El festival Lollapalooza es uno de los eventos musicales más importantes del mundo, y su edición en Chile es una de las más esperadas por los fanáticos de la música.',
    'La seguridad del evento fue una prioridad, y el equipo de seguridad trabajó arduamente para garantizar la seguridad de todos los asistentes.',
    'El festival Lollapalooza 2022 en Chile fue un evento inolvidable, lleno de música, diversión y seguridad.',
  ];

  return (
    <EventoBase
      titulo="Operativo Lollapalooza 2022"
      imagen="/images/Lollapalooza 2022.jpg"
      alt="Aldo Olivero Soto - Lollapalooza"
      parrafos={parrafos}
      fecha="2022-03-18"
      lugar="Parque Bicentenario de Cerrillos, Santiago"
      personaEvento="Lollapalooza Chile"
    />
  );
};

export default EventoLollapalooza;
