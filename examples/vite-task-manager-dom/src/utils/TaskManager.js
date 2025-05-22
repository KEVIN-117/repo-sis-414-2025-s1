const URL = "https://flutter-ai-aa81b-default-rtdb.firebaseio.com/tasks.json";
import { showNotification } from "../js/utils";

export class Task {
  constructor(title, description, dueDate, completed, priority) {
    this.id = Math.floor(Math.random() * 1000);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = completed;
    this.priority = priority;
  }

  static buildTaskItem(task) {
    return `<div class="glass-card rounded-lg p-4 mb-4 flex flex-col">
                    <div class="flex justify-between items-start mb-2">
                        <div class="flex items-center gap-3">
                            <div class="task-status"></div>
                            <h3 class="text-xl font-semibold">${task.title}</h3>
                        </div>
                        <div class="flex gap-2">
                            <button class="p-2 rounded-full hover:bg-[rgba(0,247,255,0.1)] transition-all" id="edit-task">
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
                            <span>Priority: ${task.priority}%</span>
                            <span>Vence: ${task.dueDate}</span>
                        </div>
                        <div class="progress-bar w-full">
                            <div class="h-full bg-[var(--primary)]" style="width: ${task.priority}%"></div>
                        </div>
                    </div>
                </div>`;
  }
  deleteTask(id) {
    console.log(`Task with ID ${id} deleted`);
  }
}

export class TaskManager {
  static async getTasks() {
    try {
      const res = await fetch(URL);

      if (!res.ok) {
        console.log("Error fetching data: " + res.status);
        return;
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  static async addTask(task) {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!res.ok) {
        console.log("Error adding task: " + res.status);
        return;
      }

      showNotification(`Task "${task.title}" added successfully!`);
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  static async deleteTask(taskId) {
    try {
      const res = await fetch(`${URL}/${taskId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.log("Error adding task: " + res.status);
        return;
      }

      showNotification(`Task "${taskId}" deleted successfully!`);
    } catch (error) {
      console.log("Error: " + error);
    }
  }
}
