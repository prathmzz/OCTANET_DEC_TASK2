function addTask() {
    var taskInput = document.getElementById('task');
    var dueDateInput = document.getElementById('dueDate');
    var priorityInput = document.getElementById('priority');

    var taskText = taskInput.value.trim();
    var dueDate = dueDateInput.value;
    var priority = priorityInput.value;

    if (taskText === '' || dueDate === '') {
        alert('Please enter a valid task and due date.');
        return;
    }

    var taskContainer = document.getElementById('tasks');
    
    var taskElement = document.createElement('div');
    taskElement.className = 'task';

    var label = document.createElement('label');
    label.textContent = taskText;

    var details = document.createElement('div');
    details.textContent = `Due: ${dueDate}, Priority: ${priority}`;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskContainer.removeChild(taskElement);
    };

    taskElement.appendChild(label);
    taskElement.appendChild(details);
    taskElement.appendChild(deleteButton);

    taskContainer.appendChild(taskElement);

    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';
}
