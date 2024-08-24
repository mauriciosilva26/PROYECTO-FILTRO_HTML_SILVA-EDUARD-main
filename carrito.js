let carrito = {};

function agregarAlCarrito(nombre, precio, imagen, categoria) {
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

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = '👁️';
    }
}

