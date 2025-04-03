function loadData() {
  console.log("Loading data...");
  // This would typically fetch tasks from a backend
}

// Placeholder for the postData function
function postData(event) {
  event.preventDefault();
  console.log("Creating new task...");

  // Get form values
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;

  console.log({ name, description, dueDate });

  // Close modal
  document.getElementById("task-modal").checked = false;

  // Reset form
  event.target.reset();

  // Show success notification
  showNotification("Tarea creada con éxito");
}
