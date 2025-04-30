import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="w-full bg-white shadow px-4 py-3 fixed top-0 left-0 z-50 flex items-center">
    <Link to="/" className="text-xl font-bold text-blue-800 hover:text-blue-900 flex items-center gap-2">
      <span className="bg-blue-700 text-white px-2 py-1 rounded font-mono">RL</span>
      <span className="hidden sm:inline">Ratolibre.cl</span>
    </Link>
  </nav>
);

export default Navbar;