import React from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default function TodoForm (props) {

  return (
    <Card variant="outlined">
      <h2>Add Todo Item:</h2>
      <Box m={1}>
        <TextField fullWidth="true" variant="filled" label="TODO Item"/>
      </Box>
      <br/>
      <Box m={1} component="span">
        <Button variant="contained" startIcon={<AddCircleIcon/>}>
          Add Todo Item
        </Button>
      </Box>
      <Box m={1} component="span">
        <Button variant="contained" startIcon={<HighlightOffIcon/>}>
          Clear completed items
        </Button>
      </Box>
    </Card>
  );
}
