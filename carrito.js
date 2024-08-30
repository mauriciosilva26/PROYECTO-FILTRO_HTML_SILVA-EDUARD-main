let carrito = {};

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente cargado y analizado');

    const toggleCarrito = document.getElementById('toggle-carrito');
    const carritoDesplegable = document.getElementById('carrito-desplegable');
    const pagarBtn = document.getElementById('pagar-btn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('close-modal-btn');


    if (!toggleCarrito || !carritoDesplegable || !pagarBtn || !modal || !closeModalBtn) {
        console.error('Uno o más elementos no se encontraron en el DOM');
        return;
    }


    toggleCarrito.addEventListener('click', function() {
        carritoDesplegable.classList.toggle('oculto');
    });


    pagarBtn.addEventListener('click', function() {
        console.log('Pagar botón clickeado');
        modal.style.display = 'flex';
    });


    closeModalBtn.addEventListener('click', function() {
        console.log('Cerrar modal botón clickeado');
        modal.style.display = 'none';
    });

    document.addEventListener('click', function(event) {
        if (!carritoDesplegable.contains(event.target) && event.target !== toggleCarrito) {
            carritoDesplegable.classList.add('oculto');
        }
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            console.log('Modal clickeado');
            modal.style.display = 'none';
        }
    });
});

function agregarAlCarrito(nombre, precio, imagen, categoria) {
    console.log('Agregar al carrito:', nombre, precio, imagen, categoria);

    if (!carrito[categoria]) {
        carrito[categoria] = [];
    }
    carrito[categoria].push({ nombre, precio, imagen });
    actualizarCarritoDesplegable();
}

function actualizarCarritoDesplegable() {
    let productosCarrito = document.getElementById('productos-carrito');
    let totalCarrito = document.getElementById('total-carrito');

    productosCarrito.innerHTML = '';
    let suma = 0;

    for (let categoria in carrito) {
        carrito[categoria].forEach(item => {
            let productoElement = document.createElement('div');
            productoElement.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}" style="width: 50px; height: 50px; object-fit: cover;">
                <span>${item.nombre} - $${item.precio.toFixed(2)}</span>
            `;
            productosCarrito.appendChild(productoElement);
            suma += item.precio;
        });
    }

    totalCarrito.textContent = suma.toFixed(2);
}

function vaciarCarrito() {
    carrito = {};
    actualizarCarritoDesplegable();
}








function buscarProductos() {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const nombre = producto.querySelector('h3').textContent.toLowerCase();
        if (nombre.includes(busqueda)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
} 

document.getElementById('toggle-buscador').addEventListener('click', function() {
    document.getElementById('buscador').classList.toggle('visible');
});

document.getElementById('toggle-carrito').addEventListener('click', function() {
    document.getElementById('carrito-desplegable').classList.toggle('visible');
});



document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel'); // Selecciona todos los carruseles

    carousels.forEach((carousel) => {
        const images = carousel.querySelectorAll('img'); // Selecciona las imágenes solo dentro del carrusel actual
        const prevButton = carousel.querySelector('.prev'); // Botón de "anterior" dentro del carrusel actual
        const nextButton = carousel.querySelector('.next'); // Botón de "siguiente" dentro del carrusel actual
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.remove('active');
                img.style.opacity = '0';
            });
            images[index].classList.add('active');
            images[index].style.opacity = '1';
        }

        function handleButtonClick(isNext) {
            currentIndex = isNext
                ? (currentIndex + 1) % images.length
                : (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        prevButton.addEventListener('click', function() {
            handleButtonClick(false);
        });

        nextButton.addEventListener('click', function() {
            handleButtonClick(true);
        });

        showImage(currentIndex);
    });
});













function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos');
    
    productos.forEach(categoria => {
        const seccionCategoria = document.createElement('section');
        seccionCategoria.className = 'categoria';
        seccionCategoria.innerHTML = `<h2>${categoria.categoria}</h2>`;
        
        const productosGrid = document.createElement('div');
        productosGrid.className = 'productos-grid';
        
        categoria.items.forEach(item => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto';
            productoDiv.innerHTML = `
                <div class="carousel">
                    ${item.imagenes.map((img, index) => `
                        <img src="${img}" alt="${item.nombre}" class="${index === 0 ? 'active' : ''}">
                    `).join('')}
                    <button class="prev"></button>
                    <button class="next"></button>
                </div>
                <h3>${item.nombre}</h3>
                <p>Precio: $${item.precio}</p>
                ${item.tamaño ? `<p>Tamaño: ${item.tamaño}</p>` : ''}
                ${item.cantidad ? `<p>Cantidad: ${item.cantidad}</p>` : ''}
                <p>${item.descripcion || ''}</p>
                <button onclick="agregarAlCarrito('${item.nombre}', ${item.precio}, '${item.imagenes[0]}', '${categoria.categoria}')">
                    Agregar al carrito
                </button>
            `;
            productosGrid.appendChild(productoDiv);
            
            inicializarCarrusel(productoDiv.querySelector('.carousel'));
        });
        
        seccionCategoria.appendChild(productosGrid);
        contenedor.appendChild(seccionCategoria);
    });
}

function inicializarCarrusel(carrusel) {
    const images = carrusel.querySelectorAll('img');
    const prevButton = carrusel.querySelector('.prev');
    const nextButton = carrusel.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
}

// Cargar los productos desde el JSON
fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        mostrarProductos(data.productos);
    })
    .catch(error => console.error('Error:', error));






