document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Obtener los datos del usuario registrado
        const storedUserData = localStorage.getItem('registroUsuario');
        
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            if (username === userData.username && password === userData.password) {
                // Guardar el estado de la sesión
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('username', username);

                // Ocultar el formulario de inicio de sesión
                document.querySelector('.login-container').style.display = 'none';

                // Mostrar mensaje de compra exitosa
                showPurchaseMessage(username);
            } else {
                alert('Nombre de usuario o contraseña incorrectos');
            }
        } else {
            alert('No hay usuarios registrados');
        }
    });

    // Verificar si el usuario ya ha iniciado sesión
    if (sessionStorage.getItem('loggedIn') === 'true') {
        document.querySelector('.login-container').style.display = 'none';
        showPurchaseMessage(sessionStorage.getItem('username'));
    }
});

function showPurchaseMessage(username) {
    // Crear un nuevo contenedor para el mensaje
    const messageContainer = document.createElement('div');
    messageContainer.className = 'purchase-message';
    messageContainer.innerHTML = `
        <h2>¡Bienvenido, ${username}!</h2>
        <p>Tu compra ha sido exitosa.</p>
        <p>¡Gracias por confiar en nuestra Poké Tienda!</p>
        <button onclick="cerrarSesion()">Cerrar Sesión</button>
    `;

    // Añadir el contenedor al body
    document.body.appendChild(messageContainer);
}

function cerrarSesion() {
    // Limpiar la información de la sesión
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('username');

    // Redirigir a la página de la tienda
    window.location.href = 'tienda.html';  // Asegúrate de que esta sea la ruta correcta a tu página de la tienda
}

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




//if (username === userData.username && password === userData.password) {
  //  alert('¡Inicio de sesión exitoso! Bienvenido, ' + username);
    // Aquí puedes redirigir al usuario a su página de perfil o dashboard
    // window.location.href = 'dashboard.html';
//} else {
   // alert('Nombre de usuario o contraseña incorrectos');
//}
//} else {
//alert('No hay usuarios registrados');
//}