import React from 'react'

export const TodoItem = ({todo, onDelete, onComplete}) => {
    return (
        <div>
            <h4 className="text-danger">{todo.title}</h4>
            <p><strong className="text-muted">Task Description: </strong>{todo.task}</p>
            <p><strong className="text-muted">Submission Date: </strong>{todo.sdate}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            <button className="btn btn-sm btn-success mx-2" onClick={()=>{onComplete(todo)}}>Completed</button>
        

        </div>
    )
}
