//Array de tareas
let tareas = [];

//Modifico el DOM
const formularioTarea = document.getElementById("formularioTarea");
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");
const agregarNuevaTarea = document.getElementById("agregarNuevaTarea");
const empty = document.querySelector(".empty");

//Escuchar al formulario
formularioTarea.addEventListener('submit', (e) => {
    e.preventDefault();
    let valorTarea = inputTarea.value;
    if (valorTarea !== '') {
        agregarTarea(valorTarea)
    }
})

//Escuchar al botón agregar y agrego librería
agregarNuevaTarea.addEventListener('click', () => {
    if (inputTarea.value !== '') {
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

//Agrego Fetch

const sugerenciasTareas = "json/tareas.json";

fetch(sugerenciasTareas)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(tarea => {
            listaTareas.innerHTML += `
                                    <li>
                                    <input type="checkbox" name="tareaCompleta" id="tareaCompleta">
                                    <label id="nuevaTarea">${tarea.nombre}</label>
                                    <button id="eliminarItem-${tarea.nombre}">
                                    <span class="material-symbols-outlined" id="opciones">
                                        delete
                                    </span>
                                    </button>
                                    </li>
                                    `
            
        })
    })
    .catch(error => console.log(error))
//Que no repita la tarea