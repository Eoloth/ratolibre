import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Página principal del sitio
import IndexPage from './pages/IndexPage.jsx';

// Colaboradores
import AldoOliveroSoto from './pages/AldoOliveroSoto.jsx';

// Eventos
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

// Página 404
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de inicio con noticias y panoramas */}
        <Route path="/" element={<IndexPage />} />

        {/* Colaboradores */}
        <Route path="/personas/aldo-olivero-soto" element={<AldoOliveroSoto />} />

        {/* Eventos */}
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

        {/* Página de error para rutas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
