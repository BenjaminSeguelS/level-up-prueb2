import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Enviamos usuario y contraseña al endpoint de login que creamos
            const response = await axios.post('http://localhost:8080/api/usuarios/login', {
                usuario: username,
                password: password
            });

            if (response.status === 200) {
                alert(`¡Bienvenido, ${response.data.nombreCompleto}!`);
                console.log("Usuario logueado:", response.data);
                
                // Aquí podrías guardar el usuario en localStorage si quieres mantener la sesión
                // localStorage.setItem('usuario', JSON.stringify(response.data));
                
                navigate('/'); // Redirigir al inicio o dashboard
            }

        } catch (error) {
            console.error("Error de login:", error);
            if (error.response && error.response.status === 401) {
                alert("Contraseña incorrecta.");
            } else if (error.response && error.response.status === 404) {
                alert("El usuario no existe.");
            } else {
                alert("Error de conexión con el servidor.");
            }
        }
    };

    return (
        <div>
            <h1>Level-UP</h1>
            <br />
            <div className="registro-container">
                <h2>Iniciar Sesión</h2>
                
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="campo-grupo">
                        <label htmlFor="username">Usuario:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="campo-grupo">
                        <label htmlFor="password">Contraseña:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit">Entrar</button>

                    <p className="enlace-login">
                        ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;