import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'clean up the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'pay the mobile bill',
        completed: false,
      },
      {
        id: 3,
        title: 'start react crash course',
        completed: false,
      },
    ],
  };

  checkMark = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteToDo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  render() {
    return (
      <div className='App'>
        <h2>This is the App component</h2>
        <Todos
          todos={this.state.todos}
          checkMark={this.checkMark}
          deleteToDo={this.deleteToDo}
        />
      </div>
    );
  }
}

export default App;
