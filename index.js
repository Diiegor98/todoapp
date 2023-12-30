//Date info
const dateYear = document.getElementById('date-year');
const dateMonth = document.getElementById('date-month');
const dateNumber = document.getElementById('date-number');
const dateText = document.getElementById('date-text');

//Container de tareas
const tasksContainer = document.getElementById('tasks-container');


//Función para agregar la información de la fecha
const setDate = () => {
    const date = new Date();

    //numeric (numero) - long (string completo) - short (string abreviado)
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', {weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es', {month: 'short'});
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric'});
}

/*
Función para agregar una nueva tarea
cuando se envíe el botón submit
*/

const addNewTask = event => {
    event.preventDefault();
    //Agarra el valor del input con name taskText
    const { value }  = event.target.taskText;
    
    //Si está vacío retorna
    if(!value) return;

    /*Si está lleno creamos un div: 
    -con la clase task
    -un evento de click
    -texto del value
    -agregamos a lo primero de la lista
    -reseteamos el input
    */
    const task = document.createElement('div');
    task.classList.add('task');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

//Funcion que marca las tareas hechas o no
const changeTaskState = event => {
    //si tiene done lo saca y si lo tiene lo pone
    event.target.classList.toggle('done')
};


//Ordenar las tareas
const order = () => {
    const done = [];
    const toDo = [];

    tasksContainer.childNodes.forEach( element => {
        element.classList.contains('done') ? done.push(element) : toDo.push(element)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks  = ()  => {
    order().forEach(element => tasksContainer.appendChild(element))
}

setDate()
