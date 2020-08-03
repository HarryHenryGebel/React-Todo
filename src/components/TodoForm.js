import React from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const styles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
});

class TodoForm  extends React.Component {
  constructor() {
    super();

  }

  render () {
    const classes = this.props;

    return (
      <Card className={classes.root} variant="outlined">
        <h2>Add Todo Item:</h2>
        <Box m={1}>
          <TextField variant="filled" label="TODO Item"/>
        </Box>
        <br/>
        <Box m={1} component="span">
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<AddCircleIcon/>}>
            Add Todo Item
          </Button>
        </Box>
        <Box m={1} component="span">
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<HighlightOffIcon/>}>
            Clear completed items
          </Button>
        </Box>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TodoForm);
