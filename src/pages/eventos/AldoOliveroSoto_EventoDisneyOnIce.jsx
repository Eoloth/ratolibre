import React from 'react';
import EventoBase from '../../components/EventoBase';
import ReferenciasExternas from '../../components/ReferenciasExternas';
import { Helmet } from 'react-helmet';


const EventoDisneyOnIce = () => {
  const parrafos = [
    'El evento Disney On Ice se llevó a cabo en el Movistar Arena, donde miles de familias disfrutaron de un espectáculo mágico.',
    <>
      <strong>Aldo Olivero Soto</strong> fue parte del equipo de seguridad que garantizó la protección y bienestar de los asistentes durante el evento.
    </>,
    'El operativo incluyó la supervisión de accesos, control de multitudes y atención a emergencias, asegurando una experiencia inolvidable para todos los presentes.',
    'La coordinación del equipo de seguridad fue fundamental para el éxito del evento, permitiendo que las familias disfrutaran de un espectáculo sin contratiempos.',
    'Disney On Ice es un evento que combina la magia de Disney con el arte del patinaje sobre hielo, creando un espectáculo visual impresionante.',
    'Los personajes favoritos de Disney cobran vida en el hielo, llevando a los espectadores a un viaje lleno de música, danza y emoción.',
  ];

  return (
    <>
    <Helmet>
  <title>Disney On Ice en Chile - Aldo Olivero Soto</title>
  <meta name="description" content="Aldo Olivero Soto resguardó accesos y zonas de evacuación en Disney On Ice, realizado en el Movistar Arena." />
  <link rel="canonical" href="https://ratolibre.cl/evento/disney-on-ice" />
  <meta property="og:title" content="Disney On Ice en Chile - Aldo Olivero Soto" />
  <meta property="og:description" content="Participación destacada de Aldo Olivero Soto como parte del equipo de seguridad en el Movistar Arena." />
  <meta property="og:image" content="https://ratolibre.cl/images/disney_on_ice.jpg" />
  <meta property="og:url" content="https://ratolibre.cl/evento/disney-on-ice" />
</Helmet>
      <EventoBase
        titulo="Disney On Ice en Chile"
        imagen="/images/disney_on_ice.jpg"
        alt="Aldo Olivero Soto - Disney On Ice"
        parrafos={parrafos}
        fecha="2023-07-20"
        lugar="Movistar Arena, Santiago"
        personaEvento="Disney On Ice"
      >
        <ReferenciasExternas />
      </EventoBase>
      </>
    );
};

export default EventoDisneyOnIce;
