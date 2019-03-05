import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        super(props),
        this.state = { 
            task: props.todo.task,
            id: props.todo.id,
            completed: props.todo.completed

        };
    }

    render() {
        return (
            <div className="todo" >
                <h2>{this.state.task}</h2>
                <p>{this.state.id}</p>
                <p>{this.state.completed ? 'Done' : 'Not Done'}</p>

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