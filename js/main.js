class Tarea {
    constructor(nombre, fecha, nota) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.nota = nota;
    }
}
const listado = [];
const listaDeTareas = document.getElementById("listaDeTareas");


if (localStorage.getItem("tareasPendientes")) {
    tareasPendientes = JSON.parse(localStorage.getItem("tareasPendientes"));
}

const formulario = document.getElementById ("login-formulario");
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

    console.log(e.target.children["usuario"].value);
    console.log(e.target.children["password"].value);

    const informacion = e.target.children;
    const nuevoUsuario = {
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

const crearTarea = () => {
    const menu = document.createElement("button");
    menu.innerHTML = `
                    <input type="text" id="nombreTarea" placeholder="Nombre de la tarea">
                    <input type="date" id="fechaTarea" placeholder="Fecha de la tarea">
                    <input type="text" id="notaTarea" placeholder="Detalles de la tarea">
                    <button id="guardarTarea">Guardar</button>`
listaDeTareas.appendChild(menu);

let nuevaTarea = new Tarea(`${nombreTarea},${fechaTarea},${notaTarea}`)

const botonTarea = document.getElementById("guardarTarea");
botonTarea.addEventListener("click", () => {
    listado.push(nuevaTarea);
})
}
console.log(listaDeTareas);


