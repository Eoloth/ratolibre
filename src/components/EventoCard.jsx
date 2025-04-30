import React from 'react';

const EventoCard = ({ titulo, categoria, imagen, fuente, url }) => (
  <div className="evento-card">
    <img src={imagen} alt={titulo} />
    <h3>{titulo}</h3>
    <p>Categoría: {categoria}</p>
    <p>Fuente: {fuente}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">Leer más</a>
  </div>
);

export default EventoCard;
