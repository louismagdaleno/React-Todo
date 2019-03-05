import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import './Todo.css';

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

TodoList.propTypes = {
    todos : PropTypes.object
};

export default TodoList;