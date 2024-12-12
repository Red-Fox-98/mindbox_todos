import { ITask } from 'src/feature/Home/Task/Task';
import { ButtonType } from 'src/feature/Home/TaskActionButton/TaskActionButton';

export const filterTasks = (activeButton: ButtonType, tasks: ITask[]) => {
  switch (activeButton) {
    case 'all':
      return tasks;
    case 'active':
      return tasks.filter((task) => !task.isDone);
    case 'completed':
      return tasks.filter((task) => task.isDone);
    default:
      return;
  }
};
