import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const IndexPage = () => {
  const [eventos, setEventos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const eventosPorPagina = 6;

  useEffect(() => {
    fetch('/eventos_portada.json')
      .then(res => res.json())
      .then(data => setEventos(data))
      .catch(err => console.error("Error cargando eventos:", err));
  }, []);

  const inicio = (paginaActual - 1) * eventosPorPagina;
  const eventosPagina = eventos.slice(inicio, inicio + eventosPorPagina);
  const totalPaginas = Math.ceil(eventos.length / eventosPorPagina);

  return (
    <Layout>
      <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6">Eventos y Panoramas en Chile</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Explora los eventos destacados a nivel nacional con colaboradores clave en terreno.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {eventosPagina.map((e, idx) => {
          const esExterno = !e.colaborador && e.ruta && e.ruta.startsWith('http');

          const Contenedor = ({ children }) =>
            esExterno ? (
              <a href={e.ruta} target="_blank" rel="noopener noreferrer"
                 className="block bg-white dark:bg-gray-800 rounded-md shadow p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition">
                {children}
              </a>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-md shadow p-6 border border-gray-200 dark:border-gray-600">
                {children}
              </div>
            );

          return (
            <Contenedor key={idx}>
              {e.imagen && (
                <img
                  src={e.imagen}
                  alt={e.titulo}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{e.titulo}</h2>
              {e.descripcion.map((p, i) => (
                <p key={i} className="text-gray-700 dark:text-gray-300 mb-3">
                  {e.colaborador && p.includes(e.colaborador) ? (
                    <Link to={e.ruta} className="text-blue-600 font-medium hover:underline">{p}</Link>
                  ) : (
                    p
                  )}
                </p>
              ))}
              {e.colaborador && (
                <div className="mt-4 flex items-center gap-4 border-t pt-4 border-gray-200 dark:border-gray-600">
                  <img src={e.imagen} alt={e.colaborador} className="w-16 h-16 rounded-full object-cover border" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{e.colaborador}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Colaborador en seguridad</p>
                  </div>
                </div>
              )}
            </Contenedor>
          );
        })}
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
