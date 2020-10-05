import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';

import './App.css';

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

  addToDo = (title) => {
    const newToDo = {
      id: 4,
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newToDo] });
  };

  deleteToDo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddToDo addToDo={this.addToDo} />
          <Todos
            todos={this.state.todos}
            checkMark={this.checkMark}
            deleteToDo={this.deleteToDo}
          />
        </div>
      </div>
    );
  }
}

export default App;
