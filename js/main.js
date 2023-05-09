class Tarea {
    constructor(nombre, fecha, hora, nota) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.hora = hora;
        this.nota = nota;
    }
}

const listaDeTareas = [];
console.log(listaDeTareas);

function agregarNuevo() {
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