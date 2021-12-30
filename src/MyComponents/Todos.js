import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3 ">Task List</h3>
      {props.todos.length == 0
        ? "There is no task in the list"
        : props.todos.map((todo) => {
            
            return(
               <div>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
                </div>
            ) 
            
          })}
    </div>
  );
};
