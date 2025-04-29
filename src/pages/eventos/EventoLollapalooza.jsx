import React from 'react';
import { Link } from 'react-router-dom';

const EventoLollapalooza = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Lollapalooza</h1>
    <img src="/images/Lollapalooza 2022.jpg" alt="Lollapalooza" style={{ maxWidth: '100%' }} />
    <p>
      Durante la realización del festival Lollapalooza, Aldo colaboró como coordinador de seguridad, apoyando la logística del evento masivo.
    </p>
    <Link to="/aldo">← Volver al perfil de Aldo</Link>
  </div>
);

export default EventoLollapalooza;
