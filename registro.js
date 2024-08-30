

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene el envío del formulario al servidor

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const userData = {
            username: username,
            email: email,
            password: password // Nota: En una aplicación real, nunca guardes contraseñas en texto plano
        };

        // Simulamos guardar en un archivo JSON
        const jsonData = JSON.stringify(userData);
        localStorage.setItem('registroUsuario', jsonData);

        alert('Registro exitoso. Datos guardados en localStorage.');
        console.log('Datos guardados:', jsonData);

        // Limpiamos el formulario después del registro exitoso
        form.reset();
        window.location.href= 'tienda.html'
    });
});

function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}