import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EventoFooter from '../../components/EventoFooter';

const EventoVillaOlimpica = () => (
  <>
    <Navbar />
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Operativo en Villa Olímpica</h1>
        <img
          src="/images/villa_olimpica.jpg"
          alt="Villa Olímpica"
          className="w-full h-auto rounded mb-4"
        />
        <p className="text-gray-700 mb-4">
          La Villa Olímpica de Ñuñoa fue escenario de un operativo de control comunitario y actividades culturales
          impulsadas por juntas vecinales en coordinación con las autoridades municipales.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Aldo Olivero Soto</strong> trabajó junto a un equipo de seguridad para monitorear el flujo de asistentes,
          prevenir incidentes y garantizar un entorno seguro durante toda la jornada. Puedes conocer más sobre él
          <Link to="/aldo" className="text-blue-700 underline"> aquí</Link>.
        </p>
        <Link
          to="/aldo"
          className="inline-block mt-4 text-white bg-blue-700 hover:bg-blue-800 font-semibold py-2 px-4 rounded"
        >
          ← Volver al perfil de Aldo
        </Link>
      </div>
    </div>
    <EventoFooter />
  </>
);

export default EventoVillaOlimpica;
