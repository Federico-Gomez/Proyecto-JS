//Funciones

// function registrarUsuario() {
//     let nombreUsuario = prompt("Ingrese su nombre.");
//     let apellidoUsuario = prompt("Ingrese su apellido.");
//     let emailUsuarioRegistro = prompt("Ingrese un correo electrónico.");
//     let passwordUsuarioRegistro = prompt("Ingrese una contraseña.");
//     let validarPassword = prompt("Ingrese nuevamente la contraseña.");
//     if (passwordUsuarioRegistro === validarPassword) {
//         alert("Te has registrado con éxito a nuestra plataforma.");
//         console.log("Te has registrado con éxito a nuestra plataforma.");
//     } else {
//         alert("Las contraseñas ingresadas no coinciden.");
//     }
// }


// function iniciarSesion() {
//     let emailUsuario = prompt("Ingrese su correo electrónico.");
//     let passwordUsuario = prompt("Ingrese su contraseña.");

//     let operacion = prompt("¿Qué operación desea realizar?: 1 - Inscribirme a una Carrera, 2 - Inscribirme a un Posgrado, 3 - Consultar Aranceles, 0 - Salir.");

//     while (operacion !== "0") {
//         switch (operacion) {

//             case "1":

//                 //Usuario quiere inscribirse a una Materia de una Carrera de Grado
//                 inscripcionACarrera();

//                 break;

//             case "2":

//                 //Usuario quiere inscribirse a un Posgrado
//                 inscripcionAPosgrado()


//                 break;


//             case "3":

//                 //Usuario quiere consultar aranceles.
//                 consultarAranceles()


//                 break;

//             default:

//                 alert("Elija una operación válida.");

//                 break;
//         }

//         operacion = prompt("¿Qué operación desea realizar?: 1 - Inscribirme a una Materia, 2 - Inscribirme a un Posgrado, 3 - Consultar Aranceles, 0 - Salir.");
//     }
// }

// function inscripcionACarrera() {
//     let inscripcionCarrera = prompt("Indique la Facultad a la que pertenece la Carrera en la que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales, 3 - Arquitectura, 0 - Salir.");

//     while (inscripcionCarrera !== "0") {
//         switch (inscripcionCarrera) {

//             case "1":

//                 //Usuario quiere inscribirse a una Carrera de la Facultad de Ciencias Naturales
//                 prompt("Indique la Carrera en la que desea inscribirse: 1 - Biología, 2 - Química, 3 - Física, 4 - Computación, 0 - Salir.");

//                 arancel += 2000000;

//                 alert("Inscripción exitosa.");

//                 break;

//             case "2":

//                 //Usuario quiere inscribirse a una Carrera de la Facultad de Ciencias Sociales
//                 prompt("Indique la Carrera en la que desea inscribirse: 1 - Derecho, 2 - Economía, 3 - Administración de Empresas, 0 - Salir.");

//                 arancel += 1800000;

//                 alert("Inscripción exitosa.");

//                 break;

//             case "3":

//                 //Usuario quiere inscribirse a una Carrera de la Facultad de Arquitectura
//                 prompt("Indique la Carrera en la que desea inscribirse: 1 - Arquitectura, 2 - Diseño Gráfico, 3 - Diseño Industrial, 0 - Salir.");

//                 arancel += 1900000;

//                 alert("Inscripción exitosa.");

//                 break;

//             default:

//                 alert("Elija una operación válida.");

//                 break;
//         }

//         inscripcionCarrera = prompt("Indique la Facultad a la que pertenece la Carrera en la que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales 3 - Arquitectura, 0 - Salir.");
//     }

// }

// function inscripcionAPosgrado() {
//     let inscripcionPosgrado = prompt("Indique la Facultad a la que pertenece el Posgrado en el que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales, 3 - Arquitectura, 0 - Salir.");

//     while (inscripcionPosgrado !== "0") {
//         switch (inscripcionPosgrado) {

//             case "1":

//                 //Usuario quiere inscribirse a un Posgrado de la Facultad de Ciencias Naturales
//                 prompt("Indique el Posgrado en el que desea inscribirse: 1 - Seguridad e Higiene, 2 - Desarrollo Ambiental Sustentable, 0 - Salir.");

//                 arancel += 200000;

//                 alert("Inscripción exitosa.");

//                 break;

//             case "2":

//                 //Usuario quiere inscribirse a un Posgrado de la Facultad de Ciencias Sociales
//                 prompt("Indique el Posgrado en el que desea inscribirse: 1 - Comercio Exterior, 2 - Derecho Constitucional, 0 - Salir.");

//                 arancel += 180000;

//                 alert("Inscripción exitosa.");

//                 break;

//             case "3":

//                 //Usuario quiere inscribirse a un Posgrado de la Facultad de Arquitectura
//                 prompt("Indique el Posgrado en el que desea inscribirse: 1 - Seguridad en la Construcción, 2 - Paisajismo, 0 - Salir.");

//                 arancel += 240000;

//                 alert("Inscripción exitosa.");

//                 break;

//             default:

//                 alert("Elija una operación válida.");

//                 break;
//         }

//         inscripcionPosgrado = prompt("Indique la Facultad a la que pertenece el Posgrado en el que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales, 3 - Arquitectura, 0 - Salir.");
//     }

// }

// function consultarAranceles() {
//     alert("El arancel es: $" + arancel);
// }

const container = document.getElementById("container")
const registrarseBtn = document.getElementById("registrarseBtn");
const iniciarSesionBtn = document.getElementById("iniciarSesionBtn");
const submitBtn_1 = document.getElementById("submitBtn_1");
const submitBtn_2 = document.getElementById("submitBtn_2");
const nombreField = document.getElementById("nombreField");
const apellidoField = document.getElementById("apellidoField");
const emailField = document.getElementById("emailField");
const passwordField_1 = document.getElementById("passwordField_1");
const passwordField_2 = document.getElementById("passwordField_2");
const title = document.getElementById("title");
const btnDLMode = document.getElementById("btn-DL-mode");



//Función para alternar entre Registrarse en caso de nuevos usuarios e Iniciar Sesión para usuarios ya registrados.
submitBtn_1.classList.remove("disabled");

iniciarSesionBtn.onclick = function () {
    nombreField.style.maxHeight = 0;
    apellidoField.style.maxHeight = 0;
    title.innerHTML = "Iniciar Sesión";
    registrarseBtn.classList.add("disabled");
    iniciarSesionBtn.classList.remove("disabled");
    submitBtn_1.classList.add("disabled");
    submitBtn_2.classList.remove("disabled");

}

registrarseBtn.onclick = function () {
    nombreField.style.maxHeight = "60px";
    apellidoField.style.maxHeight = "60px";
    title.innerHTML = "Registrarse";
    registrarseBtn.classList.remove("disabled");
    iniciarSesionBtn.classList.add("disabled");
    submitBtn_1.classList.remove("disabled");
    submitBtn_2.classList.add("disabled");

}


// Funciones para un dark/light theme toggle.

function darkMode() {
    title.style.color = "black";
    submitBtn_1.style.backgroundColor = "black";
    submitBtn_2.style.backgroundColor = "black";
    btnDLMode.innerHTML = `
    Light Mode
    <i class="bi bi-sun-fill"></i>
    `;


    container.style.backgroundImage = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(17,17,17,1) 72%, rgba(63,63,63,1) 100%), url(Inicio.png)";

    localStorage.setItem("theme", "dark");

}

function lightMode() {
    title.style.color = "#3c00a0";
    submitBtn_1.style.backgroundColor = "rgb(39, 126, 192)";
    submitBtn_2.style.backgroundColor = "rgb(39, 126, 192)";
    btnDLMode.innerHTML = `
    Dark Mode
    <i class="bi bi-moon-fill"></i>
    `;

    container.style.backgroundImage = "linear-gradient(rgba(7, 7, 51, 0.8), rgba(133, 133, 168, 0.8)), url(Inicio.png)";

    localStorage.setItem("theme", "light");

}

btnDLMode.addEventListener("click", () => {
    if (localStorage.getItem("theme") == "dark") {
        lightMode();
    } else {
        darkMode();
    }
})

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") == "dark") {
        darkMode();
    } else {
        lightMode();
    }
})


// Registro de nuevo usuario enviando los datos a local storage.


submitBtn_1.addEventListener("click", (e) => {

    const nombreUsuario = document.getElementById('nombre').value;
    const apellidoUsuario = document.getElementById("apellido").value;
    const emailUsuario = document.getElementById("email").value;
    const passwordUsuario_1 = document.getElementById("password_1").value;
    const passwordUsuario_2 = document.getElementById("password_2").value;

    let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioYaRegistrado = usuariosRegistrados.find(usuario => usuario.email === emailUsuario);

    if (usuarioYaRegistrado) {

        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El email ingresado corresponde a un usuario registrado.",

        });

    } else {

        usuariosRegistrados.push({ nombre: nombreUsuario, apellido: apellidoUsuario, email: emailUsuario, password_1: passwordUsuario_1, password_2: passwordUsuario_2 });
        localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

        Swal.fire("¡Te registraste con éxito!");

        nombreField.style.maxHeight = 0;
        apellidoField.style.maxHeight = 0;
        title.innerHTML = "Iniciar Sesión";
        registrarseBtn.classList.add("disabled");
        iniciarSesionBtn.classList.remove("disabled");
        submitBtn_1.classList.add("disabled");
        submitBtn_2.classList.remove("disabled");
    };

    console.log(usuariosRegistrados);

})


// Inicio de sesión con un usuario ya registrado.

submitBtn_2.addEventListener("click", (e) => {


    const emailUsuario = document.getElementById("email").value;
    const passwordUsuario_1 = document.getElementById("password_1").value;
    const passwordUsuario_2 = document.getElementById("password_2").value;

    if (JSON.parse(localStorage.getItem("usuarios")).some(usuario => usuario.email === emailUsuario && usuario.password_1 === passwordUsuario_1 && usuario.password_2 === passwordUsuario_2)) {

        Swal.fire("¡Login exitoso! ¡Bienvenido!");

    } else {

        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El email o la contraseña son incorrectos.",

        });
    }
});







//Programa
// let arancel = 0;
// let operacion = prompt("¿Qué operación desea realizar?: 1 - Registrarse, 2 - Iniciar sesión, 0 - Salir.");

// while (operacion !== "0") {
//     switch (operacion) {

//         case "1":

//             //Usuario quiere registrarse
//             registrarUsuario();

//             break;

//         case "2":

//             //Usuario quiere iniciar sesión en su cuenta
//             iniciarSesion();


//             break;

//         default:

//             alert("Elija una operación válida.");

//             break;
//     }

//     operacion = prompt("¿Qué operación desea realizar?: 1 - Registrarse, 2 - Iniciar sesión, 0 - Salir.");

// }

// alert("¡Gracias por elegirnos!");