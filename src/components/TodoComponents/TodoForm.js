import React, { Component } from 'react'
export default class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: ""
    };
  }

  handleChange = e => {
    this.setState( {todo: e.target.value} );
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTask(this.state.todo);
    this.setState({todo: ""})
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>

      </form>
      <input
        type="text"
        placeholder="add todo items"
        value={this.state.todo}
        onChange={this.handleChange}
      />
      <button type="submit">Submit</button>
      {/* <button type="button" onClick={clearList}>Clear</button> */}
      </div>
    )
  }
}
