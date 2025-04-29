import React from 'react';
import { Link } from 'react-router-dom';

const EventoMileyCyrus = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Escolta de Miley Cyrus</h1>
    <img src="/images/Escolta Miley Cyrus.jpg" alt="Miley Cyrus" style={{ maxWidth: '100%' }} />
    <p>
      Aldo fue parte del equipo de seguridad privada durante la visita de la cantante internacional Miley Cyrus en Chile.
    </p>
    <Link to="/aldo">← Volver al perfil de Aldo</Link>
  </div>
);

export default EventoMileyCyrus;
