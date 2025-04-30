// Contenido JSX simulado para Faenas Minerasimport React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EventoFooter from '../../components/EventoFooter';

const EventoFaenasMineras = () => (
  <>
    <Navbar />
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Faenas Mineras en el Norte de Chile</h1>
        <img
          src="/images/faenas_mineras.jpg"
          alt="Faenas mineras"
          className="w-full h-auto rounded mb-4"
        />
        <p className="text-gray-700 mb-4">
          Las faenas mineras en el norte del país implican estrictos protocolos de seguridad, tanto operativos como logísticos.
          El acceso a las instalaciones está regulado y se requiere personal altamente calificado.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Aldo Olivero Soto</strong> fue parte del equipo de supervisión en faenas seleccionadas, velando por la seguridad en
          zonas de carga y tránsito de vehículos pesados. Su experiencia fue clave para el cumplimiento de normativas. Puedes conocer más sobre Aldo
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

export default EventoFaenasMineras;
