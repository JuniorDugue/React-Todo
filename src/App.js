import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state={
    data: [{id: 1528817077286, task: "Organize Garage", completed: false,}, {id: 1528817084358, task: "Bake Cookies", completed: false,}, {id: Date.now(), task: "", completed: false, tasks: [],}]
  }

  handleChange = e => {
    console.log("handle changes")
    this.setState({
      completed: e.target.value
    })
  };

  handleSubmit = e => {
    console.log("handle submits")
    e.preventDefault();
    const newTask = {
      id: this.state.id,
      task: this.state.task
    }

    const updatedTasks = [...this.state.tasks,newTask]

    this.setState({
      tasks: updatedTasks,
      task: "",
      id: Date.now(),
      completed: false,
    })
  };

  clearCompleted = () => {
    console.log("clears completed")
    this.setState({
      tasks: []
    })
  }

  handleDelete = id => {
    console.log(`"handles deletions of ${id}"`)
  }

  handleEdit = id => {
    console.log(`edits ${id}`)
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h2 className="text-capitalize text-center">Welcome to your Todo App!</h2>
            <TodoForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              task={this.state.task}
              completed={this.state.completed}
            />
            <TodoList
              task={this.state.task}
              clearCompleted={this.state.clearCompleted}
              handleDelete={this.state.handleDelete}
              handleEdit={this.state.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
