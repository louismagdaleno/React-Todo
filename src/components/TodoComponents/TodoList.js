// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(){
        super(),
        this.state = { todos:[
            {
              task: 'Organize Garage',
              id: 1528817077286,
              completed: false
            },
            {
              task: 'Bake Cookies',
              id: 1528817084358,
              completed: false
            }
          ]};
    }

    render = () => {
        return (
            <div className="todoList">
                <h1>Todo List</h1>
                {this.state.todos.map( todo => (<Todo todo={todo}  key={todo.id.toString()}/>))}
            </div>
        );
    }
}

export default TodoList;