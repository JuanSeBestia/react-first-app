
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Task from './Task';
import FormTask from './FormTask';
import { todos } from '../../mocks/tasks.json'

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todos,
        };
        console.log("Hellow Component Tasks", { this: this });
        this.handleAddTask = this.handleAddTask.bind(this);

    }

    handleAddTask(todo) {
        //this.state.todos.push(todo);
        //this.forceUpdate();
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    removeTask(index) {
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i !== index
            })
        });
    }

    render() {
        console.log("render TaskS", { this: this });
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
}

export default Tasks;