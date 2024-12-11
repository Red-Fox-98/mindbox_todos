import {FC} from "react";
import Styles from "./Todo.module.scss";
import clsx from "clsx";

export interface ITask {
    id: number;
    name: string;
    isDone: boolean;
}

export interface TodoProps {
    data: ITask;
    changeTask: (newData: ITask) => void;
}

const Todo: FC<TodoProps> = ({data, changeTask}) => {
    const handleChange = <TKey extends keyof ITask>(key: TKey, newData: ITask[TKey]): void => {
        changeTask({...data, [key]: newData})
    }
    return (
        <div className={clsx(Styles.task, data.isDone && Styles.checked)}>
            <input type={"checkbox"} checked={data.isDone} onChange={(e) => handleChange("isDone", e.currentTarget.checked)}/>
            <input type={"text"} value={data.name} onChange={(e) => handleChange("name", e.currentTarget.value)}/>
        </div>
    );
};

export default Todo;
