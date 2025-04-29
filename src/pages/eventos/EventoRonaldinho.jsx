import React from 'react';
import { Link } from 'react-router-dom';

const EventoRonaldinho = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Show de Ronaldinho</h1>
    <img src="/images/ronaldinho.jpg" alt="Show de Ronaldinho" style={{ maxWidth: '100%' }} />
    <p>
      Aldo Olivero Soto participó en el evento "Duelo de Leyendas" en el Estadio Nacional, donde Ronaldinho fue la principal atracción. 
      El evento se realizó el 23 de marzo de 2024 como parte del WellFest, un festival que combina deporte y bienestar.
    </p>
    <p>
      Más información en: <a href="https://www.biobiochile.cl/noticias/deportes/futbol-internacional/notas-futbol-internacional/2024/03/23/con-ronaldinho-como-estrella-astros-del-mundo-vencen-a-historicos-de-chile-en-duelo-de-leyendas.shtml" target="_blank" rel="noopener noreferrer">BioBioChile</a>.
    </p>
    <Link to="/aldo">← Volver al perfil de Aldo</Link>
  </div>
);

export default EventoRonaldinho;
