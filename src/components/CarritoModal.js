import React, { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import axios from 'axios'; // <--- AGREGA ESTO ARRIBA
import '../css/ofertass.css';

function CarritoModal() {
  const { carrito, quitarDelCarrito } = useContext(CarritoContext);
  const [visible, setVisible] = useState(false);

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  // --- NUEVA LÓGICA DE PAGO ---
  const handlePago = async () => {
    if (total === 0) return alert("El carrito está vacío");

    try {
      // 1. Pedir a nuestro Backend que inicie la transacción
      const response = await axios.post('http://localhost:8080/api/webpay/create', {
        amount: total
      });

      const { url, token } = response.data;

      // 2. Crear un formulario invisible para enviar al usuario a Transbank
      // (Es necesario hacerlo así porque Transbank requiere un POST desde el navegador)
      const form = document.createElement("form");
      form.method = "POST";
      form.action = url;

      const tokenInput = document.createElement("input");
      tokenInput.type = "hidden";
      tokenInput.name = "token_ws";
      tokenInput.value = token;

      form.appendChild(tokenInput);
      document.body.appendChild(form);
      
      // 3. Enviar formulario (Redirige al usuario)
      form.submit();

    } catch (error) {
      console.error("Error iniciando pago:", error);
      alert("Error al conectar con el servidor de pagos.");
    }
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
