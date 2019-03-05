import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          dts: '',
          completed: false
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    
  
    handleSubmit(event) {
        let date =  Date.now();

      this.setState({
        value: this.state.value,
        dts: date,
        completed: false
      })
      alert(JSON.stringify(this.state));
      event.preventDefault();
    }

    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Add Todo</h2>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default TodoForm;