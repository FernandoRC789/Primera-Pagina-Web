document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("logueo");

    // Función de redirección y validación
    function redirectToPage() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email && password) {
            if (email === "nick@gmail.com" && password === "123456") {
                window.location.href = "paginasec.html"; // Cambia "paginasec.html" por la ruta del archivo al que deseas redirigir
            } else {
                alert("Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.");
                clearInputs();
            }
        } else {
            alert("Por favor, complete ambos campos.");
            clearInputs();
        }
    }

    // Función para limpiar los campos de entrada
    function clearInputs() {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }

    // Redireccionar al hacer clic en el botón
    button.addEventListener("click", redirectToPage);

    // Redireccionar al presionar Enter
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            redirectToPage();
        }
    });
});
