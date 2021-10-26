import {observable, action, makeAutoObservable} from "mobx"
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
        const newId = (Math.max.apply(null, Array.from(this.tasks.keys()))) + 1;
        this.tasks.set(newId, {...task, id: newId})
    };

    @action changeStatus = (id: number) => {
        let task:ITask = this.tasks.get(id)!;
        this.tasks.set(id, { ...task, completed: !task.completed})

    };

    @action deleteTask = (id: number) => {
        this.tasks.delete(id);
    };

}

export default createContext(new TaskStore())