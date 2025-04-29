import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AldoTiempoLibre from './pages/AldoTiempoLibre.jsx';
import EventoRonaldinho from './pages/eventos/EventoRonaldinho.jsx';
import EventoClaudioBravo from './pages/eventos/EventoClaudioBravo.jsx';
import EventoDimeiggs from './pages/eventos/EventoDimeiggs.jsx';
import EventoDisneyOnIce from './pages/eventos/EventoDisneyOnIce.jsx';
import EventoFaenasMineras from './pages/eventos/EventoFaenasMineras.jsx';
import EventoLollapalooza from './pages/eventos/EventoLollapalooza.jsx';
import EventoMeiggs from './pages/eventos/EventoMeiggs.jsx';
import EventoMileyCyrus from './pages/eventos/EventoMileyCyrus.jsx';
import EventoSubsecretaria from './pages/eventos/EventoSubsecretaria.jsx';
import EventoVillaOlimpica from './pages/eventos/EventoVillaOlimpica.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AldoTiempoLibre />} />
        <Route path="/aldo" element={<AldoTiempoLibre />} />
        <Route path="/evento/ronaldinho" element={<EventoRonaldinho />} />
        <Route path="/evento/claudio-bravo" element={<EventoClaudioBravo />} />
        <Route path="/evento/dimeiggs" element={<EventoDimeiggs />} />
        <Route path="/evento/disney-on-ice" element={<EventoDisneyOnIce />} />
        <Route path="/evento/faenas-mineras" element={<EventoFaenasMineras />} />
        <Route path="/evento/lollapalooza" element={<EventoLollapalooza />} />
        <Route path="/evento/meiggs" element={<EventoMeiggs />} />
        <Route path="/evento/miley-cyrus" element={<EventoMileyCyrus />} />
        <Route path="/evento/subsecretaria" element={<EventoSubsecretaria />} />
        <Route path="/evento/villa-olimpica" element={<EventoVillaOlimpica />} />
      </Routes>
    </Router>
  );
}

export default App;
