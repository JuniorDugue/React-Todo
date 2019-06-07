import React from 'react';
// import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from './components/TodoComponents/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
    this.state = {
      uncompletedTasks: tasks
    //     todos: [
    //       {id: 1528817077286, task: "wake up", completed: false},
    //       {id: 1528817077287, task: "learn react", completed: false}
    //   ],
    //   todo: ""
    // }
    };
}

addTask = newTask => {
  const newTodoTask = {
    task: newTask,
    id: Date.now(),
    completed: false
  };

  this.setState({
    uncompletedTasks: [...this.state.uncompletedTasks, newTodoTask]
  });
}

toggleTask = id => {
  const newTask = this.state.uncompletedTasks.map(task =>{
    if(task.id === id){
      const newObj = {
        ...task,
        completed: !task.completed
      };
      return newObj;
    }else {
      return task;
    }
  })

  this.setState( { uncompletedTasks: newTask});
}

// handleChange = (e) =>{
//   this.setState({
//     todo: e.target.value
//   })
// };

// handleSubmit = (e) =>{
//   e.preventDefault();
//   const newTodo={
//     id:this.state.id,
//     task:this.state.todo
//   }

//  const newTodos = [...this.state.todos,newTodo];

//   this.setState({
//     todos: newTodos, 
//     todo: ""
//   },
//   // ()=> console.log(this.state)
//   )
// };

// clearList = () =>{console.log("clear list");};
// handleDelete = id => {console.log(`handle delete ${id}`);};

  render() {

    return (
      <div className="container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          tasks={this.state.uncompletedTasks}
        />
        <TodoForm 
          addNewTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
