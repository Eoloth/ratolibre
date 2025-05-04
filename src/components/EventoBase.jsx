import React, { useEffect } from 'react';
import Navbar from './Navbar';
import EventoFooter from './EventoFooter';

const EventoBase = ({
  titulo,
  imagen,
  alt,
  parrafos,
  children,
  fecha = '2022-01-01',
  lugar = 'Santiago, Chile',
  personaEvento = 'Invitado destacado'
}) => {
  useEffect(() => {
    // Título dinámico
    document.title = `Aldo Olivero Soto - ${titulo}`;

    // META description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = `Aldo Olivero Soto participó en el evento "${titulo}". Conoce los detalles y su rol destacado.`;
    document.head.appendChild(metaDescription);

    // Open Graph
    const ogTags = [
      { property: 'og:title', content: `Aldo Olivero Soto - ${titulo}` },
      { property: 'og:description', content: `Participación de Aldo Olivero Soto en el evento: ${titulo}` },
      { property: 'og:url', content: window.location.href }
    ];
    if (imagen) {
      ogTags.push({ property: 'og:image', content: `https://ratolibre.cl${imagen}` });
    }

    const ogMetaElements = ogTags.map(({ property, content }) => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', property);
      tag.content = content;
      document.head.appendChild(tag);
      return tag;
    });

    // Schema.org JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: titulo,
      startDate: fecha,
      location: {
        "@type": "Place",
        name: lugar,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santiago",
          addressCountry: "CL"
        }
      },
      image: `https://ratolibre.cl${imagen}`,
      description: `Aldo Olivero Soto participó en el evento "${titulo}".`,
      performer: {
        "@type": "Person",
        name: personaEvento
      },
      organizer: {
        "@type": "Person",
        name: "Aldo Olivero Soto",
        url: "https://ratolibre.cl/aldo"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(metaDescription);
      ogMetaElements.forEach(tag => document.head.removeChild(tag));
      if (script && document.head.contains(script)) document.head.removeChild(script);
    };
  }, [titulo, imagen, fecha, lugar, personaEvento]);

  return (
    <>
      <Navbar />
      <div className="pt-20 px-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-md shadow p-6 border dark:border-gray-700">
          <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">{titulo}</h1>
          {imagen && (
            <img src={imagen} alt={alt} className="w-full h-auto rounded mb-4" />
          )}
          {parrafos.map((texto, idx) => (
            <p key={idx} className="mb-4 text-gray-700 dark:text-gray-200">
              {texto}
            </p>
          ))}
          {children}
          <EventoFooter />
        </div>
      </div>
    </>
  );
};

export default EventoBase;
