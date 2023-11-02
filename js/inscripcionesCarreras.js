const inscripcionesCarrera = JSON.parse(localStorage.getItem("carrera-en-inscripciones"));

const sin_inscripciones = document.getElementById("sin_inscripciones");
const contenedorInscripcionesCarreras = document.querySelector("#inscripciones-carreras");
const inscripcionesCarrerasAcciones = document.querySelector("#inscripciones-carreras-acciones");
const con_inscripciones = document.getElementById("con_inscripciones");

const arancelCarrera = document.getElementById("total-carrera");

const btnVaciarCarreras = document.querySelector("#btn-carreras-eliminar");
const btnPagarCarreras = document.querySelector("#btn-pagar-carreras");


function renderizarCarrerasInscripciones() {

    if (inscripcionesCarrera && inscripcionesCarrera.length > 0) {

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

            contenedorInscripcionesCarreras.append(div);

        });

     } else {
        sin_inscripciones.classList.remove("disabled");
        contenedorInscripcionesCarreras.classList.add("disabled");
        inscripcionesCarrerasAcciones.classList.add("disabled");
        con_inscripciones.classList.add("disabled");

    }

    arancelCarrera.innerHTML = `$ ${inscripcionesCarrera.reduce((acc, carrera) => acc + carrera.arancel, 0)}`;
    actualizarBtnEliminarCarrera();

}

renderizarCarrerasInscripciones();


function actualizarBtnEliminarCarrera() {
    const btnEliminarCarrera = document.querySelectorAll(".inscripcion-carreras-eliminar");

    btnEliminarCarrera.forEach(boton => {
        boton.addEventListener("click", eliminarCarrera);
    });
}


function eliminarCarrera(e) {
    const idBoton = e.currentTarget.id;
    const index = inscripcionesCarrera.findIndex(carrera => carrera.nombre === idBoton);

    inscripcionesCarrera.splice(index, 1);
    renderizarCarrerasInscripciones();

    localStorage.setItem("carrera-en-inscripciones", JSON.stringify(inscripcionesCarrera));
}


btnVaciarCarreras.addEventListener("click", vaciarInscripcionesCarreras);

function vaciarInscripcionesCarreras() {
    inscripcionesCarrera.length = 0;
    localStorage.setItem("carrera-en-inscripciones", JSON.stringify(inscripcionesCarrera));
    renderizarCarrerasInscripciones();
}

btnPagarCarreras.addEventListener("click", pagarCarreras);

function pagarCarreras() {
    inscripcionesCarrera.length = 0;
    localStorage.setItem("carrera-en-inscripciones", JSON.stringify(inscripcionesCarrera));
        
    sin_inscripciones.classList.add("disabled");
    contenedorInscripcionesCarreras.classList.add("disabled");
    inscripcionesCarrerasAcciones.classList.add("disabled");
    con_inscripciones.classList.remove("disabled");
}






