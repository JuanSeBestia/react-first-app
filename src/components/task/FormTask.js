import React, { Component } from 'react';


class FormTask extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            user: '',
            description: '',
            priority: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("Hellow Component FormTask",{ this: this });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTask(this.state);
        this.setState({
            title: '',
            user: '',
            description: '',
            priority: 'low'
        });
    }

    handleInputChange(e) {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }

    render() {
        console.log("render FormTask", { this: this });
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="user"
                            className="form-control"
                            value={this.state.user}
                            onChange={this.handleInputChange}
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            value={this.state.priority}
                            onChange={this.handleInputChange}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
              </button>
                </form>
                <p>All info {this.state.title} - {this.state.description} - {this.state.user} - {this.state.priority}</p>
            </div>
        )
    }

}


export default FormTask;