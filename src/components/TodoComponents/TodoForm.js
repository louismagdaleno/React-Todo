import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    render() {
      return (
        <form className="todoForm" onSubmit={this.props.addToDoHandler}>
          <h2>Add Todo</h2>
           <input type="text" name="myTaskName" placeholder="What to do?" value={this.props.myTaskName} onChange={this.props.changeHandler} />
          <button >Add Todo</button>
          <button onClick={ this.props.filterCompletedToDos }> Clear Completed</button>
        </form>
      );
    }
  }


  export default TodoForm;