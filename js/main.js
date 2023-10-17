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

                arancel += 1200000;

                alert("Inscripción exitosa.");

                break;

            case "3":

                //Usuario quiere inscribirse a una Carrera de la Facultad de Arquitectura
                prompt("Indique la Carrera en la que desea inscribirse: 1 - Arquitectura, 2 - Diseño Gráfico, 3 - Diseño Industrial, 0 - Salir.");

                arancel += 1600000;

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


//Objetos

class Carrera {
    constructor(nombre, duracion, materias, facultad, arancel) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.materias = materias;
        this.facultad = facultad;
        this.arancel = arancel;
    }
}

class Posgrado {
    constructor(nombre, duracion, materias, facultad, arancel) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.materias = materias;
        this.facultad = facultad;
        this.arancel = arancel;
    }
}

const biologia = new Carrera ("Biología", 5, 30, "Ciencias Naturales");
const quimica = new Carrera ("Química", 5, 32, "Ciencias Naturales");
const fisica = new Carrera ("Física", 5, 28, "Ciencias Naturales");
const computacion = new Carrera ("Computación", 5, 26, "Ciencias Naturales");

const derecho = new Carrera ("Derecho", 5, 36, "Ciencias Sociales");
const economia = new Carrera ("Economía", 5, 25, "Ciencias Sociales");
const administracion = new Carrera ("Administración de Empresas", 5, 26, "Ciencias Sociales");

const arquitectura = new Carrera ("Arquitectura", 5, 28, "Arquitectura");
const diseGraf = new Carrera ("Diseño Gráfico", 5, 24, "Arquitectura");
const diseInd = new Carrera ("Diseño Industrial", 5, 26, "Arquitectura");

const seh = new Posgrado ("Seguridad e Higiene", 1, 18, "Ciencias Naturales");
const das = new Posgrado ("Desarrollo Ambiental Sustentable", 1, 14, "Ciencias Naturales");

const comext = new Posgrado ("Comercio Exterior", 1, 15, "Ciencias Sociales");
const derconst = new Posgrado ("Derecho Constitucional", 1, 16, "Ciencias Sociales");

const segconst = new Posgrado ("Seguridad en la Construcción", 1, 18, "Arquitectura");
const paisajismo = new Posgrado ("Paisajismo", 1, 14, "Arquitectura");


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