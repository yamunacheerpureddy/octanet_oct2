// Selecting DOM elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get input value and remove extra spaces
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new list item (li) element
    const li = document.createElement("li");

    // Create span to hold the task text
    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = taskText;
    li.appendChild(span);

    // Create task controls (Edit and Delete buttons)
    const controls = document.createElement("div");
    controls.classList.add("task-controls");

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    controls.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    controls.appendChild(deleteBtn);

    // Add buttons to the task list item
    li.appendChild(controls);

    // Append the new task (li) to the task list (ul)
    taskList.appendChild(li);

    // Clear input field after adding task
    taskInput.value = "";

    // Add event listeners for edit and delete
    editBtn.addEventListener("click", () => editTask(span, editBtn));
    deleteBtn.addEventListener("click", () => deleteTask(li));
}

// Function to edit a task
function editTask(span, editBtn) {
    if (editBtn.textContent === "Edit") {
        const newTaskText = prompt("Edit your task:", span.textContent);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            span.textContent = newTaskText.trim();
        }
    }
}

// Function to delete a task
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Add event listener to Add Task button
addBtn.addEventListener("click", addTask);

// Add task when pressing Enter in the input field
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
