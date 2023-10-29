//Objetos

//Constructor para Carreras
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

//Constructor para Posgrados
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

//Arrays

//Array de Carreras
const carreras = [
    new Carrera("Biología", "5 años", 30, "cs_naturales", "$2000000", "./img/Inicio.png"),
    new Carrera("Química", "5 años", 32, "cs_naturales", "$2000000"),
    new Carrera("Física", "5 años", 28, "cs_naturales", "$2000000"),
    new Carrera("Computación", "5 años", 26, "cs_naturales", "$2000000"),

    new Carrera("Derecho", "5 años", 36, "cs_sociales", 1800000),
    new Carrera("Economía", "5 años", 25, "cs_sociales", 1800000),
    new Carrera("Administración de Empresas", "5 años", 26, "cs_sociales", 1800000),
    new Carrera("Administración Actuarial", "5 años", 26, "cs_sociales", 1800000),

    new Carrera("Arquitectura", "5 años", 28, "arquitectura", 1900000),
    new Carrera("Diseño Gráfico", "5 años", 24, "arquitectura", 1900000),
    new Carrera("Diseño Industrial", "5 años", 26, "arquitectura", 1900000),
    new Carrera("Diseño de Indumentaria", "5 años", 26, "arquitectura", 1900000),
]

//Array de Posgrados
const posgrados = [
    new Posgrado("Seguridad e Higiene", "1 año", 18, "cs_naturales", 200000),
    new Posgrado("Desarrollo Sustentable", "1 año", 14, "cs_naturales", 200000),

    new Posgrado("Comercio Exterior", "1 año", 15, "cs_sociales", 180000),
    new Posgrado("Derecho Constitucional", "1 año", 16, "cs_sociales", 180000),

    new Posgrado("Seguridad en la Construcción", "1 año", 18, "arquitectura", 240000),
    new Posgrado("Paisajismo", "1 año", 14, "arquitectura", 240000),
]

const contenedorCarreras = document.getElementById("contenedor-carreras");

const contenedorPosgrados = document.getElementById("contenedor-posgrados");

const btnFacultad = document.querySelectorAll(".btn-facultad");


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
            <button class="carrera-ingresar" id=${carrera}>Ingresar</button>
        </div>
        `
        contenedorCarreras.append(div);
    })
}


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
            <button class="posgrado-ingresar" id=${posgrado}>Ingresar</button>
        </div>
        `;

        contenedorPosgrados.append(div);
    })
}

renderizarCarreras(carreras);

renderizarPosgrados(posgrados);


btnFacultad.forEach(boton => {

    boton.addEventListener("click", (e) => {

        btnFacultad.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const carreraSeleccion = carreras.filter(carrera => carrera.id === e.currentTarget.id);
            const posgradoSeleccion = posgrados.filter(posgrado => posgrado.id === e.currentTarget.id);
            renderizarCarreras(carreraSeleccion);
            renderizarPosgrados(posgradoSeleccion);
        } else {
            renderizarCarreras(carreras);
            renderizarPosgrados(posgrados);
        }

    })
})
