import React from "react";
const initialTodo = { description: "", isCompleted: false };
export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialTodo;
    this.inputRef = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    const desc = this.inputRef.current.value.trim();
    if (!desc) return;
    this.props.onAdd(desc);
    this.inputRef.current.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="todo-input"
          maxLength="40"
        />

        <button type="submit" className="todo-button">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={e => this.props.onFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}


