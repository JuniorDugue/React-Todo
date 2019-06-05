import React from 'react';
import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
    this.state = {
        todos: [
          {id: 1528817077286, task: "wake up", completed: false},
          {id: 1528817077287, task: "learn react", completed: false},
          {id: 1528817077288, task: "practice css", completed: false},
          {id: 1528817077289, task: "study MERN stack", completed: false},
          {id: 1528817077290, task: "go to bed", completed: false}
      ],
      todo: ""
    }
}

handleChange = (e) =>{console.log("handle change");};
handleSubmit = (e) =>{console.log("handle submit");};
clearList = () =>{console.log("clear list");};
handleDelete = id => {console.log(`handle delete ${id}`);};

  render() {
    // console.log(state); 
    return (
      <div className="container">
        <h2>Welcome to your Todo App!</h2>
        <Todo />
        <TodoList 
        todos={this.state.todos} 
        handleChange={this.handleChange}
        clearList={this.clearList} 
        handleDelete={this.handleDelete}
        />
        <TodoForm 
        todo={this.state.todo} 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} 
        />
      </div>
    );
  }
}

export default App;
