import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import CarritoModal from './components/CarritoModal';
import { CarritoContext } from './context/CarritoContext';
const renderConContext = (componente, valoresProvider) => {
  return render(
    <CarritoContext.Provider value={valoresProvider}>
      {componente}
    </CarritoContext.Provider>
  );
};

// 2. Mocks Base
const mockQuitarDelCarrito = jest.fn();
const itemDePrueba = { 
  nombre: 'Teclado Mecánico', 
  precio: 50000,
  cantidad: 2 
};

beforeEach(() => {
  mockQuitarDelCarrito.mockClear();
});


test('debería mostrar "Tu carrito está vacío" al abrir el modal', () => {
  const valoresSimulados = {
    carrito: [],
    quitarDelCarrito: mockQuitarDelCarrito
  };
  renderConContext(<CarritoModal />, valoresSimulados);
  fireEvent.click(screen.getByTestId('icono-carrito'));
  expect(screen.getByText('Tu carrito está vacío.')).toBeInTheDocument();
});


test('debería renderizar los items del carrito y el total al abrir', async () => {
  
  const mockItems = [
    {
      nombre: 'Teclado Mecánico',
      cantidad: 2,
      precio: 50000,
      total: 100000
    }
  ];
  const mockQuitar = jest.fn();

  const CustomProvider = ({ children }) => (
    <CarritoContext.Provider value={{ 
      carrito: mockItems, 
      quitarDelCarrito: mockQuitar 
    }}>
      {children}
    </CarritoContext.Provider>
  );

  render(<CarritoModal />, { wrapper: CustomProvider });

  const iconoCarrito = screen.getByTestId('icono-carrito');
  fireEvent.click(iconoCarrito);

  
  const filaProducto = (await screen.findByText(/teclado mecánico/i)).closest('tr');
  
  
  expect(within(filaProducto).getByText('2')).toBeInTheDocument(); // Cantidad
  expect(within(filaProducto).getByText(/100\.000/)).toBeInTheDocument(); // Total fila

  const totalHeading = screen.getByRole('heading', { name: /Total:/i, level: 3 });
  expect(totalHeading).toBeInTheDocument();

 
  expect(within(totalHeading).getByText(/\$\s*100\.000\s*CLP/i)).toBeInTheDocument();
});


test('debería llamar a quitarDelCarrito con el NOMBRE al hacer clic', () => {
  // Este test ya pasa, se queda igual
  const valoresSimulados = {
    carrito: [itemDePrueba],
    quitarDelCarrito: mockQuitarDelCarrito
  };
  renderConContext(<CarritoModal />, valoresSimulados);
  fireEvent.click(screen.getByTestId('icono-carrito'));
  fireEvent.click(screen.getByText('Quitar'));
  expect(mockQuitarDelCarrito).toHaveBeenCalledTimes(1);
  expect(mockQuitarDelCarrito).toHaveBeenCalledWith('Teclado Mecánico');
});