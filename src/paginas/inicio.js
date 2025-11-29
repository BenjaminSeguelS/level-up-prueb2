import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

// Datos del Carrusel (Imágenes actualizadas y más profesionales)
const slides = [
    {
        href: "/productos",
        // Imagen de Hardware/Gabinete
        imgSrc: "https://static.nb.com.ar/i/nb_GABINETE-GAMER-THERMALTAKE-VERSA-T35-TG-RGB-BLACK_ver_d6e7cfd74a866171aa0232b8606d9f5b.jpg",
        alt: "Gabinetes Gamers",
        titulo: "Gabinetes Gamers",
        texto: "¡Consigue este INCREIBLE GABINETE GAMER para tus juegos o proyectos!"
    },
    {
        href: "/nosotros", // Enlace a la comunidad o nosotros
        // Imagen de ambiente gamer/torneo
        imgSrc: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        alt: "Comunidad Gamer",
        titulo: "Torneos de la Comunidad",
        texto: "¡Inscríbete en nuestro torneo de 'Rift Champions'! Grandes premios y transmisión en vivo."
    },
    {
        href: "/ofertas",
        // Imagen de periféricos neon
        imgSrc: "https://images.unsplash.com/photo-1527856263669-12c3a0db2ce5?auto=format&fit=crop&w=1200&q=80",
        alt: "Ofertas Especiales",
        titulo: "Semana de Periféricos",
        texto: "Descuentos de hasta un 40% en teclados mecánicos y mouses de alta precisión."
    }
];

function Inicio() {
    const [slideActual, setSlideActual] = useState(0);

    // Cambio automático de slide cada 5 segundos (Opcional, da vida a la página)
    useEffect(() => {
        const intervalo = setInterval(() => {
            irAlSiguiente();
        }, 5000);
        return () => clearInterval(intervalo);
    }, [slideActual]);

    const irAlSiguiente = () => {
        setSlideActual(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const irAlAnterior = () => {
        setSlideActual(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div>
            {/* Contenedor Principal (CSS Grid) */}
            <div className="container-principal">
                
                {/* COLUMNA IZQUIERDA: Carrusel y Noticias */}
                <main>
                    {/* Sección Hero / Carrusel */}
                    <section className="carrusel-hero">
                        <div className="carrusel-contenedor">
                            <Link to={slides[slideActual].href} className="carrusel-slide active">
                                <img src={slides[slideActual].imgSrc} alt={slides[slideActual].alt} />
                                <div className="carrusel-info">
                                    <h2>{slides[slideActual].titulo}</h2>
                                    <p>{slides[slideActual].texto}</p>
                                </div>
                            </Link>
                        </div>
                        
                        {/* Controles del Carrusel */}
                        <button className="carrusel-btn prev" onClick={irAlAnterior}>&#10094;</button>
                        <button className="carrusel-btn next" onClick={irAlSiguiente}>&#10095;</button>
                        
                        {/* Indicadores (Puntitos) */}
                        <div className="carrusel-puntos" style={{position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center', zIndex: 20}}>
                            {slides.map((_, index) => (
                                <span 
                                    key={index}
                                    onClick={() => setSlideActual(index)}
                                    style={{
                                        cursor: 'pointer',
                                        height: '10px',
                                        width: '10px',
                                        margin: '0 5px',
                                        backgroundColor: index === slideActual ? '#e50074' : '#fff',
                                        borderRadius: '50%',
                                        display: 'inline-block',
                                        transition: 'background-color 0.3s'
                                    }}
                                ></span>
                            ))}
                        </div>
                    </section>

                    {/* Sección Noticias */}
                    <section className="noticias-recientes">
                        <h3>Últimas Novedades</h3>
                        
                        <article className="noticia-card">
                            <h4>Reseña: 'Ancient Souls II'</h4>
                            <iframe 
                                src="https://www.youtube.com/embed/SJnKGodp8sY" 
                                title="Review Ancient Souls" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                            <p>Un digno sucesor que redefine el género, aunque con algunos tropiezos técnicos en su lanzamiento. Lee nuestro análisis completo para saber si vale la pena.</p>
                            <Link to="/noticias/ancient-souls" className="cta" style={{padding: '8px 16px', fontSize: '0.9rem'}}>Leer reseña completa</Link>
                        </article>

                        <article className="noticia-card">
                            <h4>Guía: Mejores periféricos 2025</h4>
                            <iframe 
                                src="https://www.youtube.com/embed/O1Rr0NaY93k" 
                                title="Mejores Periféricos" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                            <p>¿Buscas renovar tu setup? Comparamos los mejores mouses y teclados calidad-precio que han salido al mercado este último trimestre.</p>
                            <Link to="/productos" className="cta" style={{padding: '8px 16px', fontSize: '0.9rem'}}>Ver productos recomendados</Link>
                        </article>
                    </section>
                </main>

                {/* COLUMNA DERECHA: Sidebar */}
                <aside>
                    <section className="streams-en-vivo">
                        <h3>🔴 Streams en Vivo</h3>
                        <ul>
                            <li>
                                <strong style={{color: '#e50074'}}>StreamerAlfa</strong> <br/>
                                <span style={{fontSize: '0.9em', color: '#ccc'}}>Jugando 'CyberOdyssey 3'</span>
                            </li>
                            <li>
                                <strong style={{color: '#e50074'}}>GamerBeta</strong> <br/>
                                <span style={{fontSize: '0.9em', color: '#ccc'}}>Speedrun 'Ancient Souls II'</span>
                            </li>
                            <li>
                                <strong style={{color: '#e50074'}}>ProTorneos</strong> <br/>
                                <span style={{fontSize: '0.9em', color: '#ccc'}}>Final Regional Valorant</span>
                            </li>
                        </ul>
                    </section>

                    <section className="proximos-lanzamientos" style={{marginTop: '30px'}}>
                        <h3>📅 Próximos Lanzamientos</h3>
                        <ul>
                            <li>
                                <strong>Starfield 2</strong> - <span style={{color: '#00bfff'}}>15 Nov</span>
                            </li>
                            <li>
                                <strong>Project Zero</strong> - <span style={{color: '#00bfff'}}>1 Dic</span>
                            </li>
                            <li>
                                <strong>GTA VI (Trailer 3)</strong> - <span style={{color: '#00bfff'}}>10 Dic</span>
                            </li>
                        </ul>
                    </section>
                </aside>
            </div> 

            {/* Footer */}
            <footer className="piepag">
                <div className="enlaces-footer">
                    <Link to="/nosotros">Sobre Nosotros</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/privacidad">Política de Privacidad</Link>
                </div>
                <p style={{color: '#666'}}>© {new Date().getFullYear()} GamerHub. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Inicio;