"use strict"
// function validar() {
//     alert("Bienvenido al sistema");
// }

// function loadPage() {
//     Swal.fire({
//         title: "Bienvenido",
//         text: "A mi sitio web",
//         icon: "success",
//         showConfirmButton: false,
//         timer: 2000
//     });
// }

const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

// Logica del Show pass
togglePassword.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
});

function validar() {
    let password = document.getElementById("password").value;
    let lowercase = /[a-z]/.test(password);
    let uppercase = /[A-Z]/.test(password);
    let number = /\d/.test(password)
    let specialchar = /[\W_]/.test(password)
    if (password.length < 8) {
        Swal.fire(
            "Error",
            "La constraseña debe tener al menos 8 caracteres", "error"
        )
        return
    }
    if (specialchar & lowercase & uppercase & number) {
        Swal.fire(
            "Correcto",
            "La contraseña cumple con las condiciones",
            "success"
        )
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Contraseña invalida",
            html: `
                        <ul style="justify-self: center">
                            <li style="text-align: left">${number ? "✅" : "❌"}Al menos un caracter especial</li>
                            <li style="text-align: start">${lowercase ? "✅" : "❌"}Al menos una minuscula</li>
                            <li style="text-align: start">${uppercase ? "✅" : "❌"}Al menos una Mayúscula</li>
                            <li style="text-align: start">${number ? "✅" : "❌"}Al menos un número</li>
                        </ul>
                        `
        })
    }
}
