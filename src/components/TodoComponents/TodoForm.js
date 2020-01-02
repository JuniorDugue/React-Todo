import React, { Component } from 'react'

export default class TodoForm extends Component {
  render() {
    const {task, handleChange, handleSubmit, completed} = this.props;

    return (
      <div className="card card-body my-3">
        <h2>Todo Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
              <input className="form-control text-capitalize"
                type="text"
                placeholder="Add tasks here"
                value={task}
                onChange={handleChange}
              />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">Add</button>
        </form>
      </div>
    )
  }
}
