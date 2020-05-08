import { action, observable } from "mobx";
import todoStore from "../Stores/TodoStore"
export default class TodoModel {

    store
    id
    @observable titel
    @observable completed

    constructor(store, titel, completed, id) {
        this.titel = titel
        this.completed = completed
        this.id = id
        this.store = store
    }

    @action
    toggle() {
        this.completed = !this.completed
    }

    @action
    remove(){
        todoStore.removeTodo(this.id)
    }

}