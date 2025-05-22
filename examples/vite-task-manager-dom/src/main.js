import reset, { increment, decrement } from "./utils/counter";
import { getData, buildCharacterItem } from "./utils/getData";
import resetFunction from "./utils/counter";

import { TaskManager, Task } from "./utils/TaskManager";

const taskContainer = document.getElementById("app");

const form = document.getElementById("form");

function buildTask(task) {
  console.log(task);

  return `<div class="glass-card rounded-lg p-4 mb-4 flex flex-col">
                    <div class="flex justify-between items-start mb-2">
                        <div class="flex items-center gap-3">
                            <div class="task-status" style="background: var(--secondary);"></div>
                            <h3 class="text-xl font-semibold">${task.name}</h3>
                        </div>
                        <div class="flex gap-2">
                            <button class="p-2 rounded-full hover:bg-[rgba(0,247,255,0.1)] transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--primary)]"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                            <button class="p-2 rounded-full hover:bg-[rgba(255,0,128,0.1)] transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--accent)]" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-3">${task.description}</p>
                    <div class="mt-auto">
                        <div class="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Progreso: 30%</span>
                            <span>Vence: ${task.dueDate}</span>
                        </div>
                        <div class="progress-bar w-full">
                            <div class="h-full bg-[var(--secondary)]" style="width: 30%"></div>
                        </div>
                    </div>
                </div>`;
}

let count = 0;

const value = document.getElementById("value");

const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");
const resetButton = document.getElementById("reset-button");
console.log(incrementButton);
console.log(decrementButton);

value.innerText = count;

incrementButton.addEventListener("click", () => {
  count = increment(count);
  value.innerText = count;
});

decrementButton.addEventListener("click", () => {
  count = decrement(count);
  value.innerText = count;
});

resetButton.addEventListener("click", () => {
  count = reset();
  value.innerText = count;
});

console.log("/////////////////////////////////////////////////////////");
// const data = await getData();

// console.log(data);

// data.items.forEach((element) => {
//   const characterCardItem = buildCharacterItem(element);
//   taskContainer.innerHTML += characterCardItem;
// });

async function loadData() {
  const tasks = await TaskManager.getTasks();
  for (let key in tasks) {
    const taskUi = Task.buildTaskItem(tasks[key]);
    taskContainer.innerHTML += taskUi;
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const target = event.target;

  const name = target.name.value;
  const description = target.description.value;
  const dueDate = target.due_date.value;

  const task = new Task(name, description, dueDate, false, 0);
  TaskManager.addTask(task);
  form.reset();
  document.getElementById("task-modal").checked = false;
});

document.addEventListener("DOMContentLoaded", () => {
  loadData();
});

const editTask = document.getElementById("edit-task");
const deleteTask = document.getElementById("delete-task");

console.log(deleteTask);
