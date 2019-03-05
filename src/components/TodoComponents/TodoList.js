// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props)
        
    }

    render = () => {
        return (
            <div className="todoList">
                <h1>Todo List</h1>
                {this.props.todos.map( todo => (<Todo todo={todo}  key={todo.id.toString()}/>))}
            </div>
        );
    }
}

export default TodoList;