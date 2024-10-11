document.getElementById("taskform").addEventListener('submit', function(e){
    // Quitar el comportamiento por defecto del navegador, por ejemplo que no recargue
    // la página al darle al botón. 
    e.preventDefault();

    // Valores de los elementos del form a modificar
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;

    if(description && dueDate){
        // Añadir la tarea a la lista de tareas
        addTask(description, dueDate);
    }else{
        alert("Tienes que rellenar todos los campos");
    }


});

// Gracias al hoisting que se guarda todas las variables globales y funciones
// se puede llamar a este metodo sin que esté definido arriba
function addTask(description, dueDate){
    const newTask = document.createElement("div");
    
    // Texto de la tarea
    const taskText = document.createElement("p");
    
    // Texto dentro de la tarea que contiene el estado de la tarea: toDo, done,etc
    const taskState = document.createElement("p");
    const taskStateChild = document.createElement("span");
    taskStateChild.className = "inProgress";
    taskStateChild.innerHTML = `IN PROGRESS`

    taskText.innerHTML = `Descripción: ${description} <br>`;
    taskState.appendChild(taskStateChild);
    taskState.innerHTML += ` Fecha límite: ${dueDate}`;

    newTask.className = 'listItems';
    newTask.appendChild(taskText);
    newTask.appendChild(taskState);

    const buttons = document.createElement('p');

    const editButton = document.createElement('a');
    editButton.href = '#';
    editButton.text = 'EDITAR';
    editButton.addEventListener('click', function(){
        // Editar tarea
        editTask(newTask, description, dueDate);
    })

    const endTaskButton = document.createElement('a');
    endTaskButton.href = '#';
    endTaskButton.text = 'MARCAR COMO FINALIZADA';
    endTaskButton.addEventListener('click', function(){
        // Finalizar tarea
        endTask(taskState);
    })

    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.text = 'ELIMINAR';
    deleteButton.className = 'eliminar'
    deleteButton.addEventListener('click', function(){
        // Eliminar tarea
        deleteTask(newTask);
    })

    buttons.appendChild(editButton);
    buttons.appendChild(endTaskButton);
    buttons.appendChild(deleteButton);

    newTask.appendChild(buttons);

    document.getElementById("tasks").appendChild(newTask);
}

function editTask(newTask, oldDescription, oldDueDate){

    const newDescription = prompt('Indica nueva descripción. Antigua:', oldDescription);
    const newDueDate = prompt('Indica nueva fecha. Antigua:', oldDueDate);

    newTask.querySelector("p").innerHTML = `Descripción: ${newDescription} <br> Fecha límite: ${newDueDate}`;
}

function endTask(taskState){

    taskState.querySelector('.inProgress').innerHTML = "DONE";
    taskState.querySelector('.inProgress').className = "done";
}

function deleteTask(newTask){
    document.getElementById("tasks").removeChild(newTask);
}