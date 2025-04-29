import React from 'react';
import { Link } from 'react-router-dom';

const EventoFaenasMineras = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Faenas Mineras</h1>
    <img src="/images/Agosto 2023 faenas mineras asesorías.jpg" alt="Faenas Mineras" style={{ maxWidth: '100%' }} />
    <p>
      Aldo entregó asesoría en seguridad para trabajadores en zonas mineras, promoviendo buenas prácticas en faenas industriales.
    </p>
    <Link to="/aldo">← Volver al perfil de Aldo</Link>
  </div>
);

export default EventoFaenasMineras;
