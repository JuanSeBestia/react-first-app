import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import { todos } from './mocks/tasks.json'
import { DISHES } from './shared/dishes'

import Navigation from './components/navigation/Navigations';
import Task from './components/task/Task';
import FormTask from './components/forms/FormTask';
import Menu from './components/menu/MenuComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Tasks",
      nTasks: 10,
      todos: todos,
      dishes: DISHES,
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

  TasksComponent = () => {
    const tasks = this.state.todos.map((task, i) => {
      return (
        <Col md="4" key={task.title}>
          <Task title={task.title} task={task}></Task>
        </Col>
      )
    });
    return (
      <Container>
        <Row className="mt-4">
          <Col md="4">
            <FormTask onAddTask={this.handleAddTask}></FormTask>
          </Col>
          {tasks}
        </Row>
      </Container>
    )
  }

  render() {
    return (
      <div className="App">
        <Navigation notification={this.state.todos.length} title={this.state.title}></Navigation>

        <Menu dishes={this.state.dishes} />

        <this.TasksComponent />

      </div>
    );
  }
}

export default App;
