import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";

import TasksStore from "../../stores/TasksStore";
import Task from "../Task/Task";
import styles from "./TasksList.module.scss"


const TasksList = () => {
    const tasksStore = useContext(TasksStore);
    const {tasks, filter} = tasksStore;

    return (
        <div className={styles.tasksList}>
            {[...tasks.values()].map(task => (
                <Task task={task}/>
            ))}
        </div>
    );
};

export default observer(TasksList);
