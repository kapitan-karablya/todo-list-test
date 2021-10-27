import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";

import styles from "./NewTask.module.scss"
import TasksStore from "../../stores/TasksStore";
import {ReactComponent as AddIcon} from "../../assets/plus.svg"

function NewTask() {
    const [text, setText] = useState("");
    const taskStore = useContext(TasksStore);
    const {addTask} = taskStore;
    return (
        <div className={styles.newTask}>
            <input type="text"
                   placeholder="Текст задачи"
                   className={styles.input}
                   value={text}
                   onChange={e => setText(e.target.value)}
            />
            <button className={styles.addButton} onClick={() => {
                if (text !== "")
                    addTask({
                        id: 0,
                        text: text,
                        completed: false,
                    });
                setText("")
            }}>
                <AddIcon className={styles.addButtonSvg}/>
            </button>
        </div>
    );
}

export default observer(NewTask);
