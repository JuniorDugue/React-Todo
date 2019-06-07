import React from 'react'

const Todo = (props) => {
  const clickHandler = () => {
    props.toggleTask(props.todoTask.id)
  }
  return (
    <div className={`item${props.todoTask.uncompleted ? " uncompleted" : ""}`} onClick={clickHandler}>
    </div>
  )
}

export default Todo
