import React from "react";
import TodoForm from "../components/todo-form/TodoForm";
import TodoList from "../components/todo-list/TodoList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: this.getTodoList(), filterCriteria: "all" };
  }
 
  getTodoList = () => {
    const todoListLocal = localStorage.getItem("todo-list");
    return todoListLocal ? JSON.parse(todoListLocal) : [];
  };

  filterTodo = (filterCriteria) => {
    this.setState({ filterCriteria });
  };

  addTodo = (value) => {
    if (!value) return;

    this.setState({
      todoList: [...this.state.todoList, { task: value, isCompleted: false, isRemoved: false }],
    });
  };

  saveLocalTodoList = () => {
    localStorage.setItem("todo-list", JSON.stringify(this.state.todoList));
  };

  toggleSTT = (i) => {
    this.setState((state) => {
      return state.todoList.map((el, index) =>
        i === index ? (el.isCompleted = true) : el
      );
    });
  };

  prepareRemove = (i) => {
    this.setState((state) => {
      return state.todoList.map((el, index) =>
        i === index ? (el.isRemoved = true) : el
      );
    });
  };

  removeToDo = () => {
    const todoListAfterRemove = this.state.todoList.filter(el => !el.isRemoved)
    this.setState({todoList: todoListAfterRemove})
  };
  componentDidUpdate() {
    this.saveLocalTodoList();
  }

  render() {
    window.renderTime = window.renderTime + 1;
    console.log('render',window.renderTime)
    const {filterCriteria, todoList} = this.state;
      const todoListFiltered = filterCriteria === "all" ? todoList
                             : todoList.filter((x) => filterCriteria === "completed" ? x.isCompleted : !x.isCompleted);
    return (
      <>
        <TodoForm onAdd={this.addTodo} onFilter={this.filterTodo} />
        <TodoList
          todoList={todoListFiltered}
          onToggleSTT={this.toggleSTT}
          onRemoveTodo={this.removeToDo}
          onPrepareRemove={this.prepareRemove}
        />
      </>
    );
  }
}

export default App;
