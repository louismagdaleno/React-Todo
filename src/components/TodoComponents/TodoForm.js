import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    
      return (
        <form className="todoForm" onSubmit={props.addToDoHandler}>
          <h2>Add Todo</h2>
           <input type="text" name="myTaskName" placeholder="What to do?" value={props.myTaskName} onChange={props.changeHandler} />
          <button >Add Todo</button>
          <button onClick={ props.filterCompletedToDos }> Clear Completed</button>
        </form>
      );
    
  }


  export default TodoForm;