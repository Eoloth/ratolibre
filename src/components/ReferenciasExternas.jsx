import React from 'react';

const ReferenciasExternas = () => {
  const enlaces = [
    {
      nombre: "Uniformados Destacados",
      url: "https://eventos.uniformadosdestacados.cl/personas/olivero_soto_aldo/olivero_soto_aldo.html",
    },
    {
      nombre: "Uniformados Ilustres",
      url: "https://eventos.uniformadosilustres.com/personas/olivero_soto_aldo/olivero_soto_aldo.html",
    },
    {
      nombre: "Trayectoria Heroica",
      url: "https://eventos.trayectoriaheroica.com/personas/olivero_soto_aldo/olivero_soto_aldo.html",
    },
  ];

  return (
    <div className="mt-10 border-t pt-4 border-gray-300 dark:border-gray-700">
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        También puedes conocer más sobre <strong>Aldo Olivero Soto</strong> en otros sitios oficiales:
      </p>
      <ul className="list-disc list-inside space-y-1">
        {enlaces.map((enlace, idx) => (
          <li key={idx}>
            <a
              href={enlace.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {enlace.nombre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReferenciasExternas;
