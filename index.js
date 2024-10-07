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
    const tastText = document.createElement("p");

    tastText.innerHTML = `Descripción: ${description} <br> Fecha límite: ${dueDate}`;

    newTask.appendChild(tastText);

    const buttons = document.createElement('p');

    const editButton = document.createElement('a');
    editButton.href = '#';
    editButton.text = 'EDITAR';
    editButton.addEventListener('click', function(){
        // Editar tarea
    })

    const endTaskButton = document.createElement('a');
    endTaskButton.href = '#';
    endTaskButton.text = 'MARCAR COMO FINALIZADA';
    endTaskButton.addEventListener('click', function(){
        // Finalizar tarea
    })

    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.text = 'ELIMINAR';
    deleteButton.addEventListener('click', function(){
        // Eliminar tarea
    })

    buttons.appendChild(editButton);
    newTask.appendChild(buttons);

    document.getElementById("tasks").appendChild(newTask);
}

function editTask(newTask, oldDescription, oldDueDate){

    const newDescription = prompt('Indica nueva descripción. Antigua:', oldDescription);
    const newDueDate = prompt('Indica nueva fecha. Antigua:', oldDueDate);

    newTask.querySelector("p").innerHTML = `Descripción: ${newDescription} <br> Fecha límite: ${newDueDate}`;
}