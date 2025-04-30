import React from 'react';
import { Link } from 'react-router-dom';
import EventoFooter from '../../components/EventoFooter';
import Navbar from '../../components/Navbar';

const EventoDisneyOnIce = () => (
  <>
    <Navbar />
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Disney On Ice</h1>
        <img src="../images/disney_on_ice.jpg" alt="Disney On Ice"
          className="w-full h-auto rounded mb-6 border"
        />
        <p className="text-gray-700 mb-4">
          Aldo Olivero Soto prestó apoyo en la coordinación de seguridad del evento infantil Disney On Ice, 
          garantizando un entorno seguro para las familias que asistieron al Movistar Arena.
        </p>
        <EventoFooter />
      </div>
    </div>
  </>
);
export default EventoDisneyOnIce;
