import React from 'react';
import { CarritoProvider } from './context/CarritoContext';
import CarritoModal from './components/CarritoModal';
// Importa Link aquí
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importa tus páginas...
import Inicio from './paginas/inicio';
import Productos from './paginas/productos';
import Contacto from './paginas/contacto';
import Login from './paginas/login';
import Registro from './paginas/registro';
import InformacionNosotros from './paginas/InformacionNosotros';
import Ofertas from './paginas/productos';
import CompraExitosa from './paginas/compraexitosa';

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        {/* === INICIO DEL REFACTOR === */}
        {/* - fondo [#181818], borde inferior azul, padding inferior de 10px 
          - Por defecto (móvil), es 'p-4' (padding de 4)
          - En pantallas medianas ('md:') y superiores, el padding es 0 0 10px 0
        */}
        <header className="bg-[#181818] border-b-2 border-[#00bfff] p-4 md:p-0 md:pb-[10px]">
          {/* - max-w-6xl (equivale a 1200px), centrado (mx-auto)
            - flex, centrado vertical (items-center), justificado (justify-between)
            - padding de 10px 20px
            - Dirección: Columna en móvil (flex-col) y Fila en escritorio (md:flex-row)
          */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-[10px_20px]">
            <h1 className="m-0 text-3xl"> {/* text-3xl es aprox 2.2rem */}
              <Link to="/" className="text-[#00bfff] no-underline">GamerHub</Link>
            </h1>
            <nav>
              {/* - flex, list-style-none, sin margen/padding
                - 'gap-4' (aprox 18px)
                - 'mt-4' (margen superior en móvil)
                - 'md:mt-0' (sin margen superior en escritorio)
              */}
              <ul className="flex flex-wrap justify-center gap-4 list-none m-0 p-0 mt-4 md:mt-0">
                <li><Link to="/inicio" className="text-white no-underline">Inicio</Link></li>
                <li><Link to="/productos" className="text-white no-underline">Productos</Link></li>
                <li><Link to="/contacto" className="text-white no-underline">Contacto</Link></li>
                <li><Link to="/nosotros" className="text-white no-underline">Sobre Nosotros</Link></li>
                <li><Link to="/login" className="text-white no-underline">Login</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <CarritoModal />
        
        {/* No necesitas estilizar 'main' si el footer está al final */}
        <main className="min-h-[80vh]"> 
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
        {/* === FIN DEL REFACTOR === */}
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;