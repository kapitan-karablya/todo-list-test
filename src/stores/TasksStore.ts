import {observable, action, computed, makeAutoObservable} from "mobx"
import {createContext} from "react"

const testData = [
    {id: 1, text: "задача 1", completed: false},
    {id: 2, text: "задача 2", completed: false},
    {id: 3, text: "задача 3", completed: false},
    {id: 4, text: "задача 4", completed: false},
    {id: 5, text: "задача 5", completed: true},
    {id: 6, text: "задача 6", completed: false},
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

    @observable tasks: Map<number, ITask> = new Map(testData.map(task => [task.id, task] as [number, ITask]));

    @action addTask = (task: ITask) => {
        const newId = (Math.max.apply(null, [...this.tasks.keys()])) + 1;
        this.tasks.set(newId, {...task, id: newId})
    };

    @action changeStatus = (id: number) => {
        let task:ITask = this.tasks.get(id)!;
        this.tasks.set(id, { ...task, completed: !task.completed})
    };

    @action deleteTask = (id: number) => {
        this.tasks.delete(id);
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