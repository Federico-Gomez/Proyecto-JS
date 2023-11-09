//Objetos

// Constructor para Carreras.

class Carrera {
    constructor(nombre, duracion, materias, id, arancel, imagen) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.materias = materias;
        this.id = id;
        this.arancel = arancel;
        this.imagen = imagen;
    }
}

// Constructor para Posgrados.

class Posgrado {
    constructor(nombre, duracion, materias, id, arancel, imagen) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.materias = materias;
        this.id = id;
        this.arancel = arancel;
        this.imagen = imagen;
    }
}

// ---------------------------------------------------------------------------------------//

// Arrays

// Array de Carreras.

const carreras = [
    new Carrera("Biología", "5 años", 30, "cs_naturales", 2000000, "./img/biblioteca.jpg"),
    new Carrera("Química", "5 años", 32, "cs_naturales", 2000000, "./img/profesores_low.jpg"),
    new Carrera("Física", "5 años", 28, "cs_naturales", 2000000, "./img/prensa_low.jpg"),
    new Carrera("Computación", "5 años", 26, "cs_naturales", 2000000, "./img/convocatorias_low.jpg"),

    new Carrera("Derecho", "5 años", 36, "cs_sociales", 1900000, "./img/convocatorias_low.jpg"),
    new Carrera("Economía", "5 años", 25, "cs_sociales", 1900000, "./img/prensa_low.jpg"),
    new Carrera("Administración de Empresas", "5 años", 26, "cs_sociales", 1900000, "./img/profesores_low.jpg"),
    new Carrera("Administración Actuarial", "5 años", 26, "cs_sociales", 1900000, "./img/biblioteca.jpg"),

    new Carrera("Arquitectura", "5 años", 28, "arquitectura", 1950000, "./img/biblioteca.jpg"),
    new Carrera("Diseño Gráfico", "5 años", 24, "arquitectura", 1950000, "./img/convocatorias_low.jpg"),
    new Carrera("Diseño Industrial", "5 años", 26, "arquitectura", 1950000, "./img/prensa_low.jpg"),
    new Carrera("Diseño de Indumentaria", "5 años", 26, "arquitectura", 1950000, "./img/profesores_low.jpg")
]

// Array de Posgrados.

const posgrados = [
    new Posgrado("Seguridad e Higiene", "1 año", 18, "cs_naturales", 320000, "./img/alumni4.png"),
    new Posgrado("Desarrollo Sustentable", "1 año", 14, "cs_naturales", 300000, "./img/alumni3.png"),

    new Posgrado("Comercio Exterior", "1 año", 15, "cs_sociales", 310000, "./img/alumni4.png"),
    new Posgrado("Derecho Constitucional", "1 año", 16, "cs_sociales", 310000, "./img/alumni3.png"),

    new Posgrado("Seguridad en la Construcción", "1 año", 18, "arquitectura", 340000, "./img/alumni3.png"),
    new Posgrado("Paisajismo", "1 año", 14, "arquitectura", 320000, "./img/alumni4.png")
]

// ---------------------------------------------------------------------------------------//

// Variables para poder llevar a cabo acciones sobre el DOM.

const contenedorCarreras = document.getElementById("contenedor-carreras");
const contenedorPosgrados = document.getElementById("contenedor-posgrados");

const btnFacultad = document.querySelectorAll(".btn-facultad");

const tituloPrincipalCarreras = document.getElementById("titulo-principal-carreras");
const tituloPrincipalPosgrados = document.getElementById("titulo-principal-posgrados");

let btnSeleccionarCarrera = document.querySelectorAll(".carrera-seleccionar");
let btnSeleccionarPosgrado = document.querySelectorAll(".posgrado-seleccionar");

const numeritoCarrera = document.getElementById("numerito-carrera");
const numeritoPosgrado = document.getElementById("numerito-posgrado");

// ---------------------------------------------------------------------------------------//

// Función para agregar al DOM los objetos del Array de Carreras.

function renderizarCarreras(carrerasElegidas) {

    contenedorCarreras.innerHTML = "";

    carrerasElegidas.forEach(carrera => {

        const div = document.createElement("div");
        div.classList.add("carreras");
        div.innerHTML = `
        <img class="carrera-imagen" src="${carrera.imagen}" alt="${carrera.nombre}">
         <div class="carrera-detalles">
            <h3 class="carrera-titulo">${carrera.nombre}</h3>
            <p class="carrera-arancel">${carrera.arancel}</p>
            <button class="carrera-seleccionar" id="${carrera.nombre}">Seleccionar</button>
        </div>
        `;

        contenedorCarreras.append(div);
    })

    actualizarBtnSeleccionarCarrera();
}


// Función para agregar al DOM los objetos del Array de Posgrados.

function renderizarPosgrados(posgradosElegidos) {

    contenedorPosgrados.innerHTML = "";

    posgradosElegidos.forEach(posgrado => {

        const div = document.createElement("div");
        div.classList.add("posgrados");
        div.innerHTML = `
        <img class="posgrado-imagen" src="${posgrado.imagen}" alt="${posgrado.nombre}">
         <div class="posgrado-detalles">
            <h3 class="posgrado-titulo">${posgrado.nombre}</h3>
            <p class="posgrado-arancel">${posgrado.arancel}</p>
            <button class="posgrado-seleccionar" id="${posgrado.nombre}">Seleccionar</button>
        </div>
        `;

        contenedorPosgrados.append(div);
    })

    actualizarBtnSeleccionarPosgrado();
}

renderizarCarreras(carreras);

renderizarPosgrados(posgrados);

// ---------------------------------------------------------------------------------------//

// Función para mostrar solamente carreras y posgrados según la categoría del Aside (Cs. Naturales, Cs. Sociale 
// o Arquitectura) sobre la que el usuario haga click.

btnFacultad.forEach(boton => {

    boton.addEventListener("click", (e) => {

        btnFacultad.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            tituloPrincipalCarreras.innerText = "Carreras";
            tituloPrincipalPosgrados.innerText = "Posgrados";
            const carreraSeleccion = carreras.filter(carrera => carrera.id === e.currentTarget.id);
            const posgradoSeleccion = posgrados.filter(posgrado => posgrado.id === e.currentTarget.id);
            renderizarCarreras(carreraSeleccion);
            renderizarPosgrados(posgradoSeleccion);
        } else {
            tituloPrincipalCarreras.innerText = "Todas las Carreras";
            tituloPrincipalPosgrados.innerText = "Todos los Posgrados";
            renderizarCarreras(carreras);
            renderizarPosgrados(posgrados);
        }

    });
});

// ---------------------------------------------------------------------------------------//

// Función para agregar utilidad a los botones "SELECCIONAR".

function actualizarBtnSeleccionarCarrera() {
    btnSeleccionarCarrera = document.querySelectorAll(".carrera-seleccionar");

    btnSeleccionarCarrera.forEach(boton => {
        boton.addEventListener("click", agregarAInscripcionesCarrera);
    });
}

function actualizarBtnSeleccionarPosgrado() {
    btnSeleccionarPosgrado = document.querySelectorAll(".posgrado-seleccionar");

    btnSeleccionarPosgrado.forEach(boton => {
        boton.addEventListener("click", agregarAInscripcionesPosgrado);
    });
}

// ---------------------------------------------------------------------------------------//

// Arrays de Inscripciones.
// (Si bien no tendría mucho sentido en la gran mayoría de los casos anotarse a más de una Carrera y/o Posgrado, para los fines prácticos de desarrollar el Proyecto Final, por el momento esto funciona como un carrito de compras).

let inscripcionesCarrera;

const inscripcionesCarreraLS = JSON.parse(localStorage.getItem("carrera-en-inscripciones"));

if (inscripcionesCarreraLS) {
    inscripcionesCarrera = inscripcionesCarreraLS;
    actualizarNumeritoCarrera();
} else {
    inscripcionesCarrera = [];
}


let inscripcionesPosgrado;

const inscripcionesPosgradoLS = JSON.parse(localStorage.getItem("posgrado-en-inscripciones"));

if (inscripcionesPosgradoLS) {
    inscripcionesPosgrado = inscripcionesPosgradoLS;
    actualizarNumeritoPosgrado();
} else {
    inscripcionesPosgrado = [];
}


// Función para enviar las Carreras y/o Posgrados seleccionados a la sección de Inscripciones activas en local storage.

function agregarAInscripcionesCarrera (e) {
    const idBoton = e.currentTarget.id;

    const inscripcionCarrera = carreras.find(carrera => carrera.nombre === idBoton);

    if (inscripcionesCarrera.some(carrera => carrera.nombre === idBoton)) {
        alert("Ya te inscribiste a esta Carrera.");
    } else {
        inscripcionesCarrera.push(inscripcionCarrera);
        actualizarNumeritoCarrera();
    }

    localStorage.setItem("carrera-en-inscripciones", JSON.stringify(inscripcionesCarrera));
}

function agregarAInscripcionesPosgrado (e) {
    const idBoton = e.currentTarget.id;

    const inscripcionPosgrado = posgrados.find(posgrado => posgrado.nombre === idBoton);

    if (inscripcionesPosgrado.some(posgrado => posgrado.nombre === idBoton)) {
        alert("Ya te inscribiste a este Posgrado.");
    } else {
        inscripcionesPosgrado.push(inscripcionPosgrado);
        actualizarNumeritoPosgrado();
    }

    localStorage.setItem("posgrado-en-inscripciones", JSON.stringify(inscripcionesPosgrado));
}


// Función para mostrar con un número la cantidad de inscripciones activas que el usuario posee.

function actualizarNumeritoCarrera() {
    let nuevoNumeritoCarrera = inscripcionesCarrera.reduce((acc, carrera) => acc + 1, 0);
    numeritoCarrera.innerText = nuevoNumeritoCarrera;
}

function actualizarNumeritoPosgrado() {
    let nuevoNumeritoPosgrado = inscripcionesPosgrado.reduce((acc, posgrado) => acc + 1, 0);
    numeritoPosgrado.innerText = nuevoNumeritoPosgrado;
}




