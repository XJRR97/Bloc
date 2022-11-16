export const checkComplete = (id) => {
  const element__icon = document.createElement("i");
  element__icon.classList.add("element__icon", "fa-regular", "fa-circle-check");
  element__icon.addEventListener("click", (evento) => completeTask(evento, id));

  return element__icon;
};

const completeTask = (evento, id) => {
  const tasks = JSON.parse(localStorage.getItem("Notas"));
  const index = tasks.findIndex((tasks) => tasks.id === id);
  tasks[index]["complete"] = !tasks[index]["complete"];
  localStorage.setItem("Notas", JSON.stringify(tasks));
  const element = evento.target;
  element.classList.toggle("fa-regular");
  element.classList.toggle("icon__complete");
  element.classList.toggle("fa-solid");
};
