import React, {useState} from 'react';
import NewTask from "../NewTask/NewTask";
import TasksList from "../TasksList/TasksList";
import styles from "./App.module.scss"

function App() {
    const [selectValue, setSelectValue] = useState("all");
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value);
    };
    return (
        <div>
            <header className={styles.header}>Список Задач</header>
            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.controlElements}>
                        <NewTask/>
                        <select className={styles.select} value={selectValue} onChange={(event) => handleChange(event)}>
                            <option value="all">Все</option>
                            <option value="completed">Завершенные</option>
                            <option value="uncompleted">Незавершенные</option>
                        </select>
                    </div>
                    <TasksList selectValue={selectValue}/>
                </div>
            </main>
        </div>
    )
}

export default App;
