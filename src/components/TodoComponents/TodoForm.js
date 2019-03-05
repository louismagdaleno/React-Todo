import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

class TodoForm extends React.Component {
    constructor(props) {
      super(props); 
    }
    

    render() {
      return (
        <form className="todoForm" onSubmit={this.props.addToDoHandler}>
          <h2>Add Todo</h2>
           <input type="text" name="myTaskName" placeholder="What to do?" value={this.props.myTaskName} onChange={this.props.changeHandler} />
          <button onClick={this.props.addNewToDo}>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      );
    }
  }

// Typechecking props
TodoForm.propTypes = {
    addToDoHandler: PropTypes.function,
    addNewToDo: PropTypes.function
};

  export default TodoForm;