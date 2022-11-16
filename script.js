import { createTask } from "./js/tasks.js";
import { showTask } from "./js/show.js";
import { orderTasks } from "./js/date.js";
const tasks = JSON.parse(localStorage.getItem("Notas"));

const submit = document.querySelector("[data-submit__btn]");
submit.addEventListener("click", createTask);
showTask(tasks);
orderTasks(tasks);