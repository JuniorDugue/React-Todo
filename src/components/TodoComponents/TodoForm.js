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
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("LIST ITEM PROPS:", this.props.addNewTask);
    console.log(this.state.todo);
    this.props.addNewTask(this.state.todo);
    this.setState({ todo: "" });
  };

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>

      <input
        type="text"
        placeholder="add todo items"
        value={this.state.todo}
        onChange={this.handleChange}
      />
      <button type="submit">Submit</button>
      {/* <button type="button" onClick={clearList}>Clear</button> */}
      </form>
      </div>
    )
  }
}
