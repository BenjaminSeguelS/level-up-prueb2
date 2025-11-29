import React from 'react';
import '../css/style.css'; // Asegúrate de importar los estilos

function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado (Demo)');
  };

  return (
    <div className="registro-container" style={{ maxWidth: '800px' }}>
      <h2 style={{ textAlign: 'center', color: '#00bfff' }}>Contáctanos</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        ¿Tienes dudas o sugerencias? Envíanos un mensaje.
      </p>

      <form onSubmit={handleSubmit} className="formulario-contacto">
        <div className="campo-grupo">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre..." />
        </div>

        <div className="campo-grupo">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="tucorreo@ejemplo.com" />
        </div>

        <div className="campo-grupo">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea 
            id="mensaje" 
            name="mensaje" 
            rows="5" 
            required 
            placeholder="Escribe tu mensaje aquí..."
            style={{
                width: '100%', 
                padding: '10px', 
                backgroundColor: '#333', 
                color: 'white', 
                border: '1px solid #444',
                borderRadius: '5px'
            }}
          ></textarea>
        </div>

        <button type="submit" className="cta" style={{ width: '100%', marginTop: '20px' }}>
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default Contacto;