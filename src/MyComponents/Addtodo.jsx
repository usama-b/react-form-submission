import React, { useState } from 'react';


export const Addtodo = (props) => {
    const [title, settitle] = useState("")
    const [task, settask] = useState("")
    const [sdate, setsdate] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !task || !sdate){
            alert("Title, task, submission date can not be blank")
        }
        else{
            props.addTodo(title, task, sdate);
            settitle("");
            settask("");
            setsdate(""); 
        }

    }
  return (
    <div className="container my-3">
        <h3 className="text-center">ADD YOUR TASK <small class="text-muted">TO THE LIST</small></h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e)=>{
                settitle(e.target.value)
            }}
            aria-describedby="titleHelp"
            placeholder="Enter Title"
          />
          <small id="titleHelp" className="form-text text-muted">
            It'll add a task title in the list.
          </small>
        </div>
        <div className="form-group">
          <label for="task">Your Task</label>
          <input
            type="text"
            className="form-control"
            id="task"
            value={task}
            onChange={(e)=>{
                settask(e.target.value)
            }}
            placeholder="Enter task description"
          />
        </div>
        <div className="form-group">
          <label for="date">Submission Date</label>
          <input
            type="date"
            className="form-control"
            id="sdate"
            value={sdate}
            onChange={(e)=>{
                setsdate(e.target.value)
            }}
            placeholder="Submission Date"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
