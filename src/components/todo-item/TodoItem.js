import React from "react";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  prepareRemove = (e) => {
    e.stopPropagation();
    this.props.onPrepareRemove();
  };

  onRemove = (e) => {
    e.stopPropagation();
    this.props.removeTodo();
  };

  render() {

    const {todo, toggleSTT} = this.props;
    return (
      <div onAnimationEnd={(e) => this.onRemove(e)} className={`todo ${todo.isCompleted ? "completed" : "uncompleted"} ${
      todo.isRemoved ? "fall" : ""
    }`}>
        <li className="todo-item">{todo.task}</li>

        <button className="check-btn" onClick={toggleSTT}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={(e) => this.prepareRemove(e)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}
