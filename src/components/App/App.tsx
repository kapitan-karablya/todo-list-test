import React from 'react';
import NewTask from "../NewTask/NewTask";
import TasksList from "../TasksList/TasksList";
import styles from "./App.module.scss"

function App() {
    return (
        <div>
            <header className={styles.header}>Список Задач</header>
            <main className={styles.main}>
                <div className={styles.mainContent}>
                <NewTask/>
                <TasksList/>
                </div>
            </main>
        </div>
    )
}

export default App;
