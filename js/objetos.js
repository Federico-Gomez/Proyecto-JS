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

