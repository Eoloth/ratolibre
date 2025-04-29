import React from 'react';
import { Link } from 'react-router-dom';

const EventoVillaOlimpica = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Villa Olímpica</h1>
    <img src="/images/Asesor seguridad Villa olímpica juegos panamericanos.jpg" alt="Villa Olímpica" style={{ maxWidth: '100%' }} />
    <p>
      Aldo prestó servicios como asesor de seguridad durante los Juegos Panamericanos en la Villa Olímpica, contribuyendo a la logística y protección de delegaciones.
    </p>
    <Link to="/aldo">← Volver al perfil de Aldo</Link>
  </div>
);

export default EventoVillaOlimpica;
