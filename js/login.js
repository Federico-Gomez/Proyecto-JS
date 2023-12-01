
const container = document.getElementById("container")
const registrarseBtn = document.getElementById("registrarseBtn");
const iniciarSesionBtn = document.getElementById("iniciarSesionBtn");
const submitBtn_1 = document.getElementById("submitBtn_1");
const submitBtn_2 = document.getElementById("submitBtn_2");
const nombreField = document.getElementById("nombreField");
const apellidoField = document.getElementById("apellidoField");
const emailField = document.getElementById("emailField");
const passwordField_1 = document.getElementById("passwordField_1");
const passwordField_2 = document.getElementById("passwordField_2");
const title = document.getElementById("title");
const btnDLMode = document.getElementById("btn-DL-mode");


//Funciones

//Función para alternar entre Registrarse en caso de nuevos usuarios e Iniciar Sesión para usuarios ya registrados.
submitBtn_1.classList.remove("disabled");

iniciarSesionBtn.onclick = function () {
    nombreField.style.maxHeight = 0;
    apellidoField.style.maxHeight = 0;
    title.innerHTML = "Iniciar Sesión";
    registrarseBtn.classList.add("disabled");
    iniciarSesionBtn.classList.remove("disabled");
    submitBtn_1.classList.add("disabled");
    submitBtn_2.classList.remove("disabled");
    passwordField_2.style.display = "none";
    

}

registrarseBtn.onclick = function () {
    nombreField.style.maxHeight = "60px";
    apellidoField.style.maxHeight = "60px";
    title.innerHTML = "Registrarse";
    registrarseBtn.classList.remove("disabled");
    iniciarSesionBtn.classList.add("disabled");
    submitBtn_1.classList.remove("disabled");
    submitBtn_2.classList.add("disabled");
    passwordField_2.style.display = "flex";

}


// Funciones para un dark/light theme toggle.

function darkMode() {
    title.style.color = "black";
    submitBtn_1.style.backgroundColor = "black";
    submitBtn_2.style.backgroundColor = "black";
    btnDLMode.innerHTML = `
    Light Mode
    <i class="bi bi-sun-fill"></i>
    `;


    container.style.backgroundImage = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(17,17,17,1) 72%, rgba(63,63,63,1) 100%), url(Inicio.png)";

    localStorage.setItem("theme", "dark");

}

function lightMode() {
    title.style.color = "#3c00a0";
    submitBtn_1.style.backgroundColor = "rgb(39, 126, 192)";
    submitBtn_2.style.backgroundColor = "rgb(39, 126, 192)";
    btnDLMode.innerHTML = `
    Dark Mode
    <i class="bi bi-moon-fill"></i>
    `;

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


// Registro de nuevo usuario enviando los datos a local storage.


submitBtn_1.addEventListener("click", (e) => {

    const nombreUsuario = document.getElementById('nombre').value;
    const apellidoUsuario = document.getElementById("apellido").value;
    const emailUsuario = document.getElementById("email").value;
    const passwordUsuario_1 = document.getElementById("password_1").value;
    const passwordUsuario_2 = document.getElementById("password_2").value;

    let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioYaRegistrado = usuariosRegistrados.find(usuario => usuario.email === emailUsuario);

    if (usuarioYaRegistrado) {

        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El email ingresado corresponde a un usuario registrado.",

        });

    } else if (passwordUsuario_1 !== passwordUsuario_2) {
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Las contraseñas no coinciden.",
        });
        
    } else {

        usuariosRegistrados.push({ nombre: nombreUsuario, apellido: apellidoUsuario, email: emailUsuario, password_1: passwordUsuario_1, password_2: passwordUsuario_2 });
        localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

        Swal.fire("¡Te registraste con éxito!");

        nombreField.style.maxHeight = 0;
        apellidoField.style.maxHeight = 0;
        title.innerHTML = "Iniciar Sesión";
        registrarseBtn.classList.add("disabled");
        iniciarSesionBtn.classList.remove("disabled");
        submitBtn_1.classList.add("disabled");
        submitBtn_2.classList.remove("disabled");
        passwordField_2.style.display = "none";
        
    };

    console.log(usuariosRegistrados);

})


// Inicio de sesión con un usuario ya registrado.

submitBtn_2.addEventListener("click", (e) => {


    const emailUsuario = document.getElementById("email").value;
    const passwordUsuario_1 = document.getElementById("password_1").value;

    const usuarioValidado = JSON.parse(localStorage.getItem("usuarios")).find(usuario => usuario.email === emailUsuario && usuario.password_1 === passwordUsuario_1);

    console.log(usuarioValidado);


    if (usuarioValidado) {

        localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioValidado));

        localStorage.setItem("mostrarMensajeExito", "si");

        window.location.href = "main.html";

    } else {

        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El email y/o la contraseña son incorrectos.",

        });
    }
});
