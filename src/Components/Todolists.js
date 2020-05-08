import React, { Component } from 'react'
import Todoitem from './Todoitem'
import TodoEntry from './TodoEntry'
import todoStore from "../Stores/TodoStore"
import { observer } from 'mobx-react';

@observer
class Todolists extends Component {

    state = {viewType : "All" }
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="todolist not-done">
                        <h1>Todos</h1>
                        <TodoEntry />
                        <ul id="sortable" className="list-unstyled">
                            {(
                                todoStore.GetTodoList().map(todo => {
                                    return (<Todoitem todo={todo} id={todo.id} titel={todo.titel} completed={todo.completed} />)
                            }))
                            }
                            
                        </ul>
                        <div className="todo-footer">
                            <strong><span className="count-todos">{todoStore.todos.filter(todo => {return todo.completed === false} ).length}</span></strong> Items Left
                            <button className="count-todos" onClick={()=> todoStore.SetViewType("All")}> All </button>
                            <button className="count-todos" onClick={()=> todoStore.SetViewType("Active") }> Active </button>
                            <button className="count-todos" onClick={()=> todoStore.SetViewType("Completed")} > Completed </button>

                            <button className="count-todos" onClick={()=> todoStore.removeCompleted()} > Remove Completed </button>
							
						</div>
                    </div>
                </div>
                
            </div>
        </div>)
    }
}

export default Todolists