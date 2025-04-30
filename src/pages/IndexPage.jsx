import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch('/eventos_portada.json')
      .then(res => res.json())
      .then(data => setEventos(data))
      .catch(err => console.error("Error cargando eventos:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Eventos y Panoramas en Chile</h1>
        <p className="text-gray-600 mb-10">
          Explora los eventos destacados a nivel nacional con colaboradores clave en terreno.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventos.map((e, idx) => (
            <div key={idx} className="bg-white rounded-md shadow p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">{e.titulo}</h2>
              {e.descripcion.map((p, i) => (
                <p key={i} className="text-gray-700 mb-3">
                  {e.colaborador && p.includes(e.colaborador) ? (
                    <Link to={e.ruta} className="text-blue-600 font-medium hover:underline">{p}</Link>
                  ) : (
                    p
                  )}
                </p>
              ))}
              {e.colaborador && (
                <div className="mt-4 flex items-center gap-4 border-t pt-4">
                  <img src={e.imagen} alt={e.colaborador} className="w-16 h-16 rounded-full object-cover border" />
                  <div>
                    <p className="font-semibold text-gray-800">{e.colaborador}</p>
                    <p className="text-sm text-gray-600">Colaborador en seguridad</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;