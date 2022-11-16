import { editIcon } from "./edit.js";
import { checkComplete } from "./complete.js";
import { deleteIcon } from "./delete.js";
import { orderTasks } from "./date.js";
import { showTask } from "./show.js";
export const createTask = (evento) => {
  evento.preventDefault();
  const search__input = document.querySelector(".search__input");
  const input_date = document.querySelector("[data-date]");
  const value = search__input.value;
  const date = input_date.value;
  const dateTask = moment(date).format("DD/MM/YYYY");
  if (value === "" || date === "") {
    return;
  }
  const complete = false;
  const taskObj = {
    value,
    dateTask,
    id: uuid.v4(),
    complete,
  };

  const tasks = JSON.parse(localStorage.getItem("Notas")) || [];
  tasks.push(taskObj);
  const tasksordenadas = orderTasks(tasks);

  localStorage.setItem("Notas", JSON.stringify(tasksordenadas));
  search__input.value = "";
  input_date.value = "";

  showTask(tasksordenadas);
};

export const displayTasks = ({ value, dateTask, id, complete }) => {
  const note_element = document.querySelector("[data-note_element]"); // elemento ul
  const check = checkComplete(id);

  if (complete) {
    check.classList.toggle("fa-regular");
    check.classList.toggle("fa-solid");
    check.classList.toggle("icon__complete");
  }
  const element__list = document.createElement("li");
  element__list.classList.add("element__list");
  const element__card = document.createElement("div");
  element__card.classList.add("element__card");
  const element__description = document.createElement("span");
  element__description.classList.add("element__description");
  element__description.innerHTML = value;

  note_element.appendChild(element__list);
  element__list.appendChild(element__card);
  element__list.appendChild(editIcon(id));
  element__list.appendChild(deleteIcon(id));
  element__card.appendChild(check);
  element__card.appendChild(element__description);
};
