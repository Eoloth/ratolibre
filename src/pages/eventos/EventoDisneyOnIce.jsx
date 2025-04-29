import React from 'react';
import { Link } from 'react-router-dom';

const EventoDisneyOnIce = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Disney On Ice</h1>
    <img src="/images/Disney ONE ice Movistar arena.jpg" alt="Disney On Ice" style={{ maxWidth: '100%' }} />
    <p>
      Aldo prestó apoyo en la coordinación de seguridad del evento infantil Disney On Ice, garantizando un entorno seguro para las familias.
    </p>
    <Link to="/aldo">← Volver al perfil de Aldo</Link>
  </div>
);

export default EventoDisneyOnIce;
