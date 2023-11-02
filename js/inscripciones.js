const inscripcionesCarrera = JSON.parse(localStorage.getItem("carrera-en-inscripciones"));

const inscripcionesPosgrado = JSON.parse(localStorage.getItem("posgrado-en-inscripciones"));

const sin_inscripciones = document.getElementById("sin_inscripciones");
const contenedorInscripcionesCarreras = document.getElementById("inscripciones-carreras");
const contenedorInscripcionesPosgrados = document.getElementById("inscripciones-posgrados");
const inscripcionesCarrerasAcciones = document.getElementById("inscripciones-carreras-acciones");
const inscripcionesPosgradosAcciones = document.getElementById("inscripciones-posgrados-acciones");
const con_inscripciones = document.getElementById("con_inscripciones");

const arancelCarrera = document.getElementById("total-carrera");
const arancelPosgrado = document.getElementById("total-posgrado");

let btnEliminarCarrera = document.querySelectorAll(".inscripcion-carreras-eliminar");
let btnEliminarPosgrado = document.querySelectorAll(".inscripcion-posgrados-eliminar");


function renderizarCarrerasInscripciones() {

    if (inscripcionesCarrera) {

        sin_inscripciones.classList.add("disabled");
        contenedorInscripcionesCarreras.classList.remove("disabled");
        inscripcionesCarrerasAcciones.classList.remove("disabled");
        con_inscripciones.classList.add("disabled");

        contenedorInscripcionesCarreras.innerHTML = "";

        inscripcionesCarrera.forEach(carrera => {
            const div = document.createElement("div");
            div.classList.add("inscripcion-carreras");
            div.innerHTML = `
        <img class="inscripcion-carreras-imagen" src="${carrera.imagen}" alt="${carrera.nombre}">
        
        <div class="inscripcion-carreras-titulo">
            <small>Carrera</small>
            <h3>${carrera.nombre}</h3>
        </div>

        <div class="inscripcion-carreras-arancel">
            <small>Arancel</small>
            <p>${carrera.arancel}</p>
        </div>

        <button class="inscripcion-carreras-eliminar" id="${carrera.nombre}"><i class="bi bi-trash-fill"></i></button>
        `;

            contenedorInscripcionesCarreras.append(div)
        });


    } else {
        sin_inscripciones.classList.remove("disabled");
        contenedorInscripcionesCarreras.classList.add("disabled");
        inscripcionesCarrerasAcciones.innerHTML = "";
        con_inscripciones.classList.add("disabled");
    }

    arancelCarrera.innerHTML = `$ ${inscripcionesCarrera.reduce((acc, carrera) => acc + carrera.arancel, 0)}`;
    actualizarBtnEliminarCarrera();
}


function renderizarPosgradosInscripciones() {

    if (inscripcionesPosgrado) {
        sin_inscripciones.classList.add("disabled");
        contenedorInscripcionesPosgrados.classList.remove("disabled");
        inscripcionesPosgradosAcciones.classList.remove("disabled");
        con_inscripciones.classList.add("disabled");

        contenedorInscripcionesPosgrados.innerHTML = "";


        inscripcionesPosgrado.forEach(posgrado => {
            const div = document.createElement("div");
            div.classList.add("inscripcion-posgrados");
            div.innerHTML = `
        <img class="inscripcion-posgrados-imagen" src="${posgrado.imagen}" alt="${posgrado.nombre}">
        
        <div class="inscripcion-posgrados-titulo">
            <small>Posgrado</small>
            <h3>${posgrado.nombre}</h3>
        </div>

        <div class="inscripcion-posgrados-arancel">
            <small>Arancel</small>
           <p>${posgrado.arancel}</p>
        </div>

        <button class="inscripcion-posgrados-eliminar" id="${posgrado.nombre}"><i class="bi bi-trash-fill"></i></button>
         `;

            contenedorInscripcionesPosgrados.append(div);

        });


    } else {
        sin_inscripciones.classList.remove("disabled");
        contenedorInscripcionesPosgrados.classList.add("disabled");
        inscripcionesPosgradosAcciones.innerHTML = "";
        con_inscripciones.classList.add("disabled");
    }

    arancelPosgrado.innerHTML = `$ ${inscripcionesPosgrado.reduce((acc, posgrado) => acc + posgrado.arancel, 0)}`;
    actualizarBtnEliminarPosgrado();
}

renderizarCarrerasInscripciones();
renderizarPosgradosInscripciones();

function actualizarBtnEliminarCarrera() {
    btnEliminarCarrera = document.querySelectorAll(".inscripcion-carreras-eliminar");

    btnEliminarCarrera.forEach(boton => {
        boton.addEventListener("click", eliminarCarrera);
    });
}

function actualizarBtnEliminarPosgrado() {
    btnEliminarPosgrado = document.querySelectorAll(".inscripcion-posgrados-eliminar");

    btnEliminarPosgrado.forEach(boton => {
        boton.addEventListener("click", eliminarPosgrado);
    });
}

function eliminarCarrera(e) {
    const idBoton = e.currentTarget.id;
    const index = inscripcionesCarrera.findIndex(carrera => carrera.nombre === idBoton);
    
    inscripcionesCarrera.splice(index, 1);
    renderizarCarrerasInscripciones();
    
    localStorage.setItem("carrera-en-inscripciones", JSON.stringify(inscripcionesCarrera));
}

function eliminarPosgrado(e) {
    const idBoton = e.currentTarget.id;
    const index = inscripcionesPosgrado.findIndex(posgrado => posgrado.nombre === idBoton);
    
    inscripcionesPosgrado.splice(index, 1);
    renderizarPosgradosInscripciones();

    localStorage.setItem("posgrado-en-inscripciones", JSON.stringify(inscripcionesPosgrado));
}