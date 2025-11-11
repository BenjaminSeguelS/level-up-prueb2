import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import '../css/ofertass.css';

function Productos() {
    const { agregarAlCarrito } = useContext(CarritoContext);
    return (
        <div className="ofertas-root">
            <div className="container-productos">
                <h1>Nuestros Productos</h1>
                <h2>PCs Gamer Armados</h2>
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Especificaciones</th>
                            <th>Precio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PC Gamer AMD Ryzen 7 8700G</td>
                            <td>32GB RAM DDR5, 500GB NVMe 4.0</td>
                            <td>$1.200.000 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("PC Ryzen 7 8700G", 1200000)}>Agregar</button></td>
                        </tr>
                        <tr>
                            <td>PC Intel Core i7 RTX 4070</td>
                            <td>16GB RAM, 1TB SSD</td>
                            <td>$1.500.000 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("PC Intel i7 RTX 4070", 1500000)}>Agregar</button></td>
                        </tr>
                    </tbody>
                </table>
                <h2>Monitores Gamer</h2>
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Tamaño</th>
                            <th>Resolución</th>
                            <th>Precio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Xiaomi G24i</td>
                            <td>24"</td>
                            <td>Full HD 1920×1080</td>
                            <td>$150.000 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("Monitor Xiaomi G24i", 150000)}>Agregar</button></td>
                        </tr>
                        <tr>
                            <td>ASUS TUF VG27AQ</td>
                            <td>27"</td>
                            <td>QHD 165Hz</td>
                            <td>$320.000 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("Monitor ASUS TUF VG27AQ", 320000)}>Agregar</button></td>
                        </tr>
                    </tbody>
                </table>
                <h2>Periféricos</h2>
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Modelo</th>
                            <th>Precio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mouse</td>
                            <td>Razer Viper V3 Hyperspeed</td>
                            <td>$89.990 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("Mouse Razer Viper V3", 89990)}>Agregar</button></td>
                        </tr>
                        <tr>
                            <td>Mouse</td>
                            <td>Logitech G502 HERO</td>
                            <td>$49.990 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("Mouse Logitech G502", 49990)}>Agregar</button></td>
                        </tr>
                        <tr>
                            <td>Teclado</td>
                            <td>Redragon Dragonborn K630RGB</td>
                            <td>$29.900 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("Teclado Redragon K630", 29900)}>Agregar</button></td>
                        </tr>
                        <tr>
                            <td>Teclado</td>
                            <td>Logitech Signature K650 Wireless</td>
                            <td>$39.990 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("Teclado Logitech K650", 39990)}>Agregar</button></td>
                        </tr>
                        <tr>
                            <td>Audífonos</td>
                            <td>HyperX Cloud II</td>
                            <td>$69.990 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("Audífonos HyperX Cloud II", 69990)}>Agregar</button></td>
                        </tr>
                        <tr>
                            <td>Audífonos</td>
                            <td>Logitech G733 Wireless</td>
                            <td>$99.990 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("Audífonos Logitech G733", 99990)}>Agregar</button></td>
                        </tr>
                    </tbody>
                </table>
                <h2>Sillas Gamer</h2>
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Características</th>
                            <th>Precio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cougar Armor Titan Pro</td>
                            <td>Ergonómica, cuero sintético</td>
                            <td>$489.000 CLP</td>
                            <td><button className="btn-agregar" onClick={() => agregarAlCarrito("Silla Cougar Armor Titan", 489000)}>Agregar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Productos;