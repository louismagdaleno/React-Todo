import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './reset.css';
import './app.css';


class App extends React.Component {
  constructor(){
    super(),
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
          id: 1528818084358,
          completed: false
        }

      ],  
      textValue: "",
      myTaskName: ""
    };
}
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addToDoHandler = event => {
    event.preventDefault();
    this.setState({
      todos : [...this.state.todos, 
        { task: this.state.myTaskName, 
          id: Date.now(), 
          completed: false }],
      myTaskName: ''
    })
  }
  render() {
    return (
      <div className="wrapper">
        <TodoList myTaskName={this.state.myTaskName} todos={this.state.todos} />
        <TodoForm 
          addToDoHandler={this.addToDoHandler}
          textValue={this.state.textValue}
          changeHandler={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
