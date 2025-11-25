import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function CompraExitosa() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const status = searchParams.get('status');
  const [mensaje, setMensaje] = useState("Procesando...");

  useEffect(() => {
    if (status === 'success') {
      setMensaje("¡Pago Exitoso! Gracias por tu compra.");
      // Aquí podrías vaciar el carrito
    } else if (status === 'rejected') {
      setMensaje("El pago fue rechazado o anulado.");
    } else {
      setMensaje("Hubo un error al procesar el pago.");
    }
  }, [status]);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>{mensaje}</h1>
      <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Volver al inicio
      </button>
    </div>
  );
}

export default CompraExitosa;