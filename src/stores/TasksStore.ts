import {observable, action, computed, makeAutoObservable} from "mobx"
import {createContext} from "react"

const testData = [
    {id: 1, text: "Выполнить задание", completed: false},
    {id: 2, text: "Сходить в магазин", completed: false},
    {id: 3, text: "Придумать задание", completed: true},
    {id: 4, text: "Ещё одна задача", completed: false},
    {id: 5, text: "Задача 5", completed: true},
    {id: 6, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n", completed: false},
];

export interface ITask {
    id: number;
    text: string;
    completed: boolean;
}

class TaskStore {
    constructor() {
        makeAutoObservable(this)
    }

    @observable tasks: Map<number, ITask> = new Map();

    @action addTask = (task: ITask) => {

        const newId = this.tasks.size === 0 ? 1 :(Math.max.apply(0, [...this.tasks.keys()])) + 1;
        this.tasks.set(newId, {...task, id: newId})
    };

    @action changeStatus = (id: number) => {
        let task:ITask = this.tasks.get(id)!;
        this.tasks.set(id, { ...task, completed: !task.completed})
    };

    @action deleteTask = (id: number) => {
        this.tasks.delete(id);
    };

    @action fillData = () => {
        this.tasks = new Map(testData.map(task => [task.id, task] as [number, ITask]))
    };


    @computed get filter() {
        let completed: Map<number, ITask> = new Map();
        let uncompleted: Map<number, ITask> = new Map();
        for (let task of this.tasks.values())
            task.completed ? completed.set(task.id, task) : uncompleted.set(task.id, task);
        return {
            completed: completed,
            uncompleted: uncompleted
        }
    }
}

export default createContext(new TaskStore())