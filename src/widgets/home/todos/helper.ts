import {ITask} from "src/entities/home/todo/Todo";

export type buttonType = "all" | "active" | "completed" | "clearCompleted";

export const filteredTasks = (activeButton: buttonType, tasks: ITask[]) => {
    if (activeButton === "all") {
        return tasks;
    } else if (activeButton === "active") {
        return tasks.filter((task) => !task.isDone);
    } else if (activeButton === "completed") {
        return tasks.filter((task) => task.isDone);
    }
};
