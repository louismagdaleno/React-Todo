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

    render() {
        return (
            <div className="todo" task={this.props.task} onClick={this.props.toggleCompleted}>
                <h2>{this.props.todo.task}</h2>
                <input type="checkbox" checked={this.props.todo.completed ? 'Checked' : ''} />
                
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