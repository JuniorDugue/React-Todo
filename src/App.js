import React from 'react';
import Todo from "./components/TodoComponents/Todo";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  
  this.state = {
    todo: [
      {id: 1528817077286, task: "wake up", completed: false},
      {id: 1528817077287, task: "learn react", completed: false},
      {id: 1528817077288, task: "practice css", completed: false},
      {id: 1528817077289, task: "study MERN stack", completed: false},
      {id: 1528817077290, task: "go to bed", completed: false}
  ]
  }
}

  render() {
    // console.log(state); 
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo/>
      </div>
    );
  }
}

export default App;
