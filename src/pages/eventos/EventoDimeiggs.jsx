// Contenido JSX simulado para Dimeiggsimport React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EventoFooter from '../../components/EventoFooter';

const EventoDimeiggs = () => (
  <>
    <Navbar />
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Operativo en Dimeiggs</h1>
        <img
          src="/images/Dimeiggs.jpg"
          alt="Dimeiggs"
          className="w-full h-auto rounded mb-4"
        />
        <p className="text-gray-700 mb-4">
          La zona comercial de Dimeiggs es una de las más concurridas de Santiago, especialmente durante fechas especiales como Navidad y el regreso a clases.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Aldo Olivero Soto</strong> participó como coordinador de seguridad en un operativo especial de control y vigilancia en la zona,
          contribuyendo al orden del comercio establecido y al resguardo de los peatones.
          Puedes revisar su perfil <Link to="/aldo" className="text-blue-700 underline">aquí</Link>.
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

export default EventoDimeiggs;
