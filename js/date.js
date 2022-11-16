export const uniqueDates = (tasks) => {
  const date = [];
  tasks.forEach((task) => {
    if (!date.includes(task.dateTask)) {
      date.push(task.dateTask);
    }
  });
  return date;
};

export const orderTasks = (tasks) => {
  tasks.sort((a, b) => {
    const firstDate = moment(a.dateTask, "DD/MM/YYYY");
    const secondtDate = moment(b.dateTask, "DD/MM/YYYY");
    return firstDate - secondtDate;
  })
  return tasks;
};


// export const orderDates = (date) => {
//   return date.sort((a, b) => {
//     const firstDate = moment(a, "DD/MM/YYYY");
//     const secondtDate = moment(b, "DD/MM/YYYY");
//     return firstDate - secondtDate;
//   });
// };



