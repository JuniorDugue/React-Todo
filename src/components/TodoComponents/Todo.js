import React from 'react'

const Todo = (props) => {
  const clickHandler = () => {
    props.toggleTask(props.todoTask)
  }
  return (
    <div>
      Todo here
    </div>
  )
}

export default Todo
