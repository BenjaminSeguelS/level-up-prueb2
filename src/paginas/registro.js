import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import axios from 'axios'; // Importamos Axios
import '../css/registro.css';

function Registro() {
    const navigate = useNavigate(); // Para redirigir al login al terminar
    
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

    const handleSubmit = async (e) => { // Agregamos async
        e.preventDefault();
        
        // Mapeo de datos para que coincidan con el Backend Java
        const datosParaBackend = {
            nombreCompleto: formData.nombre,
            correo: formData.correo,
            usuario: formData.username,
            password: formData.password
        };

        try {
            // Petición al backend
            const respuesta = await axios.post('http://localhost:8080/api/usuarios', datosParaBackend);
            console.log("Usuario registrado:", respuesta.data);
            alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
            navigate('/login'); // Redirigir al login
        } catch (error) {
            console.error("Error al registrar:", error);
            alert("Hubo un error al registrar el usuario. Revisa la consola.");
        }
    };

    return (
        <div className="registro-container">
            <h2>Crear Cuenta en GamerHub</h2>
            
            <form id="registroForm" onSubmit={handleSubmit}>
                {/* ... (Todo tu JSX del formulario se mantiene igual) ... */}
                
                <div className="campo-grupo">
                    <label htmlFor="nombre">Nombre completo:</label>
                    <input type="text" id="nombre" name="nombre" required value={formData.nombre} onChange={handleChange} />
                </div>
                <div className="campo-grupo">
                    <label htmlFor="correo">Correo electrónico:</label>
                    <input type="email" id="correo" name="correo" required value={formData.correo} onChange={handleChange} />
                </div>
                <div className="campo-grupo">
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" name="username" required value={formData.username} onChange={handleChange} />
                </div>
                <div className="campo-grupo">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required value={formData.password} onChange={handleChange} />
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