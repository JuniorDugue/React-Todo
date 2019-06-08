import React from 'react'

const Todo = (props) => {
  const clickHandler = () => {
    props.toggleTask(props.todoTask.id)
  }
  return (
    <div className={`item${props.todoTask.uncompleted ? " uncompleted" : ""}`} onClick={clickHandler}>
    <p>{props.todoTask.task}</p>
    </div>
  )
}

export default Todo
