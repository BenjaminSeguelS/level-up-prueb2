import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(nombre, precio) {
    setCarrito(prev => {
      const itemExistente = prev.find(item => item.nombre === nombre);
      if (itemExistente) {
        return prev.map(item =>
          item.nombre === nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { nombre, precio, cantidad: 1 }];
      }
    });
  }

  function quitarDelCarrito(nombre) {
    setCarrito(prev => prev.filter(item => item.nombre !== nombre));
  }

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}
