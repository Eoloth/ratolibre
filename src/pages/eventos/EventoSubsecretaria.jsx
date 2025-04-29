import React from 'react';
import { Link } from 'react-router-dom';

const EventoSubsecretaria = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Subsecretaría de Prevención del Delito</h1>
    <img src="/images/subsecretaria prevencion del delito 2021.jpg" alt="Subsecretaría" style={{ maxWidth: '100%' }} />
    <p>
      Aldo expuso su experiencia en prevención comunitaria durante una jornada de colaboración organizada por la Subsecretaría de Prevención del Delito.
    </p>
    <Link to="/aldo">← Volver al perfil de Aldo</Link>
  </div>
);

export default EventoSubsecretaria;
