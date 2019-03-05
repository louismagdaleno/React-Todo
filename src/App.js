import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super(),
    this.state = { 
      todos:[
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
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
      <div>
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
