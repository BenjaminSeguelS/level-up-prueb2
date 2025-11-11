// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- Selectores de Elementos ---
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    const iconoCarrito = document.getElementById('icono-carrito');
    const contadorCarrito = document.getElementById('carrito-contador');
    const modal = document.getElementById('modal-carrito-overlay');
    const botonCerrarModal = document.getElementById('btn-cerrar-modal');
    const listaItemsCarrito = document.getElementById('lista-items-carrito');
    const totalCarrito = document.getElementById('carrito-total');
    const botonCheckout = document.getElementById('btn-checkout');

    // --- Estado del Carrito ---
    // Carga el carrito desde localStorage o inicializa un array vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // --- Funciones ---

    /**
     * Añade un item al carrito o incrementa su cantidad.
     */
    function agregarAlCarrito(e) {
        // Obtenemos los datos del producto desde los atributos 'data-*' del botón
        const nombre = e.target.dataset.nombre;
        const precio = parseInt(e.target.dataset.precio);

        // Buscamos si el item ya existe en el carrito
        const itemExistente = carrito.find(item => item.nombre === nombre);

        if (itemExistente) {
            // Si existe, solo incrementamos la cantidad
            itemExistente.cantidad++;
        } else {
            // Si no existe, lo agregamos como un nuevo objeto
            carrito.push({ nombre, precio, cantidad: 1 });
        }

        // Guardamos y actualizamos la vista
        guardarCarrito();
        actualizarVisualCarrito();
    }

    /**
     * Guarda el estado actual del carrito en localStorage.
     */
    function guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    /**
     * Actualiza la vista del modal y el contador del icono.
     */
    function actualizarVisualCarrito() {
        // 1. Limpiamos la lista visual
        listaItemsCarrito.innerHTML = '';
        
        let total = 0;
        let totalItems = 0;

        // 2. Recorremos el array del carrito y creamos el HTML
        carrito.forEach(item => {
            const subtotalItem = item.precio * item.cantidad;
            total += subtotalItem;
            totalItems += item.cantidad;

            const itemElemento = document.createElement('div');
            itemElemento.classList.add('item-carrito');
            itemElemento.innerHTML = `
                <p>${item.nombre}</p>
                <p>Cant: ${item.cantidad}</p>
                <p>$${formatearPrecio(subtotalItem)}</p>
                <button class="btn-quitar" data-nombre="${item.nombre}">Quitar</button>
            `;
            listaItemsCarrito.appendChild(itemElemento);
        });

        // 3. Actualizamos el total y el contador
        totalCarrito.textContent = `$${formatearPrecio(total)} CLP`;
        contadorCarrito.textContent = totalItems;
    }

    /**
     * Quita un item del carrito.
     */
    function quitarDelCarrito(nombre) {
        // Filtramos el array, quitando el item con el nombre coincidente
        carrito = carrito.filter(item => item.nombre !== nombre);

        // Guardamos y actualizamos la vista
        guardarCarrito();
        actualizarVisualCarrito();
    }
    
    /**
     * Formatea un número como precio CLP (ej: 1200000 -> 1.200.000)
     */
    function formatearPrecio(numero) {
        return new Intl.NumberFormat('es-CL').format(numero);
    }
    
    /**
     * Maneja los clics dentro del modal del carrito (para el botón "Quitar").
     */
    function manejarClickModal(e) {
        // Verificamos si el clic fue en un botón "Quitar"
        if (e.target.classList.contains('btn-quitar')) {
            const nombre = e.target.dataset.nombre;
            quitarDelCarrito(nombre);
        }
    }

    // --- Event Listeners ---

    // 1. Botones "Agregar" en la tabla
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    // 2. Icono del carrito (para abrir el modal)
    iconoCarrito.addEventListener('click', () => {
        modal.classList.add('visible');
    });

    // 3. Botón "X" para cerrar el modal
    botonCerrarModal.addEventListener('click', () => {
        modal.classList.remove('visible');
    });

    // 4. Fondo del modal (para cerrar al hacer clic afuera)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // Si el clic es en el overlay y no en el contenido
            modal.classList.remove('visible');
        }
    });
    
    // 5. Clics dentro de la lista (para los botones "Quitar")
    listaItemsCarrito.addEventListener('click', manejarClickModal);
    
    // 6. Botón de Checkout (Demo)
    botonCheckout.addEventListener('click', () => {
        if(carrito.length > 0) {
            alert('¡Gracias por tu compra! (Este es un demo y no procesa pagos reales).');
            // Limpiamos el carrito después de la "compra"
            carrito = [];
            guardarCarrito();
            actualizarVisualCarrito();
            modal.classList.remove('visible');
        } else {
            alert('Tu carrito está vacío.');
        }
    });

    // --- Carga Inicial ---
    // Actualiza la vista por primera vez al cargar la página
    // (para mostrar los items guardados en localStorage)
    actualizarVisualCarrito();
});