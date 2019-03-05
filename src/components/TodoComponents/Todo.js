import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props),
        this.state = { 
            task: props.todo.task,
            id: props.todo.id,
            completed: props.todo.completed

        };
    }

    render() {
        return (
            <div className="todo">
                <h2>{this.state.task}</h2>
                <p>{this.state.completed ? 'Done' : 'Not Done'}</p>

            </div>
        );
    }
}

export default Todo;