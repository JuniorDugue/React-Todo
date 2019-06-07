// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react'
// import TodoForm from "./TodoForm";

import Todo from "./Todo";
// import TodoForm from "./TodoForm";

export default class TodoList extends Component {
  render() {
    const {todos, handleDelete} = this.props
    return (
      <div>
        TodoList here!
        {/* <Todo/> */}
        {/* <TodoForm/> */}
        {todos.map(todo => {
          return (<Todo key={todo.id} 
          task={todo.task}> 
          handleDelete={ ()=> handleDelete(todo.id)}
          </Todo>)
        })}
      </div>
    )
  }
}
