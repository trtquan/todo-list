import React, { Component } from "react";
import ToDoItem from "../todo-item/TodoItem"
export default class ToDoList extends Component {

  
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
              onToggleSTT={() => onToggleSTT(index)}
              onPrepareRemove= {() => onPrepareRemove(index)}
              onRemoveTodo={() => onRemoveTodo(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
