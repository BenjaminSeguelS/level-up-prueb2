import React, { useState } from 'react';



import { Link } from 'react-router-dom';

function Login() {
    // 2. Estado para manejar los inputs del formulario
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevenimos el refresco de la página
        console.log('Iniciando sesión con:', { username, password });
        // Aquí iría tu lógica de autenticación
    };

    // 3. Cambios en JSX:
    // - 'for' en <label> cambia a 'htmlFor'
    // - Los inputs usan 'value' y 'onChange' para estar "controlados" por React
    return (
        <div>
            <h1>Level-UP</h1>
            <br />
            
            {/* El menú lateral debería ser un componente separado: <MenuLateral /> */}

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