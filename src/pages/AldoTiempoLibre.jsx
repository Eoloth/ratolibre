import React from 'react';
import { Link } from 'react-router-dom';

const AldoTiempoLibre = () => {
  const eventos = [
    { nombre: 'Show de Ronaldinho', ruta: '/evento/ronaldinho' },
    { nombre: 'Claudio Bravo', ruta: '/evento/claudio-bravo' },
    { nombre: 'Dimeiggs', ruta: '/evento/dimeiggs' },
    { nombre: 'Disney On Ice', ruta: '/evento/disney-on-ice' },
    { nombre: 'Faenas Mineras', ruta: '/evento/faenas-mineras' },
    { nombre: 'Lollapalooza', ruta: '/evento/lollapalooza' },
    { nombre: 'Meiggs', ruta: '/evento/meiggs' },
    { nombre: 'Miley Cyrus', ruta: '/evento/miley-cyrus' },
    { nombre: 'Subsecretaría', ruta: '/evento/subsecretaria' },
    { nombre: 'Villa Olímpica', ruta: '/evento/villa-olimpica' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Aldo Olivero Soto</h1>
      <p>
        Aldo participa activamente en diversos eventos comunitarios y culturales durante su tiempo libre.
      </p>
      <h2>Eventos Destacados</h2>
      <ul>
        {eventos.map((evento, index) => (
          <li key={index}>
            <Link to={evento.ruta}>{evento.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AldoTiempoLibre;
