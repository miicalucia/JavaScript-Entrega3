class Tarea {
    constructor(nombre, fecha, nota) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.nota = nota;
    }
}

const listaDeTareas = [];

let tareasPendientes = [];

if (localStorage.getItem("tareasPendientes")) {
    tareasPendientes = JSON.parse(localStorage.getItem("tareasPendientes"));
}

const inputValue = document.getElementById("nombreUsuario");
inputValue.value = "Ingrese su nombre";


class Usuario {
    constructor(nombre, mail) {
        this.nombre = nombre;
        this.mail = mail;
    }
}

const arrayUsuarios = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();

    //Tomamos los datos del formulario:
    const nombreUsuario = document.getElementById("nombreUsuario");
    const mailUsuario = document.getElementById("mailUsuario");

    //Creamos el nuevo objeto: 
    const cliente = new Cliente(nombrecito.value, apellidito.value);

    //Lo metemos al Array:
    arrayClientes.push(cliente);

    //Verificamos por consola: 
    console.log(arrayClientes);

    //Reseteamos el formulario: 
    formularito.reset();
})

function menu() {
    let elegirOpcion = "";
    while (elegirOpcion !== "5") {
        elegirOpcion = prompt("Selecciona una opción: \n 1) Agregar tarea \n 2) Agregar evento \n 3) Salir");
        switch (elegirOpcion) {
            case "1":
                agregarTarea();
                break;
            case "2":
                agregarEvento();
                break;
            case "3":
                salir();
                break;
            default:
                alert("Vamos de nuevo!");
                break;
        }
    }
}