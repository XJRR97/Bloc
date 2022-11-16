import { showTask } from "./show.js";

export const deleteIcon = (id) => {
  const element__trash = document.createElement("i");
  element__trash.classList.add("element__trash", "fa-solid", "fa-trash-can");
  element__trash.addEventListener("click", (evento) => deleteTask(evento, id));
  return element__trash;
};

const deleteTask = (evento, id) => {
  const tasks = JSON.parse(localStorage.getItem("Notas"));
  const index = tasks.findIndex((tasks) => tasks.id === id);
  tasks.splice(index, 1);
  localStorage.setItem("Notas", JSON.stringify(tasks));
  showTask(tasks);
};
