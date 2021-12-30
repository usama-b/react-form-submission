import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { Addtodo } from "./MyComponents/Addtodo";
import { Login } from "./MyComponents/Login";
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

//Delete function
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }


//Add function
  const addTodo = (title, task, sdate ) => {
    console.log("I am adding this todo", title, task, sdate)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      task: task,
      sdate: sdate,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const showdata = (()=>{
    let Entry = [];
    Entry.map((i) => {
      return (
        <div>
          <p>{i.YourEmail}</p>
          <p>{i.Password}</p>
        </div>
      );
    });

  })



//Use effect function to save data on local storange instantly
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



//Returning all components
  return ( 
    <>
      <Header title="My Todos List" /> 
     
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} /> 
      <Footer />
      </>
  );
}

export default App;
