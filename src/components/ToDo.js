import React, {useState}  from 'react'
import ToDoList from './ToDoList'

function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todos.map((todo, index) => (
        <div className = {todo.isFinished ? 'todo-row finished' : 'todo-row'} key={index} ></div>
    ))
}

export default Todo
