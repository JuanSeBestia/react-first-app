import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './mocks/tasks.json'

import Navigation from './components/navigation/Navigations';
import Task from './components/task/Task';
import FormTask from './components/forms/FormTask';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Tasks",
      nTasks: 10,
      todos: todos
    };
    console.log("Hellow App Component", { todos: todos });
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  removeTask(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTask(todo) {
    this.state.todos.push(todo);
    this.forceUpdate();
    // this.setState({
    //   todos: [...this.state.todos, todo]
    // })
  }

  render() {
    const tasks = this.state.todos.map((task, i) => {
      return (
        <div className="col-md-4" key={task.title}>
          <Task title={task.title} task={task}></Task>
        </div>
      )
    })
    return (
      <div className="App">
        <Navigation notification={this.state.todos.length} title={this.state.title}></Navigation>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            </a>
        </header>
        <FormTask onAddTask={this.handleAddTask}></FormTask>
        <div className="container">
          <div className="row mt-4">
            {tasks}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
