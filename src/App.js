import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import { v4 as uuid } from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'clean up the trash',
        completed: false,
      },
      {
        id: uuid(),
        title: 'pay the mobile bill',
        completed: false,
      },
      {
        id: uuid(),
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
      id: uuid(),
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
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              path='/'
              exact
              render={(props) => (
                <React.Fragment>
                  <AddToDo addToDo={this.addToDo} />
                  <Todos
                    todos={this.state.todos}
                    checkMark={this.checkMark}
                    deleteToDo={this.deleteToDo}
                  />
                </React.Fragment>
              )}
            />
            <Route path='/About' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
