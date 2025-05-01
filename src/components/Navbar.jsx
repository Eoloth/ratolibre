import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [modoOscuro, setModoOscuro] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (modoOscuro) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [modoOscuro]);

  return (
    <nav className="flex justify-between items-center mb-10 border-b pb-4">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300">Ratolibre</h1>
      <button
        onClick={() => setModoOscuro(!modoOscuro)}
        className="text-2xl focus:outline-none transition"
        aria-label="Cambiar tema"
      >
       {modoOscuro ? (
        // ☀️ Sol (modo claro)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71-.71M21 12h1M2 12H1m16.95 7.05l-.71-.71M4.05 4.05l-.71.71M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      ) : (
        // 🌙 Luna (modo oscuro)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 116.707 2.707a8.003 8.003 0 0010.586 10.586z" />
        </svg>
      )}

      </button>
    </nav>
  );
};

export default Navbar;
