import React from "react";
import "fontsource-roboto";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todoList: []
    };
  }

  addTodo(todoText) {
    // create a new TodoItem and add it to the list
    this.setState(
      {todoList: [...this.state.todoList, new TodoItem(todoText)]});
  }

  clearCompleted() {
    // remove any completed TodoItem instances from state
    this.setState({todoList: this.state.todoList.filter(
      (todoItem) => !todoItem.completed
    )});
  }

  render() {
    return (
      <div>
        <h1>Gebeldo</h1>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

//  LocalWords:  TodoForm TodoItem
