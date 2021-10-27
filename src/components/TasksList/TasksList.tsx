import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";

import TasksStore, {ITask} from "../../stores/TasksStore";
import Task from "../Task/Task";
import styles from "./TasksList.module.scss"

interface TasksListProps {
    selectValue: string
}

const TasksList: React.FC<TasksListProps> = (props) => {
    const tasksStore = useContext(TasksStore);
    const {tasks, filter, fillData} = tasksStore;


    const value: Map<number, ITask> = props.selectValue === "all" ? tasks :
        props.selectValue === "completed" ? filter.completed : filter.uncompleted;

    return (
        <div className={styles.tasksList}>
            {value.size === 0 ?
                <div className={styles.emptyList}>
                    Задач нет
                    <button className={styles.buttonTestData} onClick={() => {fillData()}}>Заполнить тестовыми данными</button>
                </div>
                : [...value.values()].map(task => (
                    <Task task={task}/>
                ))}
        </div>
    );
};

export default observer(TasksList);
