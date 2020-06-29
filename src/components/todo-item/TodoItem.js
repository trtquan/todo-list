import React from "react";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markForDelete: false };
  }

  render() {
    console.log(this.props);
    
    let todo = this.props.todo;
    let classes = `todo ${todo.isCompleted ? 'completed' : 'uncompleted'} ${this.state.markForDelete ? "fall" : ""}`;
    
    return (
      <div onAnimationEnd={this.props.removeTodo}
           className={classes} >
        <li className="todo-item">{todo.task}</li>

        <button className="check-btn" onClick={this.props.toggleSTT}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={() => this.setState({markForDelete: true})}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}

