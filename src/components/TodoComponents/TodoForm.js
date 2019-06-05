import React, { Component } from 'react'

export default class TodoForm extends Component {
  render() {
    const {todo, handleChange, handleSubmit} = this.props;
    return (
      <div>
      Todo Form here!
      <form onSubmit={this.handleSubmit}>

      </form>
      <input
        type="text"
        placeholder="add todo items"
        value={todo}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      </div>
    )
  }
}
