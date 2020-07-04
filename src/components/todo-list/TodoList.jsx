import React, { Component } from "react";
import ToDoItem from "../todo-item/TodoItem"
export default class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {todoList, onToggleSTT, onRemoveTodo, onPrepareRemove } = this.props;
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {todoList.map((el, index) => (
            <ToDoItem
              key={index}
              index={index}
              todo={el}
              toggleSTT={() => onToggleSTT(index)}
              onPrepareRemove= {() => onPrepareRemove(index)}
              removeTodo={() => onRemoveTodo(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
