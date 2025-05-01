import React from 'react';
import { Link } from 'react-router-dom';

const EventoFooter = () => {
  return (
    <div className="mt-10 space-y-4">
      <p className="text-gray-700 dark:text-gray-200">
        Puedes ver el perfil completo de{' '}
        <Link to="/personas/aldo-olivero-soto" className="text-blue-700 underline dark:text-blue-400">
          Aldo Olivero Soto
        </Link>.
      </p>
      <div className="flex justify-start">
        <Link
          to="/personas/aldo-olivero-soto"
          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          ← Volver al perfil de Aldo
        </Link>
      </div>
    </div>
  );
};

export default EventoFooter;
