class Tarea {
    constructor(nombre, fecha, nota) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.nota = nota;
    }
}

const listaDeTareas = [];

if (localStorage.getItem("tareasPendientes")) {
    tareasPendientes = JSON.parse(localStorage.getItem("tareasPendientes"));
}

const formulario = document.getElementById ("login-formulario");
const nombreInput = document.getElementById("nombreInput");
const usuarioInput = document.getElementById("usuarioInput");
const passwordInput = document.getElementById("passwordInput");
const botonRegistrar = document.getElementById("botonRegistrar");
const usuarios = [];


const verUsuarios = (nuevoUsuario) => {
    const fichaNuevoUsuario = document.createElement("div");
    fichaNuevoUsuario.className = "ficha";
    fichaNuevoUsuario.innerHTML = `
                                        <h3>${nuevoUsuario.nombre}</h3>
                                        <p>Username: ${nuevoUsuario.username}</p>`

    contenedorUsuario.appendChild(fichaNuevoUsuario);
}

const mandarDatos = document.getElementById ("login-formulario");

mandarDatos.addEventListener ("submit", (e) => {
    e.preventDefault()

    console.log(e.target.children["nombre"].value);
    console.log(e.target.children["usuario"].value);
    console.log(e.target.children["password"].value);

    const informacion = e.target.children;
    const nuevoUsuario = {
        nombre:informacion["nombre"].value,
        username:informacion["usuario"].value,
        password:informacion["password"].value,
    }
    console.log(nuevoUsuario);
    usuarios.push(nuevoUsuario);

    const enJson = JSON.stringify(nuevoUsuario);
    localStorage.setItem("newUser", enJson);

    mandarDatos.reset();
});
console.log(usuarios);

function mostrarBienvenido() {
    document.getElementById("bienvenido").style.display = "block";
  }