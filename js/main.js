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

//Usuario logueado

const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

const btnUsuario = document.getElementById("btn-usuario");
btnUsuario.innerText = "Hola " + usuarioLogueado.nombre + "!";

// Función para agregar al DOM los objetos del Array de Carreras.

let carreras = [];
let posgrados = [];

const getCarreras = async () => {
    const response = await fetch("carreras.json");
    const carreras = await response.json();
    console.log(carreras);
    return carreras;
};


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

const getPosgrados = async () => {
    const response = await fetch("posgrados.json");
    const posgrados = await response.json();
    console.log(posgrados);
    return posgrados;
};

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

getCarreras().then(carrerasJson => {
    carreras = carrerasJson;
    renderizarCarreras(carrerasJson);

});

getPosgrados().then(posgradosJson => {
    posgrados = posgradosJson;
    renderizarPosgrados(posgradosJson);

});


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

function agregarAInscripcionesCarrera(e) {
    const idBoton = e.currentTarget.id;

    const inscripcionCarrera = carreras.find(carrera => carrera.nombre === idBoton);

    if (inscripcionesCarrera.some(carrera => carrera.nombre === idBoton)) {
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ya te inscribiste a esta carrera.",

        });
    } else {
        inscripcionesCarrera.push(inscripcionCarrera);
        actualizarNumeritoCarrera();
        Toastify({
            text: "¡Inscripción exitosa!",
            position: "right",
            style: {
                width: "14rem",
                background: "linear-gradient(90deg, rgba(38,143,207,1) 0%, rgba(0,195,167,1) 72%, rgba(167,242,238,1) 100%)",
            }
        }).showToast();
    }

    localStorage.setItem("carrera-en-inscripciones", JSON.stringify(inscripcionesCarrera));
}

function agregarAInscripcionesPosgrado(e) {
    const idBoton = e.currentTarget.id;

    const inscripcionPosgrado = posgrados.find(posgrado => posgrado.nombre === idBoton);

    if (inscripcionesPosgrado.some(posgrado => posgrado.nombre === idBoton)) {
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ya te inscribiste a este posgrado.",

        });
    } else {
        inscripcionesPosgrado.push(inscripcionPosgrado);
        actualizarNumeritoPosgrado();
        Toastify({
            text: "¡Inscripción exitosa!",
            position: "right",
            style: {
                width: "14rem",
                background: "linear-gradient(90deg, rgba(38,143,207,1) 0%, rgba(0,195,167,1) 72%, rgba(167,242,238,1) 100%)",
            }
        }).showToast();
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

if (localStorage.getItem("mostrarMensajeExito") === "si") {
    Toastify({
        text: "¡Login exitoso!",
        position: "right",
        style: {
            width: "14rem",
            background: "linear-gradient(90deg, rgba(38,143,207,1) 0%, rgba(0,195,167,1) 72%, rgba(167,242,238,1) 100%)",
        }
    }).showToast();

    localStorage.setItem("mostrarMensajeExito", "no");
}


