import React from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default class TodoForm extends React.Component {
  constructor (props) {
    super();

    this.addTodo = props.addTodo;
    this.clearCompleted = props.clearCompleted;
    this.state = {todoText: ""};
  }

  submitAndClear = () => {
    this.addTodo(this.state.todoText);
    this.setState({todoText: ""});
  }

  textChange = (event) => {
    this.setState({todoText: event.target.value});
  }

  render () {
    return (
      <Card variant="outlined">
        <h2>Add Todo Item:</h2>
        <Box m={1}>
          <TextField fullWidth={true}
                     id="todo-item-field"
                     onChange={this.textChange}
                     value={this.state.todoText}
                     variant="filled"
                     label="Todo Item"/>
        </Box>
        <br/>
        <Box m={1} component="span">
          <Button variant="contained"
                  disabled={this.state.todoText === ""}
                  startIcon={<AddCircleIcon/>}
                  onClick={this.submitAndClear}>
            Add Todo Item
          </Button>
        </Box>
        <Box m={1} component="span">
          <Button variant="contained"
                  onClick={this.clearCompleted}
                  startIcon={<HighlightOffIcon/>}>
            Clear completed items
          </Button>
        </Box>
      </Card>
    );
  }
}
