import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './reset.css';
import './app.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = { 
      todos:[
        
        {
          task: 'Learn React',
          id: 1528817084351,
          completed: false
        },
        {
          task: 'Learn Redux',
          id: 1528417084358,
          completed: false
        },
        {
          task: 'Learn Node',
          id: 1528818034358,
          completed: true
        }

      ],  
      textValue: "",
      myTaskName: ""
    };
}
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  toggleCompleted = event => {
    // grab the object from todos that has the same task as the event target
    let newObj = this.state.todos.filter(todo => todo.task === event.target.querySelector('h2').textContent);
    // set the completed status of the item to opposite of current status
    newObj[0].completed = !newObj[0].completed;

    // update state with current state
    this.setState({
      todos : [...this.state.todos]
    })
    
  }
    
  addToDoHandler = event => {
    event.preventDefault();
    if (this.state.myTaskName === (null || undefined || '') ) {
      // do something here to let the user know they cant create an empty task
    } else {
      this.setState({
        todos : [...this.state.todos, 
          { task: this.state.myTaskName, 
            id: Date.now(), 
            completed: false }],
        myTaskName: ''
      })
    }
    
  }

  filterCompletedToDos = event => {
    this.setState({
      todos : this.state.todos.filter(todo => !todo.completed)
    })
  }
  render() {
    return (
      <div className="wrapper">
        <TodoList 
          toggleCompleted={this.toggleCompleted} 
          myTaskName={this.state.myTaskName} 
          todos={this.state.todos} />

        <TodoForm
          filterCompletedToDos={ this.filterCompletedToDos } 
          addToDoHandler={ this.addToDoHandler }
          textValue={ this.state.textValue }
          changeHandler={ this.changeHandler }/>
      </div>
    );
  }
}

export default App;
