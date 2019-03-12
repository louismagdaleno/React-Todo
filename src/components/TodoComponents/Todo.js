import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

// TODO COMPONENT
// * Receives props and stores them in state
// * Props expected: 
// *    todo (object)
// *        contains:
// *            task ( string )
// *            id ( number )
// *            completed ( boolean )
const Todo = (props) => {
        return (
            <div className="todo"  
            onClick={() => props.toggleCompleted(props.todo.id)}>
                <h2 style={props.todo.completed ? { textDecoration: 'line-through', textDecorationStyle: 'solid' } : null}>{props.todo.task}</h2>
                <input type="checkbox" checked={props.todo.completed ? 'Checked' : ''} />
                
            </div>
        );
    
}

// Typechecking props
Todo.propTypes = {
    todo: PropTypes.object,
    task: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
    key: PropTypes.number
};

export default Todo;