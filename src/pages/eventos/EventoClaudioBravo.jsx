// Contenido JSX simulado para Claudio Bravoimport React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EventoFooter from '../../components/EventoFooter';

const EventoClaudioBravo = () => (
  <>
    <Navbar />
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Visita de Claudio Bravo</h1>
        <img
          src="/images/claudio_bravo.jpg"
          alt="Claudio Bravo"
          className="w-full h-auto rounded mb-4"
        />
        <p className="text-gray-700 mb-4">
          El reconocido arquero Claudio Bravo visitó instalaciones deportivas en Santiago como parte de una gira promocional.
          Su llegada atrajo una gran cantidad de personas que querían saludarlo y obtener una foto.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Aldo Olivero Soto</strong> apoyó en el dispositivo de seguridad para el ingreso del futbolista,
          asegurando un desplazamiento ordenado y seguro entre los asistentes. Puedes conocer más sobre Aldo
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

export default EventoClaudioBravo;
