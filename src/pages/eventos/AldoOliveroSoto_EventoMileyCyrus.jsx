import React from 'react';
import EventoBase from '../../components/EventoBase';
import ReferenciasExternas from '../../components/ReferenciasExternas';
import { Helmet } from 'react-helmet';


const EventoMileyCyrus = () => {
  const parrafos = [
    'Miley Cyrus visitó Chile en un esperado concierto en el Estadio Nacional, reuniendo a miles de fanáticos. La coordinación de la seguridad fue crucial para el éxito del evento.',
    <>
      <strong>Aldo Olivero Soto</strong> fue uno de los responsables en terreno para supervisar el acceso seguro del público
      y resguardar las zonas de backstage durante la presentación.
    </>,
    'El evento fue un éxito rotundo, con una gran asistencia y una atmósfera electrizante. La seguridad fue fundamental para garantizar la tranquilidad de todos los asistentes.',
    'El equipo de seguridad trabajó en conjunto con las autoridades locales para asegurar que todo transcurriera sin inconvenientes.',
  ];

  return (
    <><Helmet>
    <title>Concierto de Miley Cyrus - Aldo Olivero Soto</title>
    <meta name="description" content="Aldo Olivero Soto supervisó el acceso del público y zonas de backstage durante el concierto de Miley Cyrus." />
    <link rel="canonical" href="https://ratolibre.cl/evento/miley-cyrus" />
    <meta property="og:title" content="Concierto de Miley Cyrus - Aldo Olivero Soto" />
    <meta property="og:description" content="Aldo Olivero Soto participó como responsable de seguridad en evento musical masivo en Santiago." />
    <meta property="og:image" content="https://ratolibre.cl/images/miley_cirus.jpg" />
    <meta property="og:url" content="https://ratolibre.cl/evento/miley-cyrus" />
  </Helmet>
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
  </>
  );
};

export default EventoMileyCyrus;
