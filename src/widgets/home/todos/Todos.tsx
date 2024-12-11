import React, {FC, useRef, useState} from "react";
import Styles from "./Todos.module.scss"
import DownArrow from "src/shared/uiKit/icons/DownArrow";
import Todo, {ITask} from "src/entities/home/todo/Todo";
import Button from "src/shared/uiKit/Button/Button";
import {buttonType, filteredTasks} from "src/widgets/home/todos/helper";
import clsx from "clsx";

const Todos: FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [taskInput, setTaskInput] = useState<string>("");
    const [activeButton, setActiveButton] = useState<buttonType>("all");
    const [isHidden, setHidden] = useState<boolean>(false);
    const newId = useRef<number>(0);

    const taskEntry = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskInput(event.currentTarget.value);
    }

    const taskCreation = (key: string) => {
        if (key === 'Enter') {
            const newTask: ITask = {
                id: newId.current,
                name: taskInput,
                isDone: false
            }
            newId.current += 1;
            setTaskInput("");
            setTasks([...tasks, newTask]);
        }
    }

    const changeTask = (newValue: ITask) => {
        setTasks((prevState) => {
            const newData = [...prevState];
            const index = prevState.findIndex((task) => task.id === newValue.id);
            if (index < 0) return prevState;
            newData[index] = newValue;
            return newData;
        });
    };

    const clearCompleted = () => {
        setTasks(tasks.filter(task => !task.isDone));
    }

    const onClick = (nameBtn: buttonType) => {
        setActiveButton(nameBtn);
    }

    return (
        <div className={Styles.content}>
            <div className={Styles.input}>
                <button onClick={() => setHidden(!isHidden)}
                        className={clsx(Styles.btnShow, isHidden && Styles.btnShowActive)}><DownArrow/></button>
                <input type={"text"} placeholder={"What needs to be done?"} value={taskInput}
                       onChange={event => taskEntry(event)} onKeyDown={(event) => taskCreation(event.key)}/>
            </div>
            <div className={clsx(Styles.tasks)}>
                {!isHidden && filteredTasks(activeButton, tasks)?.map((task) => <Todo key={task.id} data={task}
                                                                                      changeTask={changeTask}/>)}
            </div>
            <div className={Styles.controlPanel}>
                <p>{`${filteredTasks("active", tasks)?.length} items left`}</p>
                <div className={Styles.filter}>
                    <Button type={"all"} isActive={"all" === activeButton} onClick={onClick}/>
                    <Button type={"active"} isActive={"active" === activeButton} onClick={onClick}/>
                    <Button type={"completed"} isActive={"completed" === activeButton} onClick={onClick}/>
                </div>
                <div>
                    <Button type={"clearCompleted"} clearCompleted={clearCompleted}/>
                </div>
            </div>
        </div>
    )
};

export default Todos;
