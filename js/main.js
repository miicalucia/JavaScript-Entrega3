//Array de tareas
let tareas = [];

//LocalStorage
/* const obtenerTareasLocalStorage = () => {
      if (localStorage.getItem("tareas")) {
        return JSON.parse(localStorage.getItem("tareas"));
      } else {
        return [];
      }
    };

const guardarTareasLocalStorade = () => {
    if(tareas.length > 0) {
        const tareasGuardadas = tareas.map((tarea) => tarea.toLowerCase());
        localStorage.setItem("tareas", JSON.stringify(tareasGuardadas))
    } else {
        localStorage.removeItem("tareas");
    }
} */

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
                            <span id="nuevaTarea">${primeraLetraMayuscula}</span>
                            <button id="eliminarItem-${valorTarea}">
                                <span class="material-symbols-outlined" id="opciones">
                                    delete
                                </span>
                            </button>
                            <button id="completoItem-${valorTarea}">
                                <span class="material-symbols-outlined" id="opciones">
                                    done
                                </span>
                            </button>
                            
                            `;
    listaTareas.appendChild(nuevaTarea);
    tareas.push(nuevaTarea); 

    inputTarea.value = '';
/* 
    
    //LocalStorage
    guardarTareasLocalStorade(); */

    const botonEliminar = document.getElementById(`eliminarItem-${valorTarea}`);
    botonEliminar.addEventListener('click', () => {
        eliminarTarea(valorTarea);
    })

    const botonCompletado = document.getElementById(`completoItem-${valorTarea}`);
    botonCompletado.addEventListener('click', () => {
        tareaCompleta(valorTarea);
    })
}

//Función eliminar Tarea
const eliminarTarea = (valorTarea) => {
    const tareasElementos = Array.from(listaTareas.children);
    const tareaEncontrada = tareasElementos.find(nuevaTarea => nuevaTarea.querySelector('span').textContent.toLowerCase() === valorTarea.toLowerCase());
    if (tareaEncontrada) {
        let indice = tareasElementos.indexOf(tareaEncontrada);
        tareasElementos.splice(indice, 1);
        listaTareas.removeChild(tareaEncontrada);

        tareas = tareasElementos;
    }
/* 
    //LocalStorage
    guardarTareasLocalStorade(); */

    inputTarea.value = '';

    if (tareas.length === 0) {
        empty.style.display = "block";
    }
};

//Función Tarea completa 
const tareaCompleta = (valorTarea) => {
    const buscarTarea = tareas.find(nuevaTarea => nuevaTarea.querySelector('span').textContent === valorTarea);
    if (buscarTarea) {
        
    }
}

//Agrego Fetch

//Que no repita la tarea
