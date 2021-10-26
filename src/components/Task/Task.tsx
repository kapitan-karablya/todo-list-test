import React, { useContext } from 'react';
import './Task.scss';

import TasksStore, {ITask} from "../../stores/TasksStore"

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = (props) => {
    const {changeStatus} = useContext(TasksStore);
  return (
    <div onClick={() => changeStatus(props.task.id)}>
        <span>{props.task.id}</span>
        <span>{props.task.text}</span>
        <span>{props.task.completed ? "done" : ""}</span>
    </div>
  );
};

export default Task;
