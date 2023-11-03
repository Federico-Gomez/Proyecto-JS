//Funciones

function registrarUsuario() {
    let nombreUsuario = prompt("Ingrese su nombre.");
    let apellidoUsuario = prompt("Ingrese su apellido.");
    let emailUsuarioRegistro = prompt("Ingrese un correo electrónico.");
    let passwordUsuarioRegistro = prompt("Ingrese una contraseña.");
    let validarPassword = prompt("Ingrese nuevamente la contraseña.");
    if (passwordUsuarioRegistro === validarPassword) {
        alert("Te has registrado con éxito a nuestra plataforma.");
        console.log("Te has registrado con éxito a nuestra plataforma.");
    } else {
        alert("Las contraseñas ingresadas no coinciden.");
    }
}


function iniciarSesion() {
    let emailUsuario = prompt("Ingrese su correo electrónico.");
    let passwordUsuario = prompt("Ingrese su contraseña.");

    let operacion = prompt("¿Qué operación desea realizar?: 1 - Inscribirme a una Carrera, 2 - Inscribirme a un Posgrado, 3 - Consultar Aranceles, 0 - Salir.");

    while (operacion !== "0") {
        switch (operacion) {

            case "1":

                //Usuario quiere inscribirse a una Materia de una Carrera de Grado
                inscripcionACarrera();

                break;

            case "2":

                //Usuario quiere inscribirse a un Posgrado
                inscripcionAPosgrado()


                break;


            case "3":

                //Usuario quiere consultar aranceles.
                consultarAranceles()


                break;

            default:

                alert("Elija una operación válida.");

                break;
        }

        operacion = prompt("¿Qué operación desea realizar?: 1 - Inscribirme a una Materia, 2 - Inscribirme a un Posgrado, 3 - Consultar Aranceles, 0 - Salir.");
    }
}

function inscripcionACarrera() {
    let inscripcionCarrera = prompt("Indique la Facultad a la que pertenece la Carrera en la que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales, 3 - Arquitectura, 0 - Salir.");

    while (inscripcionCarrera !== "0") {
        switch (inscripcionCarrera) {

            case "1":

                //Usuario quiere inscribirse a una Carrera de la Facultad de Ciencias Naturales
                prompt("Indique la Carrera en la que desea inscribirse: 1 - Biología, 2 - Química, 3 - Física, 4 - Computación, 0 - Salir.");

                arancel += 2000000;

                alert("Inscripción exitosa.");

                break;

            case "2":

                //Usuario quiere inscribirse a una Carrera de la Facultad de Ciencias Sociales
                prompt("Indique la Carrera en la que desea inscribirse: 1 - Derecho, 2 - Economía, 3 - Administración de Empresas, 0 - Salir.");

                arancel += 1800000;

                alert("Inscripción exitosa.");

                break;

            case "3":

                //Usuario quiere inscribirse a una Carrera de la Facultad de Arquitectura
                prompt("Indique la Carrera en la que desea inscribirse: 1 - Arquitectura, 2 - Diseño Gráfico, 3 - Diseño Industrial, 0 - Salir.");

                arancel += 1900000;

                alert("Inscripción exitosa.");

                break;

            default:

                alert("Elija una operación válida.");

                break;
        }

        inscripcionCarrera = prompt("Indique la Facultad a la que pertenece la Carrera en la que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales 3 - Arquitectura, 0 - Salir.");
    }

}

function inscripcionAPosgrado() {
    let inscripcionPosgrado = prompt("Indique la Facultad a la que pertenece el Posgrado en el que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales, 3 - Arquitectura, 0 - Salir.");

    while (inscripcionPosgrado !== "0") {
        switch (inscripcionPosgrado) {

            case "1":

                //Usuario quiere inscribirse a un Posgrado de la Facultad de Ciencias Naturales
                prompt("Indique el Posgrado en el que desea inscribirse: 1 - Seguridad e Higiene, 2 - Desarrollo Ambiental Sustentable, 0 - Salir.");

                arancel += 200000;

                alert("Inscripción exitosa.");

                break;

            case "2":

                //Usuario quiere inscribirse a un Posgrado de la Facultad de Ciencias Sociales
                prompt("Indique el Posgrado en el que desea inscribirse: 1 - Comercio Exterior, 2 - Derecho Constitucional, 0 - Salir.");

                arancel += 180000;

                alert("Inscripción exitosa.");

                break;

            case "3":

                //Usuario quiere inscribirse a un Posgrado de la Facultad de Arquitectura
                prompt("Indique el Posgrado en el que desea inscribirse: 1 - Seguridad en la Construcción, 2 - Paisajismo, 0 - Salir.");

                arancel += 240000;

                alert("Inscripción exitosa.");

                break;

            default:

                alert("Elija una operación válida.");

                break;
        }

        inscripcionPosgrado = prompt("Indique la Facultad a la que pertenece el Posgrado en el que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales, 3 - Arquitectura, 0 - Salir.");
    }

}

function consultarAranceles() {
    alert("El arancel es: $" + arancel);
}

let container = document.getElementById("container")
let registrarseBtn = document.getElementById("registrarseBtn");
let iniciarSesionBtn = document.getElementById("iniciarSesionBtn");
let nombreField = document.getElementById("nombreField");
let apellidoField = document.getElementById("apellidoField");
let title = document.getElementById("title");
let btnDLMode = document.getElementById("btn-DL-mode");


//Función para alternar entre Registrarse en caso de nuevos usuarios e Iniciar Sesión para usuarios ya registrados.

iniciarSesionBtn.onclick = function() {
    nombreField.style.maxHeight = 0;
    apellidoField.style.maxHeight = 0;
    title.innerHTML = "Iniciar Sesión";
    registrarseBtn.classList.add("disabled");
    iniciarSesionBtn.classList.remove("disabled");
}

registrarseBtn.onclick = function() {
    nombreField.style.maxHeight = "60px";
    apellidoField.style.maxHeight = "60px";
    title.innerHTML = "Registrarse";
    registrarseBtn.classList.remove("disabled");
    iniciarSesionBtn.classList.add("disabled");
}


// Función para un dark/light theme toggle.

function darkMode() {
     title.style.color = "black";
     btnDLMode.innerHTML = `
    Light Mode
    <i class="bi bi-sun-fill"></i>
    `;
    
    iniciarSesionBtn.onclick = function() {
        nombreField.style.maxHeight = 0;
        apellidoField.style.maxHeight = 0;
        title.innerHTML = "Iniciar Sesión";
        registrarseBtn.classList.add("disabled");
        iniciarSesionBtn.classList.remove("disabled");
    }
    
    registrarseBtn.onclick = function() {
        nombreField.style.maxHeight = "60px";
        apellidoField.style.maxHeight = "60px";
        title.innerHTML = "Registrarse";
        registrarseBtn.classList.remove("disabled");
        iniciarSesionBtn.classList.add("disabled");
    }
    container.style.backgroundImage = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(17,17,17,1) 72%, rgba(63,63,63,1) 100%), url(Inicio.png)";

    localStorage.setItem("theme", "dark");

}

function lightMode() {
    title.style.color = "#3c00a0";
    btnDLMode.innerHTML = `
    Dark Mode
    <i class="bi bi-moon-fill"></i>
    `;
    
    iniciarSesionBtn.onclick = function() {
        nombreField.style.maxHeight = 0;
        apellidoField.style.maxHeight = 0;
        title.innerHTML = "Iniciar Sesión";
        registrarseBtn.classList.add("disabled");
        iniciarSesionBtn.classList.remove("disabled");
    }
    
    registrarseBtn.onclick = function() {
        nombreField.style.maxHeight = "60px";
        apellidoField.style.maxHeight = "60px";
        title.innerHTML = "Registrarse";
        registrarseBtn.classList.remove("disabled");
        iniciarSesionBtn.classList.add("disabled");
    }
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

//Programa
let arancel = 0;
let operacion = prompt("¿Qué operación desea realizar?: 1 - Registrarse, 2 - Iniciar sesión, 0 - Salir.");

while (operacion !== "0") {
    switch (operacion) {

        case "1":

            //Usuario quiere registrarse
            registrarUsuario();

            break;

        case "2":

            //Usuario quiere iniciar sesión en su cuenta
            iniciarSesion();


            break;

        default:

            alert("Elija una operación válida.");

            break;
    }

    operacion = prompt("¿Qué operación desea realizar?: 1 - Registrarse, 2 - Iniciar sesión, 0 - Salir.");

}

alert("¡Gracias por elegirnos!");