import React from 'react';
import { Link } from 'react-router-dom';

const EventoMeiggs = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Meiggs</h1>
    <img src="/images/01-10-2023 actividades calle meiggs.jpg" alt="Meiggs" style={{ maxWidth: '100%' }} />
    <p>
      Aldo participó en actividades de seguridad y orden público en el sector de Meiggs, trabajando en conjunto con feriantes y autoridades.
    </p>
    <Link to="/aldo">← Volver al perfil de Aldo</Link>
  </div>
);

export default EventoMeiggs;
