import React, {useContext} from 'react';

import styles from './Task.module.scss';
import TasksStore, {ITask} from "../../stores/TasksStore"
import {ReactComponent as CheckMark} from "../../assets/checkmark.svg"
import {ReactComponent as DeleteIcon} from "../../assets/close.svg"


interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = (props) => {
    const {changeStatus, deleteTask} = useContext(TasksStore);
    return (
        <div className={styles.task}>
            <button className={props.task.completed ? styles.taskCompleted : styles.taskUncompleted}
                    aria-label="Отметить задачу выполненной"
                    onClick={() => changeStatus(props.task.id)}>
                <CheckMark className={styles.checkMark}/>
            </button>
            <div className={styles.textWrapper}>
                <p className={styles.text}>{props.task.text}</p>
                <button className={styles.deleteBottom} onClick={() => deleteTask(props.task.id)}>
                    <DeleteIcon className={styles.deleteIcon}/>
                </button>
            </div>
        </div>
    );
};

export default Task;
