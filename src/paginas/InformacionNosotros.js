import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

function InformacionNosotros() {
    return (
        <main className="container">
            <section className="card" id="informacion-nosotros" aria-labelledby="nosotros-title">
                <h1 id="nosotros-title">Sobre nuestra tienda gamer</h1>
                <p>
                    Bienvenido a nuestra tienda gamer: un espacio creado por y para jugadores. Nos especializamos en hardware,
                    periféricos, componentes y accesorios de alta calidad, además de una selección cuidada de juegos y merchandising.
                </p>
                <p>
                    Nuestra misión es ofrecer productos confiables, asesoramiento personalizado y soporte postventa para que tu experiencia
                    de juego sea la mejor. Trabajamos con marcas reconocidas y con opciones para todos los presupuestos, desde configuraciones
                    competitivas hasta setups orientados a streaming y productividad.
                </p>
                <p>
                    También organizamos eventos y torneos locales, fomentamos una comunidad activa y ofrecemos guías para montar o mejorar tu equipo.
                </p>
                <ul>
                    <li>Venta online y en tienda física</li>
                    <li>Asesoría técnica y montaje a medida</li>
                    <li>Garantía y servicio postventa</li>
                    <li>Eventos, torneos y contenido para la comunidad</li>
                </ul>
                <Link className="cta" to="/contacto">Contáctanos</Link>
            </section>
        </main>
    );
}

export default InformacionNosotros;