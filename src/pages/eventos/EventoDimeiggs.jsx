import React from 'react';
import { Link } from 'react-router-dom';

const EventoDimeiggs = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Dimeiggs</h1>
    <img src="/images/Dimeiggs.jpg" alt="Dimeiggs" style={{ maxWidth: '100%' }} />
    <p>
      Aldo colaboró en labores de orden y apoyo comunitario en el sector de Meiggs, ayudando a coordinar acciones preventivas con comerciantes y autoridades.
    </p>
    <Link to="/aldo">← Volver al perfil de Aldo</Link>
  </div>
);

export default EventoDimeiggs;
