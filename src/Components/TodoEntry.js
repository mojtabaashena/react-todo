import React, { Component } from 'react'
import todoStore from '../Stores/TodoStore'

class TodoEntry extends Component {
    state = {
        value: ''
    }

    handleKeyDown(event) {
        if (event.keyCode !== 13)
            return;
        event.preventDefault()
        todoStore.addTodo(this.state.value)
        this.setState({value:''})
    }

    
    render() { return(
        <div>
            <input type="text" className="form-control add-todo" value={this.state.value}  placeholder="Add todo"
                onChange={event => this.setState({ value: event.target.value })}
                onKeyDown={event => this.handleKeyDown(event)} />
            <hr />
        </div>
    )
    }
}

export default TodoEntry
