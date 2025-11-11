import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

// Datos de los slides del carrusel
const slides = [
    {
        href: "/productos",
        imgSrc: "https://static.nb.com.ar/i/nb_GABINETE-GAMER-THERMALTAKE-VERSA-T35-TG-RGB-BLACK_ver_d6e7cfd74a866171aa0232b8606d9f5b.jpg",
        alt: "Gabinetes",
        titulo: "Gabinetes Gamers",
        texto: "¡Consigue este INCREIBLE GABINETE GAMER para tus juegos o proyectos!!!"
    },
    {
        href: "/foro", // Asumiendo que tendrás una ruta /foro
        imgSrc: "https://via.placeholder.com/1200x300/E50074/FFFFFF?text=Eventos+de+la+Comunidad",
        alt: "Comunidad Gamer",
        titulo: "Eventos de la Comunidad",
        texto: "¡Inscríbete en nuestro torneo de 'Rift Champions'! Grandes premios y stream en vivo."
    }
    // Puedes agregar más slides aquí
];

function Inicio() {
    // Lógica de React: 'useState' para manejar el slide activo
    const [slideActual, setSlideActual] = useState(0);

    const irAlSiguiente = () => {
        setSlideActual(slideActual === slides.length - 1 ? 0 : slideActual + 1);
    };

    const irAlAnterior = () => {
        setSlideActual(slideActual === 0 ? slides.length - 1 : slideActual - 1);
    };

    // Convertimos las etiquetas <a> a <Link> de React Router
    return (
        <div>
            {/* El header y navegación global ya está en App.js, así que no se repite aquí */}
            <div className="container-principal">
                <main>
                    <section className="carrusel-hero">
                        <div className="carrusel-contenedor">
                            {/* Renderizamos el slide actual basado en el estado */}
                            <Link to={slides[slideActual].href} className="carrusel-slide active">
                                <img src={slides[slideActual].imgSrc} alt={slides[slideActual].alt} />
                                <div className="carrusel-info">
                                    <h2>{slides[slideActual].titulo}</h2>
                                    <p>{slides[slideActual].texto}</p>
                                </div>
                            </Link>
                        </div>
                        
                        {/* Botones que cambian el estado */}
                        <button className="carrusel-btn prev" onClick={irAlAnterior}>&#10094;</button>
                        <button className="carrusel-btn next" onClick={irAlSiguiente}>&#10095;</button>
                        
                        <div className="carrusel-puntos">
                            {/* Puedes mapear los puntos también */}
                            {slides.map((slide, index) => (
                                <span 
                                    key={index}
                                    className={`punto ${index === slideActual ? 'active' : ''}`}
                                    onClick={() => setSlideActual(index)}
                                ></span>
                            ))}
                        </div>
                    </section>

                    <section className="noticias-recientes">
                        <h3>Noticias Secundarias</h3>
                        <article className="noticia-card">
                            <h4>Reseña: 'Ancient Souls II'</h4>
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/SJnKGodp8sY" 
                                title="YouTube video player" 
                                frameBorder="0" // Nota: 'frameborder' se convierte en 'frameBorder' en React
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen> 
                            </iframe>
                            <p>Un digno sucesor, pero con algunos tropiezos. Lee nuestro análisis completo...</p>
                            <a href="https://darksouls2.wiki.fextralife.com/Ancient+Dragon+Soul">Leer más</a> {/* Enlace externo se queda como <a> */}
                        </article>
                        <article className="noticia-card">
                            <h4>Guía: Mejores periféricos 2025</h4>
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://youtube.com/embed/shorts/O1Rr0NaY93k?si=lNsRL_i3oiEKHPbf" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p>¿Buscas nuevo ratón o teclado? Te mostramos las mejores opciones calidad-precio...</p>
                            <Link to="/productos">Leer más</Link> {/* Enlace interno va con Link */}
                        </article>
                    </section>
                </main>

                <aside>
                    <section className="streams-en-vivo">
                        <h3>Streams Populares</h3>
                        <ul>
                            <li>StreamerAlfa - Jugando 'CyberOdyssey 3'</li>
                            <li>GamerBeta - Speedrun 'Ancient Souls II'</li>
                        </ul>
                    </section>
                    <section className="proximos-lanzamientos">
                        <h3>Próximos Lanzamientos</h3>
                        <ul>
                            <li>'Starfield 2' - 15 Nov</li>
                            <li>'Project Zero' - 1 Dic</li>
                        </ul>
                    </section>
                </aside>
            </div> 

            <footer className="piepag">
                <div className="enlaces-footer">
                    <Link to="/nosotros">Sobre Nosotros</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/privacidad">Política de Privacidad</Link>
                </div>
                <p>2025 GamerHub. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Inicio;