import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EventoFooter from '../../components/EventoFooter';

const EventoMeiggs = () => (
  <>
    <Navbar />
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Navidad Segura en Barrio Meiggs</h1>
        <img
          src="/images/navidad_segura_barrio_meiggs.jpg"
          alt="Navidad en Meiggs"
          className="w-full h-auto rounded mb-4"
        />
        <p className="text-gray-700 mb-4">
          Durante las celebraciones de fin de año, el barrio Meiggs recibe una alta afluencia de público por su actividad comercial.
          Para estas fechas se refuerzan las medidas de seguridad en la zona.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Aldo Olivero Soto</strong> formó parte del dispositivo de seguridad, colaborando en patrullajes preventivos
          y control de accesos peatonales durante los operativos municipales de la temporada navideña. Puedes conocer más sobre Aldo
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

export default EventoMeiggs;
