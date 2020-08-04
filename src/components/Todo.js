import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Todo(props) {
  const {todoData} = props;

  return (
        <ListItem button>
          <ListItemText primary={todoData.task} />
        </ListItem>
  );
}

//  LocalWords:  ListItem ListItemText
