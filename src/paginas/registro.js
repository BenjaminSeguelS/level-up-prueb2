import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/registro.css';

function Registro() {
    // Estado para el formulario de registro
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos de registro:", formData);
        // Lógica de registro...
        alert("¡Cuenta creada! (Demo)");
    };

    return (
        <div className="registro-container">
            <h2>Crear Cuenta en GamerHub</h2>
            
            <form id="registroForm" onSubmit={handleSubmit}>

                <div className="campo-grupo">
                    <label htmlFor="nombre">Nombre completo:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        required 
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    <span id="errorNombre" className="error-texto"></span>
                </div>

                <div className="campo-grupo">
                    <label htmlFor="correo">Correo electrónico:</label>
                    <input 
                        type="email" 
                        id="correo" 
                        name="correo" 
                        required
                        value={formData.correo}
                        onChange={handleChange}
                    />
                    <span id="errorEmail" className="error-texto"></span>
                </div>

                <div className="campo-grupo">
                    <label htmlFor="username">Usuario:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <span id="errorUsername" className="error-texto"></span> 
                </div>

                <div className="campo-grupo">
                    <label htmlFor="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span id="errorPassword" className="error-texto"></span> 
                </div>

                <button type="submit">Crear cuenta</button>
                
                <p className="enlace-login">
                    ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
                </p>

            </form>
        </div>
    );
}

export default Registro;