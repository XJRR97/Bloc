import { displayTasks } from "./tasks.js";
import { orderTasks, uniqueDates } from "./date.js";
export const showTask = (tasks) => {

  const unique = uniqueDates(tasks);
  const note_element = document.querySelector("[data-note_element]");
  note_element.innerHTML = "";
  unique.forEach((element) => {
    
    const date = moment(element, "DD/MM/YYYY");
    const span = document.createElement("span");
    span.classList.add("date__span");
    span.innerHTML = element;
    note_element.appendChild(span);

    tasks.forEach((tasks) => {
      const taskDate = moment(tasks.dateTask, "DD/MM/YYYY");
      const diffDate = date.diff(taskDate);
      if (diffDate === 0) {
        displayTasks(tasks);
      }
    });
  });
};
