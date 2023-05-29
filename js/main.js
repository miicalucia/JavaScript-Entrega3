//Array de tareas
let tareas = [];

//LocalStorage
if (localStorage.getItem("tareas")) {
    tareas = JSON.parse(localStorage.getItem("tareas"));
}

//Modifico el DOM
const formularioTarea = document.getElementById("formularioTarea");
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");
const agregarNuevaTarea = document.getElementById("agregarNuevaTarea");
const empty = document.querySelector(".empty");

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
    const nuevaTarea = document.createElement("li")
    nuevaTarea.innerHTML = `
                                <input type="checkbox" name="completa" id="tareaCompletada-${valorTarea}">
                                <span>${valorTarea}</span>
                                <button id="eliminarItem-${valorTarea}">Eliminar</button>
                                `;
    listaTareas.appendChild(nuevaTarea);
    tareas.push(nuevaTarea);

    inputTarea.value = '';

    
    //LocalStorage
    localStorage.setItem('tareas', JSON.stringify(tareas));

    const botonEliminar = document.getElementById(`eliminarItem-${valorTarea}`);
    botonEliminar.addEventListener('click', () => {
        eliminarTarea(valorTarea);
    })
}

//Función eliminar Tarea
const eliminarTarea = (valorTarea) => {
    const tareasElementos = Array.from(listaTareas.children);
    const tareaEncontrada = tareasElementos.find(tarea => tarea.querySelector('span').textContent === valorTarea);
    if (tareaEncontrada) {
        inputTarea.value = valorTarea;
        let indice = tareasElementos.indexOf(tareaEncontrada);
        tareasElementos.splice(indice, 1);
        listaTareas.removeChild(tareaEncontrada);

        tareas = tareasElementos;
    }

    inputTarea.value = '';

    if (tareas.length === 0) {
        empty.style.display = "block";
    }
};

//Función Tarea completa
//`<strike>${valorTarea}</strike>`

    


//Agrego Fetch

//Que no repita la tarea




/* 
function agregarNuevaTarea(tarea) {
    tareas.push({
        id: Date.now(),
        description: tarea,
        completed: false
    });
    
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
}

function tareaCompleta(id) {
    tareas = tareas.map(tarea => {
        if (tarea.id === id) {
            tarea.completed = true;
        }
        return tarea;
    })
}

formularioTarea.addEventListener('submit', function(e){
    e.preventDefault();

    const tarea = inputTarea.value;
    if (tarea !== '') {
        agregarNuevaTarea(tarea);
        renderTarea();
        inputTarea.value = '';
    }
})

listaTareas.addEventListener("click", function(e){
    if (e.target.classList.contains('botonEliminar')) {
        const tareaId = parseInt(e.target.parentNode.dataset.id);
        eliminarTarea(tareaId);
        renderTarea();
    } else if (e.target.classList.contains('botonCompletado')) {
        const tareaId = parseInt(e.target.parentNode.dataset.id);
        tareaCompleta(tareaId);
        renderTarea();
    }
})

fetch('https://api.example.com/tasks')
    .then(respuesta => respuesta.json())
    .then(data => {
        tarea = data;
        renderTarea();
    })
    .catch(error=> {
        alertaTarea('Error', 'No se pudo obtener la lista de tareas', 'error')
    })

function renderTarea() {
    // Limpiar el contenido actual del listado
    listaTareas.innerHTML = '';
      
    // Recorrer el array de tareas y crear elementos HTML para cada una
    tareas.forEach(tarea => {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.dataset.id = tarea.id;
      
        const tareaTexto = document.createElement('span');
        tareaTexto.textContent = tarea.description;
      
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('botonEliminar');
      
        const botonCompletado = document.createElement('button');
        botonCompletado.textContent = 'Completar';
        botonCompletado.classList.add('botonCompletado');
      
        nuevaTarea.appendChild(tareaTexto);
        nuevaTarea.appendChild(botonEliminar);
        nuevaTarea.appendChild(botonCompletado);
        listaTareas.appendChild(nuevaTarea);
      
        // Marcar una tarea como completada si es necesario
        if (tarea.completed) {
            nuevaTarea.classList.add('completed');
            }
        });
      }     */