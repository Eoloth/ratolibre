import React from 'react';
import EventoBase from '../../components/EventoBase';


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
    <EventoBase
      titulo="Reunión de la Subsecretaría del Interior"
      imagen="/images/subsecretaria.jpg"
      alt="Evento de la Subsecretaría del Interior"
      fecha="15 de marzo de 2023"
      lugar="Santiago, Chile"
      descripcion="Ceremonia oficial organizada por la Subsecretaría del Interior, donde se abordaron temas de seguridad ciudadana y cohesión comunitaria."
      subtitulo="Evento de la Subsecretaría del Interior"
      subtitulo2="Ceremonia oficial"
      subtitulo3="Santiago, Chile"  
      
      parrafos={parrafos}
    >


    </EventoBase>
  );
};

export default EventoSubsecretaria;
