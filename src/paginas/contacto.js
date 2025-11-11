import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/contacto.css';

function Contacto() {
    // Estado para manejar los campos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    // Función que actualiza el estado cuando escribes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        console.log("Datos del formulario:", formData);
        // Aquí iría la lógica para enviar los datos a un servidor
        alert("¡Mensaje enviado! (Demo)");
        // Limpiamos el formulario
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    };

    return (
        <div>
            {/* El header y navegación global ya está en App.js, así que no se repite aquí */}
            <div className="container-principal">
                <main className="seccion-contacto">
                    <h1 className="titulo-seccion">¡Hablemos, Gamer!</h1>
                    <p className="subtitulo-seccion">¿Tienes alguna pregunta, sugerencia o quieres unirte a la conversación? Estamos aquí para ayudarte.</p>

                    <div className="grid-contacto">
                        <section className="formulario-contacto">
                            <h2>Envíanos un Mensaje</h2>
                            {/* Usamos onSubmit en el form y value/onChange en los inputs */}
                            <form onSubmit={handleSubmit}>
                                <div className="grupo-campo">
                                    <label htmlFor="nombre">Nombre Completo</label>
                                    <input 
                                        type="text" 
                                        id="nombre" 
                                        name="nombre" 
                                        required 
                                        placeholder="Tu nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grupo-campo">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grupo-campo">
                                    <label htmlFor="asunto">Asunto</label>
                                    <input 
                                        type="text" 
                                        id="asunto" 
                                        name="asunto" 
                                        required 
                                        placeholder="Tema de tu mensaje"
                                        value={formData.asunto}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grupo-campo">
                                    <label htmlFor="mensaje">Tu Mensaje</label>
                                    <textarea 
                                        id="mensaje" 
                                        name="mensaje" 
                                        rows="6" 
                                        required 
                                        placeholder="Escribe tu consulta aquí..."
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="cta-button">Enviar Mensaje</button>
                            </form>
                        </section>

                        <aside className="info-adicional-contacto">
                            <h2>Encuéntranos Aquí</h2>
                            <p>Si prefieres, también puedes contactarnos por:</p>
                            
                            {/* Los iconos <i> de FontAwesome funcionarán si importas la librería en tu index.html principal */}
                            <div className="metodo-contacto">
                                <i className="fas fa-envelope icon-contacto"></i>
                                <p>Email: <a href="mailto:info@gamerhub.com">info@gamerhub.com</a></p>
                            </div>
                            
                            <div className="metodo-contacto">
                                <i className="fas fa-phone-alt icon-contacto"></i>
                                <p>Teléfono: <a href="tel:+34123456789">+34 123 456 789</a></p>
                            </div>

                            <div className="metodo-contacto">
                                <i className="fas fa-map-marker-alt icon-contacto"></i>
                                <p>Dirección: Calle Gamer 123, Ciudad Pixel, País XYZ</p>
                            </div>

                            <div className="redes-sociales-contacto">
                                <h3>Síguenos</h3>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-discord"></i></a>
                                <a href="#"><i className="fab fa-twitch"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>

                            <div className="mapa-container">
                                <h3>Nuestra Ubicación</h3>
                                <iframe 
                                    src="http://googleusercontent.com/maps/google.com/0" 
                                    width="100%" 
                                    height="300" 
                                    style={{ border: 0, borderRadius: '8px' }} // 'style' en React es un objeto
                                    allowFullScreen="" 
                                    loading="lazy">
                                </iframe>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>

            <footer>
                <div className="enlaces-footer">
                    <Link to="/nosotros">Sobre Nosotros</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/privacidad">Política de Privacidad</Link>
                </div>
                <p>© 2025 GamerHub. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Contacto;