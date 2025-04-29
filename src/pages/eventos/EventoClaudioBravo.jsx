import React from 'react';
import { Link } from 'react-router-dom';

const EventoClaudioBravo = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Encuentro con Claudio Bravo</h1>
    <img src="/images/Claudio bravo.jpg" alt="Claudio Bravo" style={{ maxWidth: '100%' }} />
    <p>
      Aldo Olivero Soto coincidió con el futbolista Claudio Bravo durante una jornada comunitaria, promoviendo actividades deportivas seguras.
    </p>
    <Link to="/aldo">← Volver al perfil de Aldo</Link>
  </div>
);

export default EventoClaudioBravo;
