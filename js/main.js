class Usuario {
    constructor(nombre, contraseña) {
        this.nombre = nombre;
        this.contraseña = contraseña;
    }
}

class Tarea {
    constructor(nombre, fecha, notas) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.notas = notas;
    }
}

const listaDeUsuarios = [];
const listaDeTareas = [];

const formulario = document.getElementById("login-formulario");
const botonLogIn = document.getElementById("botonLogIn");

if (localStorage.getItem("usuario")) {
    usuario = JSON.parse(localStorage.getItem("usuario"));
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuarioInput = document.getElementById("usuarioInput");
    const contraseñaInput = document.getElementById("contraseñaInput");
    const nombreUsuario = usuarioInput.value;

    const usuario = new Usuario(usuarioInput.value, contraseñaInput.value);

    listaDeUsuarios.push(usuario);

    console.log(listaDeUsuarios);

    const enJSON = JSON.stringify(usuario);
    localStorage.setItem("usuario", enJSON);

    const mensajeBienvenida = document.getElementById("mensajeBienvenida");
    mensajeBienvenida.innerHTML= `Bienvenido/a ${nombreUsuario}! \n Que deseas hacer?
                                    <nav>
                                        <div>
                                            <a class="nav-link active items" aria-current="page" href="">Crear Tarea</a>
                                            <a class="nav-link active items" aria-current="page" href="">Editar Tarea</a>
                                            <a class="nav-link active items" aria-current="page" href="">Eliminar Tarea</a>
                                            <a class="nav-link active items" aria-current="page" href="">Ver Lista de Tareas</a>
                                        </div>
                                    </nav>`;

    formulario.reset();
})




























