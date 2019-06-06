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
          {id: 1528817077287, task: "learn react", completed: false}
      ],
      todo: ""
    }
}

handleChange = (e) =>{
  this.setState({
    todo: e.target.value
  })
};

handleSubmit = (e) =>{
  e.preventDefault();
  const newTodo={
    id:this.state.id,
    task:this.state.todo
  }

 const newTodos = [...this.state.todos,newTodo];

  this.setState({
    todos: newTodos, 
    todo: ""
  })
};

clearList = () =>{console.log("clear list");};
handleDelete = id => {console.log(`handle delete ${id}`);};

  render() {
    // console.log(this.state); 
    
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
