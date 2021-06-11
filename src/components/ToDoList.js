import React, {useState} from 'react'
import ToDoForm from './ToDoForm';

function ToDoList() {

 const [todos, setTodos] = useState([])
 
 const addToDo = todo => {
    // if statement to remove all the empty spaces
    if(!todo.text || /^\s*$/.test(todo.text)) {
        return
    }
    
    const newTodos = [todo, ...todos]

    setTodos(newTodos)

    // console.log(...todos);
};
 
 return (
        <div>
            <h3> What is the Plan for Today</h3>
            <ToDoForm onSubmit={addToDo} />
        </div>
    )
}

export default ToDoList
