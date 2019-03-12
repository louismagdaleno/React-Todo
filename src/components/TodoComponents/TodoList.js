import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import './Todo.css';

const TodoList = (props) => {
   
        return (
            <div className="todoList">
                <h1>React - Todo List</h1>
                <hr />
                {props.todos.map( (todo,index)=> (<Todo todo={todo}  completed={todo.completed} toggleCompleted={props.toggleCompleted} key={todo.id.toString()}/>))}
            </div>
        );
    
}

TodoList.propTypes = {
    todos : PropTypes.array
};

export default TodoList;