import React, { FC, useMemo, useRef, useState } from 'react';
import Styles from './Todos.module.scss';
import DownArrow from 'src/shared/uiKit/icons/DownArrow';
import Task, { ITask } from 'src/feature/Home/Task/Task';
import clsx from 'clsx';
import { filterTasks } from 'src/widgets/Home/Todos/helper';
import TaskActionButton, { ButtonType } from 'src/feature/Home/TaskActionButton/TaskActionButton';

const Todos: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');
  const [activeButton, setActiveButton] = useState<ButtonType>('all');
  const [isHidden, setHidden] = useState<boolean>(false);
  const newId = useRef<number>(0);
  const filteredTasks = useMemo(() => filterTasks(activeButton, tasks), [activeButton, tasks]);
  const countActiveTasks = useMemo(() => filterTasks('active', tasks)?.length ?? 0, [tasks]);

  const entryTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(event.currentTarget.value);
  };

  const createTask = (key: string) => {
    if (key !== 'Enter') {
      return;
    }
    const newTask: ITask = {
      id: newId.current,
      name: taskInput,
      isDone: false,
    };
    newId.current += 1;
    setTaskInput('');
    setTasks([...tasks, newTask]);
  };

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
    setTasks(tasks.filter((task) => !task.isDone));
  };

  const onClick = (nameBtn: ButtonType) => {
    setActiveButton(nameBtn);
  };

  return (
    <div className={Styles.content}>
      <div className={Styles.input}>
        <button
          onClick={() => setHidden(!isHidden)}
          className={clsx(Styles.btnShow, isHidden && Styles.btnShowActive)}
        >
          <DownArrow />
        </button>
        <input
          type={'text'}
          placeholder={'What needs to be done?'}
          value={taskInput}
          onChange={(event) => entryTask(event)}
          onKeyDown={(event) => createTask(event.key)}
        />
      </div>
      <div className={clsx(Styles.tasks)}>
        {!isHidden &&
          filteredTasks?.map((task) => <Task key={task.id} data={task} changeTask={changeTask} />)}
      </div>
      <div className={Styles.controlPanel}>
        <p>{`${countActiveTasks} items left`}</p>
        <div className={Styles.filter}>
          <TaskActionButton type={'all'} isActive={'all' === activeButton} onClick={onClick} />
          <TaskActionButton
            type={'active'}
            isActive={'active' === activeButton}
            onClick={onClick}
          />
          <TaskActionButton
            type={'completed'}
            isActive={'completed' === activeButton}
            onClick={onClick}
          />
        </div>
        <div>
          <TaskActionButton type={'clearCompleted'} clearCompleted={clearCompleted} />
        </div>
      </div>
    </div>
  );
};

export default Todos;
