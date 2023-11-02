const inscripcionesPosgrado = JSON.parse(localStorage.getItem("posgrado-en-inscripciones"));

const sin_inscripciones = document.getElementById("sin_inscripciones");
const contenedorInscripcionesPosgrados = document.querySelector("#inscripciones-posgrados");
const inscripcionesPosgradosAcciones = document.querySelector("#inscripciones-posgrados-acciones");
const con_inscripciones = document.getElementById("con_inscripciones");

const arancelPosgrado = document.getElementById("total-posgrado");

const btnVaciarPosgrados = document.querySelector("#btn-posgrados-eliminar");
const btnPagarPosgrados = document.querySelector("#btn-pagar-posgrados");


function renderizarPosgradosInscripciones() {

    if (inscripcionesPosgrado && inscripcionesPosgrado.length > 0) {

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
        inscripcionesPosgradosAcciones.classList.add("disabled");
        con_inscripciones.classList.add("disabled");

    }

    arancelPosgrado.innerHTML = `$ ${inscripcionesPosgrado.reduce((acc, posgrado) => acc + posgrado.arancel, 0)}`;
    actualizarBtnEliminarPosgrado();

}

renderizarPosgradosInscripciones();


function actualizarBtnEliminarPosgrado() {
    const btnEliminarPosgrado = document.querySelectorAll(".inscripcion-posgrados-eliminar");

    btnEliminarPosgrado.forEach(boton => {
        boton.addEventListener("click", eliminarPosgrado);
    });
}


function eliminarPosgrado(e) {
    const idBoton = e.currentTarget.id;
    const index = inscripcionesPosgrado.findIndex(posgrado => posgrado.nombre === idBoton);

    inscripcionesPosgrado.splice(index, 1);
    renderizarPosgradosInscripciones();

    localStorage.setItem("posgrado-en-inscripciones", JSON.stringify(inscripcionesPosgrado));
}

btnVaciarPosgrados.addEventListener("click", vaciarInscripcionesPosgrados);

function vaciarInscripcionesPosgrados() {
    inscripcionesPosgrado.length = 0;
    localStorage.setItem("posgrado-en-inscripciones", JSON.stringify(inscripcionesPosgrado));
    renderizarPosgradosInscripciones();
}

btnPagarPosgrados.addEventListener("click", pagarPosgrados);

function pagarPosgrados() {
    inscripcionesPosgrado.length = 0;
    localStorage.setItem("posgrado-en-inscripciones", JSON.stringify(inscripcionesPosgrado));
        
    sin_inscripciones.classList.add("disabled");
    contenedorInscripcionesPosgrados.classList.add("disabled");
    inscripcionesPosgradosAcciones.classList.add("disabled");
    con_inscripciones.classList.remove("disabled");
}


