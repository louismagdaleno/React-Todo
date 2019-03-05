import React, { Component } from 'react';
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
class Todo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="todo" >
                <h2>{this.props.todo.task}</h2>
                <p>{this.props.todo.id}</p>
                <p>{this.props.todo.completed ? 'Done' : 'Not Done'}</p>

            </div>
        );
    }
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