import React from "react";

function Todo(props) { 
  return <li onClick={() => props.handleToggle(props.todo.id)}>{props.todo.task}</li>;
}



export default Todo;

// onClick={props.handleSingleClickEvent}
// onClick={() => this.props.toggle(this.props.todo.id)}