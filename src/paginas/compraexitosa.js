import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function CompraExitosa() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const status = searchParams.get('status');
  const [mensaje, setMensaje] = useState("Procesando pago...");

  useEffect(() => {
    if (status === 'success') {
      setMensaje("¡Pago Exitoso! Gracias por tu compra.");
    } else if (status === 'rejected') {
      setMensaje("El pago fue rechazado por el banco.");
    } else if (status === 'error') {
      setMensaje("Hubo un error en la comunicación con el pago.");
    }
  }, [status]);

  return (
    <div style={{ padding: '50px', textAlign: 'center', color: 'white' }}>
      <h1>{mensaje}</h1>
      
      {/* Botón modificado para volver a Productos */}
      <button 
        onClick={() => navigate('/productos')} 
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer', fontSize: '16px' }}
      >
        Volver a Productos
      </button>
    </div>
  );
}

export default CompraExitosa;