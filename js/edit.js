const data__noteElement = document.querySelector(".card");
export const editIcon = (id) => {
  const edit__icon = document.createElement("i");
  edit__icon.classList.add("fa-solid", "fa-pen", "element_edit");
  edit__icon.addEventListener("click", (evento) => editTask(evento, id));

  return edit__icon;
};

const editTask = (evento, id) => {
  let element = evento.target.parentNode.firstElementChild.lastElementChild;
  let textEdit = element.innerHTML;

  const cardEdit = document.createElement("div");
  cardEdit.classList.add("cardEdit");

  const cardEdit__icon = document.createElement("div");
  cardEdit__icon.classList.add("cardEdit__icon");

  const exitTaskIcon = document.createElement("i");
  exitTaskIcon.classList.add(
    "exitIcon",
    "fa-regular",
    "fa-circle-xmark",
    "fa-2x"
  );

  const editTaskIcon = document.createElement("i");
  editTaskIcon.classList.add("fa-solid", "fa-pen", "editIcon", "fa-2x");

  const saveTaskIcon = document.createElement("i");
  saveTaskIcon.classList.add(
    "fa-regular",
    "fa-floppy-disk",
    "saveIcon",
    "fa-2x"
  );

  const textAreaEdit = document.createElement("textarea");
  textAreaEdit.classList.add("textAreaEdit");
  textAreaEdit.readOnly = true;

  textAreaEdit.innerHTML = textEdit;

  const copy = document.querySelector(".element__description");

  data__noteElement.appendChild(cardEdit);
  cardEdit.appendChild(cardEdit__icon);
  cardEdit__icon.appendChild(editTaskIcon);
  cardEdit__icon.appendChild(saveTaskIcon);
  cardEdit__icon.appendChild(exitTaskIcon);
  cardEdit.appendChild(textAreaEdit);

  exitTaskIcon.addEventListener("click", (evento) => {
    const parent = evento.target.parentElement.parentElement;
    parent.remove();
  });

  editTaskIcon.addEventListener("click", (evento) => {
    textAreaEdit.readOnly = false;
    textAreaEdit.focus();
  });
  saveTaskIcon.addEventListener("click", (evento) => {
    const editContent = textAreaEdit.value;
    const tasks = JSON.parse(localStorage.getItem("Notas"));
    const index = tasks.findIndex((tasks) => tasks.id === id);
    tasks[index]["value"] = editContent;
    localStorage.setItem("Notas", JSON.stringify(tasks));
    element.innerHTML = editContent;
  });
};
