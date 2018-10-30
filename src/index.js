import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList"; //import the todolist componenet
  
var destination = document.querySelector("#container"); // this is where the react app will be rendered
  
ReactDOM.render(
    <div>
        <TodoList/> {/* render it here */}
    </div>,
    destination
);