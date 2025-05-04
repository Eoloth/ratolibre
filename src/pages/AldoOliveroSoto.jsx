import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';

const eventos = [
  { nombre: "Show de Ronaldinho", ruta: "/evento/ronaldinho", imagen: "/images/ronaldinho.jpg" },
  { nombre: "Disney On Ice", ruta: "/evento/disney-on-ice", imagen: "/images/disney_on_ice.jpg" },
  { nombre: "Lollapalooza", ruta: "/evento/lollapalooza", imagen: "/images/Lollapalooza 2022.jpg" },
  { nombre: "Meiggs", ruta: "/evento/meiggs", imagen: "/images/meiggs.jpg" },
  { nombre: "Subsecretaría", ruta: "/evento/subsecretaria", imagen: "/images/subsecretaria.jpg" },
  { nombre: "Villa Olímpica", ruta: "/evento/villa-olimpica", imagen: "/images/villa_olimpica.jpg" },
  { nombre: "Miley Cyrus", ruta: "/evento/miley-cyrus", imagen: "/images/miley_cirus.jpg" },
  { nombre: "Claudio Bravo", ruta: "/evento/claudio-bravo", imagen: "/images/claudio_bravo.jpg" },
  { nombre: "Dimeiggs", ruta: "/evento/dimeiggs", imagen: "/images/Dimeiggs.jpg" },
  { nombre: "Faenas Mineras", ruta: "/evento/faenas-mineras", imagen: "/images/faenas_mineras.jpg" },
];

const AldoOliveroSoto = () => {
  Navbar();
  
  return (
    <Layout>
      <Helmet>
      <title>Aldo Olivero Soto - Seguridad en Eventos</title>
      <meta name="description" content="Perfil profesional de Aldo Olivero Soto. Conoce su experiencia como experto en seguridad de eventos masivos en Chile." />
      <link rel="canonical" href="https://ratolibre.cl/personas/aldo-olivero-soto" />
    </Helmet>

      <div className="bg-white dark:bg-gray-800 rounded-md p-6 shadow border border-gray-200 dark:border-gray-600">
        <div className="flex flex-col sm:flex-row items-center mb-8 gap-6">
          <img
            src="/images/aldo_olivero_soto.jpg"
            alt="Aldo Olivero Soto"
            className="w-32 h-32 rounded-full border object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300">Aldo Olivero Soto</h1>
            <p className="text-gray-600 dark:text-gray-300">Experto en seguridad de eventos comunitarios y culturales</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Aldo ha participado en la seguridad de múltiples actividades masivas en Santiago, contribuyendo con su experiencia para mantener entornos seguros y bien gestionados.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">Eventos destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento, idx) => (
            <Link
              key={idx}
              to={evento.ruta}
              className="block bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg border border-gray-200 dark:border-gray-600 transition"
            >
              <img
                src={evento.imagen}
                alt={evento.nombre}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300">{evento.nombre}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Ver participación de Aldo</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AldoOliveroSoto;
