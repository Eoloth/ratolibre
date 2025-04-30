import React from 'react';
import { Link } from 'react-router-dom';

const EventoFooter = () => {
  return (
    <div className="mt-10 flex justify-start">
      <Link
        to="/aldo"
        className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ← Volver al perfil de Aldo
      </Link>
    </div>
  );
};

export default EventoFooter;