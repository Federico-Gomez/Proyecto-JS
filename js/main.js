//Funciones
function registrarUsuario() {
    let nombreUsuario = prompt("Ingrese su nombre.");
    let apellidoUsuario = prompt("Ingrese su apellido.");
    let emailUsuario = prompt("Ingrese un correo electrónico.");
    let passwordUsuario = prompt("Ingrese una contraseña.")
    let validarPassword = prompt("Ingrese nuevamente la contraseña.")
    if (passwordUsuario == validarPassword) {
        console.log("Te has registrado con éxito a nuestra plataforma.");
    } else {
        alert("Las contraseñas ingresadas no coinciden.")
    }
}


function iniciarSesion() {
    const emailInicio = prompt("Ingrese su correo electrónico.");
    const passwordInicio = prompt("Ingrese su contraseña.");

    let operacion = prompt("¿Qué operación desea realizar?: 1 - Inscribirme a una Materia, 2 - Inscribirme a un Posgrado, 3 - Consultar Aranceles, 0 - Salir.");

    while (operacion !== "0") {
        switch (operacion) {

            case "1":

                //Usuario quiere inscribirse a una Materia de una Carrera de Grado
                inscripcionMateria();

                break;

            case "2":

                //Usuario quiere inscribirse a un Posgrado
                inscripcionPosgrado()


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

function inscripcionMateria() {
    let operacion = prompt("Indique la Facultad a la que pertenece la Materia en la que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales, 3 - Arquitectura, 0 - Salir.");

    while (operacion !== "0") {
        switch (operacion) {

            case "1":

                //Usuario quiere inscribirse a una Materia de la Facultad de Ciencias Naturales
                prompt("Indique la Materia en la que desea inscribirse: 1 - Biología, 2 - Química, 3 - Física, 4 - Computación, 0 - Salir.");

                alert("Inscripción exitosa.")

                break;

            case "2":

                //Usuario quiere inscribirse a una Materia de la Facultad de Ciencias Sociales
                prompt("Indique la Materia en la que desea inscribirse: 1 - Derecho, 2 - Economía, 3 - Administración de Empresas, 0 - Salir.");

                alert("Inscripción exitosa.")

                break;

            case "3":

                //Usuario quiere inscribirse a una Materia de la Facultad de Arquitectura
                prompt("Indique la Materia en la que desea inscribirse: 1 - Arquitectura, 2 - Diseño Gráfico, 3 - Diseño Industrial, 0 - Salir.");

                alert("Inscripción exitosa.")

                break;

            default:

                alert("Elija una operación válida.");

                break;
        }

        operacion = prompt("Indique la Facultad a la que pertenece la Materia en la que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales 3 - Arquitectura, 0 - Salir.");
    }

}

function inscripcionPosgrado() {
    let operacion = prompt("Indique la Facultad a la que pertenece el Posgrado en el que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales, 3 - Arquitectura, 0 - Salir.");

    while (operacion !== "0") {
        switch (operacion) {

            case "1":

                //Usuario quiere inscribirse a un Posgrado de la Facultad de Ciencias Naturales
                prompt("Indique el Posgrado en el que desea inscribirse: 1 - Seguridad e Higiene, 2 - Desarrollo Ambiental Sustentable, 0 - Salir.");

                alert("Inscripción exitosa.")

                break;

            case "2":

                //Usuario quiere inscribirse a un Posgrado de la Facultad de Ciencias Sociales
                prompt("Indique el Posgrado en el que desea inscribirse: 1 - Comercio Exterior, 2 - Derecho Constitucional, 0 - Salir.");

                alert("Inscripción exitosa.")

                break;

            case "3":

                //Usuario quiere inscribirse a un Posgrado de la Facultad de Arquitectura
                prompt("Indique el Posgrado en el que desea inscribirse: 1 - Seguridad en la Construcción, 2 - Paisajismo, 0 - Salir.");

                alert("Inscripción exitosa.")

                break;

            default:

                alert("Elija una operación válida.");

                break;
        }

        operacion = prompt("Indique la Facultad a la que pertenece el Posgrado en el que desea inscribirse: 1 - Ciencias Naturales, 2 - Ciencias Sociales, 3 - Arquitectura, 0 - Salir.");
    }

}

function iconsultarAranceles() {

}


//Programa
let operacion = prompt("¿Qué operación desea realizar?: 1 - Registrarse, 2 - Iniciar sesión, 0 - Salir.");

while (operacion !== "0") {
    switch (operacion) {

        case "1":

            //Usuario quiere registrarse
            registrarUsuario();

            break;

        case "2":

            //Usuario quiere iniciar sesión en su cuenta
            iniciarSesion()


            break;

        default:

            alert("Elija una operación válida.");

            break;
    }

    operacion = prompt("¿Qué operación desea realizar?: 1 - Registrarse, 2 - Iniciar sesión, 0 - Salir.");

}

alert("¡Gracias por elegirnos!");