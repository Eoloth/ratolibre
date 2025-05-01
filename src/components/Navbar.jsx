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
          // Sol
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1A.75.75 0 0110 3.25z..." />
          </svg>
        ) : (
          // Luna
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M17.293 13.293a8 8 0 01-11.586-11.586..." clipRule="evenodd" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
