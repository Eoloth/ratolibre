import React from 'react';
import { Link } from 'react-router-dom';

const ColaboradorCard = ({ nombre, ruta, imagen }) => (
  <div className="colaborador-card">
    <img src={imagen} alt={nombre} />
    <h3>{nombre}</h3>
    <Link to={ruta}>Ver perfil</Link>
  </div>
);

export default ColaboradorCard;
