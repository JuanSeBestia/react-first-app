import React, { Component } from 'react';


class Task extends Component {
    constructor() {
        super();
        console.log("Hellow Component Task", { this: this });

    }
    render() {
        console.log("render Task", { this: this });
        return (
            <div className="card mt-4">
                <div className="card-header">
                    <h3>{this.props.title}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                        {this.props.task.priority}
                    </span>
                </div>
                <div className="card-body">
                    <p>{this.props.task.description}</p>
                    <p>{this.props.task.user}</p>
                </div>
            </div>
        )
    }
}

export default Task;