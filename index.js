function _getDateFormatted(dateString) {
  const [aaaa, mm, dd] = dateString.split('-');
  if (aaaa && mm && dd) {
    return `${dd}/${mm}/${aaaa}`;
  }
  return dateString;
}

function addNewTaskToTasksList(newTaskDescription, newTaskDueDate) {
  /* 1. Create the new Task object */
  const taskContainer = document.createElement("section");
  taskContainer.classList.add("task");
  /* 2. Add the new task description */
  const taskDescription = document.createElement('p');
  taskDescription.innerHTML = newTaskDescription;
  taskContainer.appendChild(taskDescription);
  /* 3. Add the new task due date */
  const taskDueDateContainer = document.createElement('p');
  taskDueDateContainer.classList.add("date");
  /* 3.1. Status */
  const taskDueDateStatus = document.createElement("span");
  taskDueDateStatus.classList.add("upper");
  taskDueDateStatus.classList.add("todo");
  taskDueDateStatus.innerHTML = "To Do"
  taskDueDateContainer.appendChild(taskDueDateStatus);
  /* 3.2. Get the date in the desired format */
  const newTaskDueDateFormatted = _getDateFormatted(newTaskDueDate);
  /* 3.3. Due date text */
  taskDueDateContainer.innerHTML += ` Due date: ${newTaskDueDateFormatted}`;
  taskContainer.appendChild(taskDueDateContainer);
  /* 4. Add the new task buttons */
  const taskButtonsContainer = document.createElement('p');
  /* 4.1. Edit */
  const editButton = document.createElement('a');
  editButton.classList.add("edit");
  editButton.href = '#';
  editButton.innerHTML = "Edit";
  taskButtonsContainer.appendChild(editButton);
  /* 4.2. Mark as Finished */
  const markAsFinishedButton = document.createElement('a');
  markAsFinishedButton.classList.add("markAsFinished");
  markAsFinishedButton.href = '#';
  markAsFinishedButton.innerHTML = "Mark as Finished";
  taskButtonsContainer.appendChild(markAsFinishedButton);
  /* 4.3. Delete */
  const deleteButton = document.createElement('a');
  deleteButton.classList.add("delete");
  deleteButton.href = '#';
  deleteButton.innerHTML = "Delete";
  taskButtonsContainer.appendChild(deleteButton);
  taskContainer.appendChild(taskButtonsContainer);
  /* 5. Add the new task to the tasks list */
  document.getElementById("tasksSection").appendChild(taskContainer);
}

/* Listener function when 'Submit' forms button is clicked, to create a new task */
document.getElementById("newTaskForm").addEventListener("submit", function(event) {
  /* Prevent page to be re-loaded */
  event.preventDefault();
  /* Get new task information */
  const newTaskDescription = document.getElementById("newTaskDescription").value;
  const newTaskDueDate = document.getElementById("newTaskDueDate").value;
  /* Check input information, if correct */
  if (!newTaskDescription) {
    alert("You must fill the 'Task description' field before submitting!");
  } else if (!newTaskDueDate) {
    alert("You must fill the 'Due date' field before submitting!");
  } else {
    addNewTaskToTasksList(newTaskDescription, newTaskDueDate);
  }
});

function _editTask(target) {
  /* 1. Edit description */
  const oldDescription = target.parentElement.parentElement.firstElementChild.textContent;
  const newDescription = prompt("Edit task description: ", oldDescription);
  // target.parentElement.parentElement.querySelector('p').innerHTML = newDescription;
  target.parentElement.parentElement.firstElementChild.innerHTML = newDescription;
}

function _deleteTask(target) {
  document.getElementById("tasksSection").removeChild(target.parentElement.parentElement);
}

/* Listener function when 'Delete' task button is clicked, to perform some action */
document.getElementById("tasksSection").addEventListener("click", function(event) {
  if (event.target.classList.contains("edit")) {
    /* Prevent page to be re-loaded */
    event.preventDefault();
    _editTask(event.target);
  } else if (event.target.classList.contains("markAsFinished")) {
    /* Prevent page to be re-loaded */
    event.preventDefault();
    _markAsFinished(event.target);
  } else if (event.target.classList.contains("delete")) {
    /* Prevent page to be re-loaded */
    event.preventDefault();
    alert(`Deleting '${event.target.parentElement.parentElement.firstElementChild.textContent}' task...`);
    _deleteTask(event.target);
  }
});
