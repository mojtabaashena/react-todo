import { observable, action } from "mobx";
import TodoModel from './TodoModel'

class TodoStore {

    
    @observable todos = []
    @observable viewType 
    lastId = 1

    @action
    addTodo(titel) {
        this.todos.push(new TodoModel(this, titel, false , this.lastId++))
    }

    @action
    removeTodo(id) {
        this.todos = this.todos.filter(todo => {return todo.id !== id} )
    }

    @action
    removeCompleted() {
        this.todos = this.todos.filter(todo => {return todo.completed === false} )
    }

    @action
    SetViewType(viewType){
        this.viewType = viewType
    }

    
    @observable
    GetTodoList(){
        if( this.viewType === "Completed" ){
            return this.todos.filter(todo => {return todo.completed === true} )
        }
        else if( this.viewType === "Active" ){ 
             return this.todos.filter(todo => {return todo.completed === false} )
        }
        else{
            return this.todos
        }    
    }
}

const store = new TodoStore()
export default store