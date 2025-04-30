import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EventoFooter from '../../components/EventoFooter';

const EventoLollapalooza = () => (
  <>
    <Navbar />
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Lollapalooza Chile 2022</h1>
        <img
          src="/images/Lollapalooza 2022.jpg"
          alt="Lollapalooza Chile"
          className="w-full h-auto rounded mb-4"
        />
        <p className="text-gray-700 mb-4">
          El festival Lollapalooza 2022 en Chile reunió a miles de personas en el Parque Bicentenario de Cerrillos,
          con presentaciones de artistas internacionales como Foo Fighters, Doja Cat y Martin Garrix.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Aldo Olivero Soto</strong> fue parte del equipo de seguridad del evento, cumpliendo funciones de
          coordinación y supervisión de accesos controlados, asegurando la tranquilidad de los asistentes en zonas de alto tráfico.
          Más información sobre Aldo <Link to="/aldo" className="text-blue-700 underline">aquí</Link>.
        </p>

      </div>
    </div>
    <EventoFooter />
  </>
);

export default EventoLollapalooza;
