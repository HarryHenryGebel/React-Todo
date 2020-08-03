import React from "react";
import "fontsource-roboto";

import TodoForm from "./components/TodoForm.js";

export default class App extends React.Component {
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
  }

  render() {
    return (
      <div>
        <h1>Gebeldo</h1>
        <TodoForm/>
      </div>
    );
  }
}
