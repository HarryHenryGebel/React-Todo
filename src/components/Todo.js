import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Todo(props) {
  const {todoData, toggleCompleted} = props,
        // strike-through completed items
        lineStyle = todoData.completed ?
        {textDecoration: "line-through"} :
        {textDecoration: "none"};

  return (
    <ListItem button onClick={() => toggleCompleted(todoData)}>
          <ListItemText primary={todoData.task}
                        primaryTypographyProps={{style: lineStyle}}/>
        </ListItem>
  );
}

//  LocalWords:  ListItem ListItemText
