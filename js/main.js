//Array de tareas
let tareas = [];

//Modifico el DOM
const formularioTarea = document.getElementById("formularioTarea");
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");
const agregarNuevaTarea = document.getElementById("agregarNuevaTarea");
const empty = document.querySelector(".empty");

let valorTarea = inputTarea.value;

//Escuchar al formulario
formularioTarea.addEventListener('submit', (e) => {
    e.preventDefault();  
    if (inputTarea.value !== '') {
        agregarTarea(inputTarea.value)
    }
})

//Función agregar Tarea
const agregarTarea = (valorTarea) => {
    const nuevaTarea = document.createElement("li");
    const primeraLetraMayuscula = valorTarea.charAt(0).toUpperCase() + valorTarea.slice(1);
    nuevaTarea.innerHTML = `
                            <input type="checkbox" name="tareaCompleta" id="tareaCompleta">
                            <label id="nuevaTarea">${primeraLetraMayuscula}</label>
                            <button id="eliminarItem-${valorTarea}">
                                <span class="material-symbols-outlined" id="opciones">
                                    delete
                                </span>
                            </button>
                            `
    ;

    //Agrego librería
    const tareaExistente = tareas.find(nuevaTarea => nuevaTarea.querySelector('label').textContent.toLowerCase() === valorTarea.toLowerCase());
    if (tareaExistente) {
        Toastify({
            text: "La tarea ya existe",
            duration: 2000,
            style: {
                background: "white",
                color: "#515151",
            },
        }).showToast();
        return;
    } else {
        Toastify({
            text: "Tarea agregada",
            duration: 2000,
            style: {
                background: "white",
                color: "#515151",
            },
        }).showToast();
        empty.style.display = "none";
    }

    listaTareas.appendChild(nuevaTarea);
    tareas.push(nuevaTarea);

    inputTarea.value = '';

    const botonEliminar = document.getElementById(`eliminarItem-${valorTarea}`);
    botonEliminar.addEventListener('click', () => {
        eliminarTarea(valorTarea);
    })
}

//Función eliminar Tarea
const eliminarTarea = (valorTarea) => {
    const tareasElementos = Array.from(listaTareas.children);
    const tareaEncontrada = tareasElementos.find(nuevaTarea => nuevaTarea.querySelector('label').textContent.toLowerCase() === valorTarea.toLowerCase());
    if (tareaEncontrada) {
        let indice = tareasElementos.indexOf(tareaEncontrada);
        tareasElementos.splice(indice, 1);
        listaTareas.removeChild(tareaEncontrada);

        tareas = tareasElementos;
    }

    if (tareas.length === 0) {
        empty.style.display = "block";
    }
};

//Agrego Fetch con Rutas Relativas
const listaSugerencias = document.getElementById("listaSugerencias");
const sugerenciasTareas = "json/tareas.json";

fetch(sugerenciasTareas)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(tarea => {
            listaSugerencias.innerHTML += `
            <button id="sugerenciaTarea"><label id="nuevaTarea">${tarea.nombre}
                              
                                    </label></button>
                                    `
        })
        const sugerenciaTarea = document.getElementById("sugerenciaTarea");
        sugerenciaTarea.addEventListener("click", () => {
            agregarTarea(valorTarea);
        })
    })
    .catch(error => console.log(error))
      /* <button id="sugerenciaTarea">${tarea.nombre}</button> */