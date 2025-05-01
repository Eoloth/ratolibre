import React from 'react';

const Navbar = ({ modoOscuro, setModoOscuro }) => {
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
            <path d="M10 3.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1A.75.75 0 0110 3.25zM10 14.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zM4.469 4.47a.75.75 0 011.06 0l.707.708a.75.75 0 01-1.06 1.06l-.708-.707a.75.75 0 010-1.06zM13.763 13.764a.75.75 0 011.06 0l.708.707a.75.75 0 01-1.06 1.06l-.707-.707a.75.75 0 010-1.06zM3.25 10a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1A.75.75 0 013.25 10zM14.25 10a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75zM4.47 15.531a.75.75 0 010-1.06l.707-.708a.75.75 0 111.06 1.06l-.707.708a.75.75 0 01-1.06 0zM13.764 6.237a.75.75 0 010-1.06l.707-.707a.75.75 0 111.06 1.06l-.707.707a.75.75 0 01-1.06 0zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
          </svg>
        ) : (
          // Luna
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M17.293 13.293a8 8 0 01-11.586-11.586A8.001 8.001 0 1017.293 13.293z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
