import React, { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import '../css/ofertass.css';
import axios from 'axios'; 

// URL del Endpoint de Spring Boot
const API_URL = 'http://52.2.45.72/api/productos';

function Productos() {
    const { agregarAlCarrito } = useContext(CarritoContext);
    
    // Estados para manejar los datos de la API
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // useEffect para cargar los datos del backend
    useEffect(() => {
        axios.get(API_URL) 
            .then(response => {
                setProductos(response.data);
                setCargando(false);
            })
            .catch(err => {
                console.error("Error al obtener datos del backend:", err);
                // Mensaje de error ajustado para indicar que la conexión falló
                setError("Fallo la conexión. Asegúrate que Spring Boot esté corriendo y revisa la consola para el error específico.");
                setCargando(false);
            });
    }, []); 

    // Función auxiliar para renderizar la fila de un producto
    const renderProductoRow = (producto) => {
        const { id, nombre, precio, descripcion } = producto; 
        
        // Manejamos el caso donde la descripción podría no estar
        const descripcionProducto = descripcion || "Sin descripción detallada.";

        return (
            <tr key={id}>
                <td>{nombre}</td>
                <td>{descripcionProducto}</td> 
                {/* Formateo del precio a CLP */}
                <td>${precio ? precio.toLocaleString('es-CL') : 'N/A'} CLP</td>
                <td>
                    <button 
                        className="btn-agregar" 
                        onClick={() => agregarAlCarrito(nombre, precio)}
                    >
                        Agregar
                    </button>
                </td>
            </tr>
        );
    };

    // Lógica para mostrar estado de carga o error
    if (cargando) {
        return (
            <div className="ofertas-root">
                <div className="container-productos">
                    <h1>Cargando Productos...</h1>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="ofertas-root">
                <div className="container-productos">
                    <h1>Error de Conexión</h1>
                    <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>
                    <p>URL de la API intentada: {API_URL}</p>
                </div>
            </div>
        );
    }
    
    // Renderizado final con datos dinámicos
    return (
        <div className="ofertas-root">
            <div className="container-productos">
                <h1>Nuestros Productos (Cargados Dinámicamente)</h1>
                <h2>Inventario General</h2>
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Descripción/Especificaciones</th>
                            <th>Precio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(renderProductoRow)}
                    </tbody>
                </table>
                
                {productos.length === 0 && (
                    <p style={{marginTop: '20px'}}>
                        La API respondió correctamente, pero no se encontraron productos en la base de datos.
                    </p>
                )}
            </div>
        </div>
    );
}

export default Productos;