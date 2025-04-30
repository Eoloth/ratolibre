import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EventoFooter from '../../components/EventoFooter';

const EventoSubsecretaria = () => (
  <>
    <Navbar />
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Acto Oficial junto a Subsecretaría</h1>
        <img
          src="/images/subsecretaria.jpg"
          alt="Subsecretaría evento"
          className="w-full h-auto rounded mb-4"
        />
        <p className="text-gray-700 mb-4">
          En el marco de una ceremonia oficial organizada por la Subsecretaría del Interior, diversas autoridades se reunieron
          en Santiago para abordar temas de seguridad ciudadana y cohesión comunitaria.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Aldo Olivero Soto</strong> fue asignado como supervisor de seguridad en el perímetro del evento,
          brindando apoyo a las comitivas oficiales y regulando accesos vehiculares durante el despliegue de las actividades. Puedes revisar su participación
          <Link to="/aldo" className="text-blue-700 underline"> aquí</Link>.
        </p>
      </div>
    </div>
    <EventoFooter />
  </>
);

export default EventoSubsecretaria;
