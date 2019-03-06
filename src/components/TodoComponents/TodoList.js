import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import './Todo.css';

class TodoList extends Component {
    render = () => {
        return (
            <div className="todoList">
                <h1>React - Todo List</h1>
                <hr />
                {this.props.todos.map( todo => (<Todo todo={todo}  toggleCompleted={this.props.toggleCompleted} key={todo.id.toString()}/>))}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos : PropTypes.array
};

export default TodoList;