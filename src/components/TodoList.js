import React from "react";
import List from '@material-ui/core/List';

import Todo from "./Todo";

export default function TodoList (props) {
  const {todoList} = props;

  return (
    <List>
      {todoList.map(todoData => (
        <Todo todoData={todoData}/>
      ))}
    </List>
  );
}
