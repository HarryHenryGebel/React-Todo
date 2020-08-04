import React from "react";
import "fontsource-roboto";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todoList: []
    };
  }

  addTodo = (todoText) => {
    // create a new TodoItem and add it to the list
    this.setState(
      {todoList: [...this.state.todoList, new TodoItem(todoText)]});
  }

  clearCompleted = () => {
    // remove any completed TodoItem instances from state
    this.setState({todoList: this.state.todoList.filter(
      (todoItem) => !todoItem.completed
    )});
  }

  // toggle completed state of a TodoItem
  toggleCompleted = (toggleItem) => {
    this.setState({todoList: this.state.todoList.map(
      todoData =>
        (todoData.id === toggleItem.id) ?
        {...todoData, completed: !todoData.completed} :
      todoData)});
  }

  render() {
    return (
      <div>
        <h1>Gebeldo</h1>
        <TodoList todoList={this.state.todoList}
                  toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo}
                  clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

//  LocalWords:  TodoForm TodoItem TodoList
