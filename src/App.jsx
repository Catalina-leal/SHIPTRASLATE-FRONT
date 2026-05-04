import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ShipmentsPage from './pages/ShipmentsPage.jsx';
import NewShipmentPage from './pages/NewShipmentPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <div className="header-top">
            <h1>Tranship</h1>
            <nav>
              <Link to="/">Inicio</Link>
              <Link to="/shipments">Envíos</Link>
              <Link to="/shipments/new">Nuevo envío</Link>
            </nav>
          </div>
          <p>Gestión de envíos y transporte de mercancías.</p>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shipments" element={<ShipmentsPage />} />
            <Route path="/shipments/new" element={<NewShipmentPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
