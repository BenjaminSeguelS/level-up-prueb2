import React, { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import '../css/ofertass.css';

function CarritoModal() {
  const { carrito, quitarDelCarrito } = useContext(CarritoContext);
  const [visible, setVisible] = useState(false);

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  // --- 1. Esta es la función para manejar el pago ---
  const handlePago = () => {
    alert('pago exitoso(Demo)');

  };

  return (
    <>
      <div className="icono-carrito" onClick={() => setVisible(true)} style={{position: 'fixed', top: 20, right: 100, zIndex: 1001}}
        data-testid="icono-carrito">
        🛒
        <span className="carrito-contador">{carrito.reduce((acc, item) => acc + item.cantidad, 0)}</span>
      </div>
      {visible && (
        <div className="modal-carrito-overlay visible" onClick={e => { if (e.target.classList.contains('modal-carrito-overlay')) setVisible(false); }}>
          <div className="modal-carrito-contenido">
            <div className="modal-header">
              <h2>Carrito</h2>
              <button className="btn-cerrar-modal" onClick={() => setVisible(false)}>&times;</button>
            </div>
            <div className="lista-items-carrito">
              {carrito.length === 0 ? (
                <p>Tu carrito está vacío.</p>
              ) : (
                <table className="tabla-productos">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Total</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map(item => (
                      <tr key={item.nombre}>
                        <td>{item.nombre}</td>
                        <td>{item.cantidad}</td>
                        <td>${new Intl.NumberFormat('es-CL').format(item.precio * item.cantidad)}</td>
                        <td>
                          <button className="btn-agregar btn-quitar" onClick={() => quitarDelCarrito(item.nombre)}>Quitar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="modal-footer" style={{marginTop: 20, textAlign: 'right'}}>
              <h3>Total: <span style={{color: '#e50074'}}>${new Intl.NumberFormat('es-CL').format(total)} CLP</span></h3>
              
              {/* --- 2. Aquí se añade el 'onClick' al botón --- */}
              <button 
                className="btn-checkout" 
                style={{marginTop: 10}}
                onClick={handlePago} 
              >
                Pagar (Demo)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CarritoModal;
