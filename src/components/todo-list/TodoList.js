import React, { Component } from "react";
import ToDoItem from "../todo-item/TodoItem"

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {this.props.todoList.map((el, index) => (
            <ToDoItem
              key={index}
              index={index}
              todo={el}
              toggleSTT={() => this.props.onToggleSTT(index)}
              removeTodo={() => this.props.onRemoveTodo(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
