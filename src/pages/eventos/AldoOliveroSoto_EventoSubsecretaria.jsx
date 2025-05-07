import React from 'react';
import EventoBase from '../../components/EventoBase';
import ReferenciasExternas from '../../components/ReferenciasExternas';
import { Helmet } from 'react-helmet';


const EventoSubsecretaria = () => {
  const parrafos = [
    'En el marco de una ceremonia oficial organizada por la Subsecretaría del Interior, diversas autoridades se reunieron en Santiago para abordar temas de seguridad ciudadana y cohesión comunitaria.',
    <>
      <strong>Aldo Olivero Soto</strong> fue asignado como supervisor de seguridad en el perímetro del evento,
      brindando apoyo a las comitivas oficiales y regulando accesos vehiculares durante el despliegue de las actividades.
    </>,
    'El evento contó con la presencia de autoridades locales y nacionales, quienes discutieron estrategias para mejorar la seguridad en las comunidades y fomentar la participación ciudadana.',
    'La coordinación del equipo de seguridad fue fundamental para garantizar el éxito del evento, permitiendo que las autoridades se enfocaran en los temas importantes a tratar.',
    'La Subsecretaría del Interior trabaja constantemente en iniciativas que buscan fortalecer la seguridad y la confianza de los ciudadanos en sus comunidades.',
    'La participación de la comunidad es clave para el éxito de estas iniciativas, y eventos como este son una oportunidad para fomentar el diálogo y la colaboración entre autoridades y ciudadanos.',
    'La seguridad ciudadana es un tema de gran relevancia en la actualidad, y la Subsecretaría del Interior está comprometida en trabajar junto a las comunidades para abordar estos desafíos.',
    'La cohesión comunitaria es fundamental para construir un entorno seguro y confiable, y eventos como este son una oportunidad para fortalecer esos lazos.',
    'La participación activa de los ciudadanos en la seguridad de sus comunidades es esencial para lograr un cambio positivo y duradero.',
    'La Subsecretaría del Interior continuará trabajando en iniciativas que promuevan la seguridad y la participación ciudadana, buscando siempre el bienestar de las comunidades.',
  ];

  return (
    <>
    <Helmet>
  <title>Evento Subsecretaría del Interior - Aldo Olivero Soto</title>
  <meta name="description" content="Aldo Olivero Soto supervisó el perímetro de seguridad y reguló accesos vehiculares en evento institucional." />
  <link rel="canonical" href="https://ratolibre.cl/evento/subsecretaria" />
  <meta property="og:title" content="Evento Subsecretaría del Interior - Aldo Olivero Soto" />
  <meta property="og:description" content="Aldo Olivero Soto participó en la coordinación de seguridad en evento con autoridades locales y nacionales." />
  <meta property="og:image" content="https://ratolibre.cl/images/subsecretaria.jpg" />
  <meta property="og:url" content="https://ratolibre.cl/evento/subsecretaria" />
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

export default EventoSubsecretaria;
