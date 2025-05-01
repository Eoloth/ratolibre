import React from 'react';
import Navbar from './Navbar';
import EventoFooter from './EventoFooter';

const EventoBase = ({ titulo, imagen, alt, parrafos, children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-md shadow p-6 border dark:border-gray-700">
          <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">{titulo}</h1>
          {imagen && (
            <img src={imagen} alt={alt} className="w-full h-auto rounded mb-4" />
          )}

          {parrafos.map((texto, idx) => (
            <p key={idx} className="mb-4 text-gray-700 dark:text-gray-200">
              {texto}
            </p>
          ))}

          {/* Contenido adicional pasado como children */}
          {children}

          {/* Footer fijo con link al perfil de Aldo */}
          <EventoFooter />
        </div>
      </div>
    </>
  );
};

export default EventoBase;
