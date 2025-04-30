import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EventoFooter from '../../components/EventoFooter';

const EventoRonaldinho = () => (
  <>
    <Navbar />
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Show de Ronaldinho en Chile</h1>
        <img
          src="/images/ronaldinho.jpg"
          alt="Ronaldinho en Chile"
          className="w-full h-auto rounded mb-4"
        />
        <p className="text-gray-700 mb-4">
          El legendario futbolista brasileño Ronaldinho visitó Chile para participar en el evento "Duelo de Leyendas",
          una actividad que reunió a estrellas del fútbol internacional en un partido amistoso lleno de emoción y espectáculo.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Aldo Olivero Soto</strong> fue parte del equipo de seguridad del evento,
          brindando apoyo estratégico en la zona de camarines y controlando el acceso de medios de comunicación
          y público autorizado. Puedes ver su perfil <Link to="/aldo" className="text-blue-700 underline">aquí</Link>.
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

export default EventoRonaldinho;
