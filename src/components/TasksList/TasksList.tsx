import React, {useContext} from 'react';

import './TasksList.scss';
import TasksStore from "../../stores/TasksStore";
import Task from "../Task/Task";
import {observer} from "mobx-react-lite";

const TasksList = () => {
    const tasksStore = useContext(TasksStore);
    const {tasks} = tasksStore;
    return (
        <div>
            {Array.from(tasks.values()).map(task => (
                <Task task={task}/>
            ))}
        </div>
    );
};

export default observer(TasksList);
