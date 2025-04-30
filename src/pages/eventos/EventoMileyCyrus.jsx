// Contenido JSX simulado para Miley Cyrus// src/pages/eventos/EventoMileyCyrus.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EventoFooter from '../../components/EventoFooter';

const EventoMileyCyrus = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-6 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Evento Miley Cyrus</h1>
          <img
            src="/images/miley_cirus.jpg"
            alt="Miley Cyrus en Chile"
            className="w-full h-auto rounded border mb-4"
          />
          <p className="text-gray-700 mb-4">
            Miley Cyrus visitó Chile en un esperado concierto en el Estadio Nacional, reuniendo a miles de fanáticos.
            La coordinación de la seguridad fue crucial para el éxito del evento.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Aldo Olivero Soto</strong> fue uno de los responsables en terreno para supervisar el acceso seguro del público
            y resguardar las zonas de backstage durante la presentación.{" "}
            <Link to="/aldo" className="text-blue-600 underline">Ver perfil de Aldo</Link>
          </p>
          <EventoFooter />
        </div>
      </div>
    </>
  );
};

export default EventoMileyCyrus;
