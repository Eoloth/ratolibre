import React from 'react';
import EventoBase from '../../components/EventoBase';
import ReferenciasExternas from '../../components/ReferenciasExternas';
import { Helmet } from 'react-helmet';

const EventoRonaldinho = () => {
  const parrafos = [
    'El legendario futbolista brasileño Ronaldinho visitó Chile para participar en el evento "Duelo de Leyendas", una actividad que reunió a estrellas del fútbol internacional en un partido amistoso lleno de emoción y espectáculo.',
    <>
      <strong>Aldo Olivero Soto</strong> fue parte del equipo de seguridad del evento, brindando apoyo estratégico en la zona de camarines y controlando el acceso de medios de comunicación y público autorizado.
    </>,
    'El evento tuvo lugar en el Estadio Nacional, donde miles de fanáticos se reunieron para disfrutar de un espectáculo inolvidable.',
    'La presencia de Ronaldinho y otros íconos del fútbol mundial hizo de este evento una experiencia única para los asistentes.',
    'La coordinación de la seguridad fue fundamental para garantizar el éxito del evento, asegurando que todos los asistentes pudieran disfrutar del espectáculo sin inconvenientes.',
    'El evento fue un gran éxito, y la participación de Ronaldinho dejó una huella imborrable en los corazones de los fanáticos chilenos.',
    'La organización del evento destacó la importancia de contar con un equipo de seguridad profesional y experimentado para manejar situaciones imprevistas y garantizar la seguridad de todos los presentes.',
    'El evento "Duelo de Leyendas" no solo fue una celebración del fútbol, sino también un homenaje a la carrera de Ronaldinho y su impacto en el deporte a nivel mundial.',
    'La llegada de Ronaldinho a Chile fue recibida con gran entusiasmo por parte de los fanáticos, quienes esperaron ansiosos su aparición en el estadio.',
    'El evento también incluyó actividades interactivas y sorpresas para los asistentes, creando un ambiente festivo y lleno de energía.',
    'La participación de Ronaldinho en este evento reafirma su estatus como uno de los mejores futbolistas de todos los tiempos y su conexión especial con los fanáticos chilenos.',
  ];

  return (
    <>
      <Helmet>
        <title>Show de Ronaldinho en Chile - Aldo Olivero Soto</title>
        <meta name="description" content="Aldo Olivero Soto brindó apoyo estratégico en camarines durante el Duelo de Leyendas, garantizando el control de accesos y seguridad de los jugadores." />
        <link rel="canonical" href="https://ratolibre.cl/evento/ronaldinho" />
        <meta property="og:title" content="Show de Ronaldinho en Chile - Aldo Olivero Soto" />
        <meta property="og:description" content="Participación destacada de Aldo Olivero Soto como personal de seguridad en el evento Duelo de Leyendas." />
        <meta property="og:image" content="https://ratolibre.cl/images/ronaldinho.jpg" />
        <meta property="og:url" content="https://ratolibre.cl/evento/ronaldinho" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Show de Ronaldinho en Chile",
            startDate: "2023-06-22",
            location: {
              "@type": "Place",
              name: "Estadio Nacional",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santiago",
                addressCountry: "CL"
              }
            },
            image: ["https://ratolibre.cl/images/ronaldinho.jpg"],
            description: "Evento 'Duelo de Leyendas' en el que Ronaldinho participó en Chile. Aldo Olivero Soto fue parte del equipo de seguridad.",
            performer: {
              "@type": "Person",
              name: "Ronaldinho"
            },
            organizer: {
              "@type": "Person",
              name: "Aldo Olivero Soto",
              url: "https://ratolibre.cl/personas/aldo-olivero-soto",
              sameAs: [
                "https://eventos.uniformadosdestacados.cl/personas/olivero_soto_aldo/olivero_soto_aldo.html",
                "https://eventos.uniformadosilustres.com/personas/olivero_soto_aldo/olivero_soto_aldo.html",
                "https://eventos.trayectoriaheroica.com/personas/olivero_soto_aldo/olivero_soto_aldo.html"
              ]
            }
          })}
        </script>
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

export default EventoRonaldinho;
