import React from 'react';
import { CarritoProvider } from './context/CarritoContext';
import CarritoModal from './components/CarritoModal';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importa tus páginas...
import Inicio from './paginas/inicio';
import Productos from './paginas/productos';
import Contacto from './paginas/contacto';
import Login from './paginas/login';
import Registro from './paginas/registro';
import InformacionNosotros from './paginas/InformacionNosotros';
import Ofertas from './paginas/productos';
import CompraExitosa from './paginas/compraexitosa'; // Asegúrate que este archivo exista

// === AQUÍ ESTABA EL PROBLEMA: Faltaban estas líneas ===
import './css/style.css'; 
import './css/ofertass.css'; 
// =====================================================

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        {/* Header con estilos Tailwind + Diseño personalizado */}
        <header className="bg-[#181818] border-b-2 border-[#00bfff] p-4 md:p-0 md:pb-[10px]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-[10px_20px]">
            <h1 className="m-0 text-3xl">
              <Link to="/" className="text-[#00bfff] no-underline">GamerHub</Link>
            </h1>
            <nav>
              <ul className="flex flex-wrap justify-center gap-4 list-none m-0 p-0 mt-4 md:mt-0">
                <li><Link to="/inicio" className="text-white no-underline hover:text-[#00bfff] transition-colors">Inicio</Link></li>
                <li><Link to="/productos" className="text-white no-underline hover:text-[#00bfff] transition-colors">Productos</Link></li>
                <li><Link to="/contacto" className="text-white no-underline hover:text-[#00bfff] transition-colors">Contacto</Link></li>
                <li><Link to="/nosotros" className="text-white no-underline hover:text-[#00bfff] transition-colors">Sobre Nosotros</Link></li>
                <li><Link to="/login" className="text-white no-underline hover:text-[#00bfff] transition-colors">Login</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <CarritoModal />
        
        <main className="min-h-[80vh] container mx-auto p-4"> 
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/nosotros" element={<InformacionNosotros />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/compra-exitosa" element={<CompraExitosa />} />
          </Routes>
        </main>

        <footer className="bg-[#232323] text-[#aaa] text-center p-[18px_0] border-t-2 border-[#00bfff]">
          <span>© {new Date().getFullYear()} GamerHub. Todos los derechos reservados.</span>
        </footer>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;