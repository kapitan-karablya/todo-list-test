import React, {useContext, useState} from 'react';
import './NewTask.scss';
import TasksStore from "../../stores/TasksStore";
import {observer} from "mobx-react-lite";


function NewTask() {
    const [text, setText] = useState("");
    const taskStore = useContext(TasksStore);
    const {addTask} = taskStore;
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={text}
                    placeholder="Текст Задачи"
                    onChange={e => setText(e.target.value)}
                />
            </div>
            <div>
                <button onClick={() => {
                    addTask({
                        id: 0,
                        text: text,
                        completed: false,
                    });
                    setText("")
                }}>
                    Добавить задачу
                </button>
            </div>
        </div>
    );
}

export default observer(NewTask);
