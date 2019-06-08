import React from 'react'

const Todo = (props) => {
  const clickHandler = () => {
    props.toggleTask(props.todoTask.id);
  }
  return (
    <div 
    className={`task${props.todoTask.completed ? " completed" : ""}`} onClick={clickHandler}>
    <p>{props.todoTask.task}</p>
    </div>
  )
}

export default Todo
