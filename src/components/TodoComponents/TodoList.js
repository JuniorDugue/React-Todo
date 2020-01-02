// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h2 className="text-capitalize text-center">Todo List</h2>
        <Todo/>
      </ul>
    )
  }
}

