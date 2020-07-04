import React from "react";

export default class TodoItem extends React.Component {

  render() {

    const {todo, onToggleSTT, onPrepareRemove, onRemoveTodo} = this.props;
    return (
      <div onAnimationEnd={onRemoveTodo}
       className={`todo ${todo.isCompleted ? "completed" : "uncompleted"}
                  ${todo.isRemoved ? "fall" : "" }`}>
        <li className="todo-item">{todo.task}</li>

        <button className="check-btn" onClick={onToggleSTT}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={onPrepareRemove}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}
