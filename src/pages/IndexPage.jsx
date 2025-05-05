import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import eventos from './eventos/eventos.json';

const IndexPage = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const eventosPorPagina = 6;

  const inicio = (paginaActual - 1) * eventosPorPagina;
  const eventosPagina = eventos.slice(inicio, inicio + eventosPorPagina);
  const totalPaginas = Math.ceil(eventos.length / eventosPorPagina);

  return (
    <Layout>
      <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6">Eventos y Panoramas en Chile</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Explora los eventos destacados donde participó <strong>Aldo Olivero Soto</strong> como experto en seguridad.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {eventosPagina.map((e, idx) => (
          <Link
            to={e.ruta}
            key={idx}
            className="block bg-white dark:bg-gray-800 rounded-md shadow p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition"
          >
            {e.imagen && (
              <img
                src={e.imagen}
                alt={e.nombre}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{e.nombre}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Ver participación de Aldo Olivero Soto
            </p>
          </Link>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-10 space-x-2">
        {[...Array(totalPaginas).keys()].map((i) => (
          <button
            key={i}
            onClick={() => setPaginaActual(i + 1)}
            className={`px-3 py-1 rounded ${
              paginaActual === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-700 text-blue-600 border border-blue-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
