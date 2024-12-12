import { ITask } from "src/feature/home/task/Task";
import { ButtonType } from "src/feature/home/taskActionButton/TaskActionButton";

export const filterTasks = (activeButton: ButtonType, tasks: ITask[]) => {
  switch (activeButton) {
    case "all":
      return tasks;
    case "active":
      return tasks.filter((task) => !task.isDone);
    case "completed":
      return tasks.filter((task) => task.isDone);
    default:
      return;
  }
};
