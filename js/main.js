class Tarea {
    constructor(nombre, fecha, notas) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.notas = notas
    }
}

const listado = [];

const formularioTarea = document.getElementById("formularioTarea");
const inputTarea = document.getElementById("inputTarea");
const fechaTarea = document.getElementById("fechaTarea");
const notasTarea = document.getElementById("notasTarea");
const listaTareas = document.getElementById("listaTareas");
const agregarTarea = document.getElementById("agregarTarea");

function agregarNuevaTarea() {
    let nombre = inputTarea.value;
    let fecha = fechaTarea.value;
    let notas = notasTarea.value;
    let nuevaTarea = new Tarea(nombre, fecha, notas);
    listado.push(nuevaTarea);

    if(inputTarea !== '') {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.innerText = "inputTarea";
    }

    const eliminarTarea = document.createElement("button");
    eliminarTarea.innerText = "Eliminar";
    

    
}

agregarNuevaTarea();

/*const itemsTareas = () => {
    listado.forEach(tarea => {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.innerHTML = `
                                <li> ${tarea.nombre} 
                                <button id="eliminarTarea"> Eliminar </button></li>`
        listaTareas.appendChild(nuevaTarea);

        //Agregar tareas a la lista:
        const agregarTarea = document.getElementById("agregarTarea");
        agregarTarea.addEventListener("click", () => {
            listaTareas(tarea.nombre);
        })
    })
}

itemsTareas();*/

